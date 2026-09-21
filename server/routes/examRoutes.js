import express from 'express';
import Question from '../models/Question.js';
import ExamResult from '../models/ExamResult.js';
import { protect, studentOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Apply protect to all routes
router.use(protect);

// @route   GET /api/exams/:subject
// @desc    Get all questions for a subject (sanitized: hides correctOption & explanation)
// @access  Private (Student)
router.get('/:subject', studentOnly, async (req, res) => {
  try {
    const subject = req.params.subject.toUpperCase();

    if (!['HTML', 'CSS', 'JS'].includes(subject)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid subject. Available exams: HTML, CSS, JS',
      });
    }

    // Fetch questions sorted by questionNumber, excluding correct answers & explanation
    const questions = await Question.find({ subject })
      .select('questionNumber questionText options difficulty')
      .sort({ questionNumber: 1 })
      .lean();

    if (questions.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No questions found for ${subject}. Please run seed script first.`,
      });
    }

    return res.status(200).json({
      success: true,
      subject,
      totalQuestions: questions.length,
      questions,
    });
  } catch (error) {
    console.error('Fetch questions error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to load exam questions',
      error: error.message,
    });
  }
});

// @route   POST /api/exams/submit
// @desc    Submit exam answers, calculate score, persist result
// @access  Private (Student)
router.post('/submit', studentOnly, async (req, res) => {
  try {
    const { subject, answers, timeSpentSeconds } = req.body;

    if (!subject || !['HTML', 'CSS', 'JS'].includes(subject.toUpperCase())) {
      return res.status(400).json({ success: false, message: 'Valid subject is required' });
    }

    const sub = subject.toUpperCase();

    // Fetch all questions with answers from DB
    const questions = await Question.find({ subject: sub })
      .sort({ questionNumber: 1 })
      .lean();

    if (questions.length === 0) {
      return res.status(404).json({ success: false, message: 'Questions not found for evaluation' });
    }

    let correctCount = 0;
    let wrongCount = 0;
    let attemptedCount = 0;
    const answerBreakdown = [];

    questions.forEach((q) => {
      // answers can be an object keyed by questionNumber or questionId
      const selected = answers ? answers[q.questionNumber] : undefined;
      const isAttempted = selected !== undefined && selected !== null && selected !== -1;

      let isCorrect = false;
      if (isAttempted) {
        attemptedCount += 1;
        if (Number(selected) === q.correctOption) {
          correctCount += 1;
          isCorrect = true;
        } else {
          wrongCount += 1;
        }
      }

      answerBreakdown.push({
        questionId: q._id,
        questionNumber: q.questionNumber,
        selectedOption: isAttempted ? Number(selected) : null,
        correctOption: q.correctOption,
        isCorrect,
      });
    });

    const totalQuestions = questions.length;
    const score = correctCount;
    const percentage = Math.round((correctCount / totalQuestions) * 1000) / 10;
    const passed = percentage >= 50;

    const newResult = new ExamResult({
      studentId: req.user._id,
      studentName: req.user.name,
      studentUsername: req.user.username,
      subject: sub,
      totalQuestions,
      attemptedQuestions: attemptedCount,
      correctAnswers: correctCount,
      wrongAnswers: wrongCount,
      score,
      percentage,
      passed,
      timeSpentSeconds: Number(timeSpentSeconds) || 0,
      answers: answerBreakdown,
    });

    await newResult.save();

    return res.status(201).json({
      success: true,
      message: 'Exam submitted successfully!',
      result: {
        id: newResult._id,
        subject: newResult.subject,
        totalQuestions,
        attemptedQuestions: attemptedCount,
        correctAnswers: correctCount,
        wrongAnswers: wrongCount,
        score,
        percentage,
        passed,
        timeSpentSeconds: newResult.timeSpentSeconds,
        submittedAt: newResult.submittedAt,
      },
    });
  } catch (error) {
    console.error('Exam submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to evaluate and save exam result',
      error: error.message,
    });
  }
});

// @route   GET /api/exams/my-results
// @desc    Get logged in student's results history
// @access  Private (Student)
router.get('/student/my-results', studentOnly, async (req, res) => {
  try {
    const results = await ExamResult.find({ studentId: req.user._id })
      .sort({ submittedAt: -1 })
      .select('-answers')
      .lean();

    return res.status(200).json({
      success: true,
      results,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch exam history',
      error: error.message,
    });
  }
});

// @route   GET /api/exams/student/summary
// @desc    Get student summary status for HTML, CSS, JS
// @access  Private (Student)
router.get('/student/summary', studentOnly, async (req, res) => {
  try {
    const subjects = ['HTML', 'CSS', 'JS'];
    const summary = {};

    for (const sub of subjects) {
      const best = await ExamResult.findOne({ studentId: req.user._id, subject: sub })
        .sort({ score: -1, submittedAt: -1 })
        .lean();
      
      const totalAttempts = await ExamResult.countDocuments({
        studentId: req.user._id,
        subject: sub,
      });

      summary[sub] = {
        attempted: totalAttempts > 0,
        totalAttempts,
        bestResult: best || null,
      };
    }

    return res.status(200).json({
      success: true,
      summary,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch student summary',
      error: error.message,
    });
  }
});

export default router;
