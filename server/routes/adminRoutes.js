import express from 'express';
import User from '../models/User.js';
import ExamResult from '../models/ExamResult.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Apply protect and adminOnly to all routes in this router
router.use(protect, adminOnly);

// @route   POST /api/admin/students
// @desc    Add a new student
// @access  Private (Admin only)
router.post('/students', async (req, res) => {
  try {
    const { name, username, password } = req.body;

    if (!name || !username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, username, and password are required',
      });
    }

    if (password.length < 4) {
      return res.status(400).json({
        success: false,
        message: 'Password should be at least 4 characters long',
      });
    }

    const cleanUsername = username.trim().toLowerCase();

    // Check if username exists
    const existing = await User.findOne({ username: cleanUsername });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: `Username '${cleanUsername}' is already taken. Please choose another.`,
      });
    }

    const newStudent = new User({
      name: name.trim(),
      username: cleanUsername,
      password: password.trim(),
      role: 'student',
    });

    await newStudent.save();

    return res.status(201).json({
      success: true,
      message: 'Student account created successfully!',
      student: {
        id: newStudent._id,
        name: newStudent.name,
        username: newStudent.username,
        role: newStudent.role,
        createdAt: newStudent.createdAt,
      },
    });
  } catch (error) {
    console.error('Create student error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create student account',
      error: error.message,
    });
  }
});

// @route   GET /api/admin/students
// @desc    Get all students with their exam attempt count
// @access  Private (Admin only)
router.get('/students', async (req, res) => {
  try {
    const students = await User.find({ role: 'student' })
      .select('-password')
      .sort({ createdAt: -1 });

    // Enhance with attempt counts
    const studentsWithStats = await Promise.all(
      students.map(async (student) => {
        const attemptsCount = await ExamResult.countDocuments({ studentId: student._id });
        const lastExam = await ExamResult.findOne({ studentId: student._id })
          .sort({ submittedAt: -1 })
          .select('subject score percentage submittedAt');
        return {
          ...student.toObject(),
          attemptsCount,
          lastExam,
        };
      })
    );

    return res.status(200).json({
      success: true,
      count: studentsWithStats.length,
      students: studentsWithStats,
    });
  } catch (error) {
    console.error('Fetch students error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve students',
      error: error.message,
    });
  }
});

// @route   DELETE /api/admin/students/:id
// @desc    Delete a student and their exam results
// @access  Private (Admin only)
router.delete('/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const student = await User.findById(id);

    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    if (student.role === 'admin') {
      return res.status(400).json({ success: false, message: 'Cannot delete admin account' });
    }

    await User.findByIdAndDelete(id);
    await ExamResult.deleteMany({ studentId: id });

    return res.status(200).json({
      success: true,
      message: `Student '${student.name}' and associated results removed successfully`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to delete student',
      error: error.message,
    });
  }
});

// @route   GET /api/admin/results
// @desc    Get all exam submissions with filters (subject, search query)
// @access  Private (Admin only)
router.get('/results', async (req, res) => {
  try {
    const { subject, search } = req.query;

    const filter = {};
    if (subject && ['HTML', 'CSS', 'JS'].includes(subject.toUpperCase())) {
      filter.subject = subject.toUpperCase();
    }

    if (search) {
      const searchRegex = new RegExp(search, 'i');
      filter.$or = [
        { studentName: searchRegex },
        { studentUsername: searchRegex },
      ];
    }

    const results = await ExamResult.find(filter)
      .sort({ submittedAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      count: results.length,
      results,
    });
  } catch (error) {
    console.error('Fetch results error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch exam results',
      error: error.message,
    });
  }
});

// @route   GET /api/admin/stats
// @desc    Get dashboard metrics (counts, subject averages)
// @access  Private (Admin only)
router.get('/stats', async (req, res) => {
  try {
    const totalStudents = await User.countDocuments({ role: 'student' });
    const totalExams = await ExamResult.countDocuments();

    // Subject breakdown
    const subjects = ['HTML', 'CSS', 'JS'];
    const subjectStats = {};

    for (const sub of subjects) {
      const count = await ExamResult.countDocuments({ subject: sub });
      const avgAggregate = await ExamResult.aggregate([
        { $match: { subject: sub } },
        { $group: { _id: null, avgScore: { $avg: '$score' }, avgPct: { $avg: '$percentage' } } },
      ]);

      subjectStats[sub] = {
        count,
        avgScore: avgAggregate.length > 0 ? Math.round(avgAggregate[0].avgScore * 10) / 10 : 0,
        avgPct: avgAggregate.length > 0 ? Math.round(avgAggregate[0].avgPct * 10) / 10 : 0,
      };
    }

    // Top performers
    const topPerformers = await ExamResult.find()
      .sort({ score: -1, percentage: -1, timeSpentSeconds: 1 })
      .limit(5)
      .select('studentName studentUsername subject score percentage submittedAt');

    return res.status(200).json({
      success: true,
      stats: {
        totalStudents,
        totalExams,
        subjectStats,
        topPerformers,
      },
    });
  } catch (error) {
    console.error('Fetch stats error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch analytics',
      error: error.message,
    });
  }
});

export default router;
