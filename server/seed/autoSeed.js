import User from '../models/User.js';
import Question from '../models/Question.js';
import { htmlQuestions } from './htmlQuestions.js';
import { cssQuestions } from './cssQuestions.js';
import { jsQuestions } from './jsQuestions.js';

export async function checkAndAutoSeed() {
  try {
    const userCount = await User.countDocuments();
    const questionCount = await Question.countDocuments();

    // If users or questions already exist, skip automatic seeding
    if (userCount > 0 && questionCount > 0) {
      console.log(`Database already has ${userCount} users and ${questionCount} questions. Auto-seed skipped.`);
      return;
    }

    console.log('Database is empty or incomplete. Running initial auto-seed...');

    // 1. Ensure Admin exists
    const adminExists = await User.findOne({ username: 'admin' });
    if (!adminExists) {
      const admin = new User({
        name: 'System Admin',
        username: 'admin',
        password: 'admin',
        role: 'admin',
      });
      await admin.save();
      console.log('✅ Auto-seed: Created Admin user (username: admin / password: admin)');
    }

    // 2. Ensure Sample Student exists
    const studentExists = await User.findOne({ username: 'student' });
    if (!studentExists) {
      const student = new User({
        name: 'Sample Student',
        username: 'student',
        password: 'student',
        role: 'student',
      });
      await student.save();
      console.log('✅ Auto-seed: Created Student user (username: student / password: student)');
    }

    // 3. Ensure Questions exist
    if (questionCount === 0) {
      const allQuestions = [
        ...htmlQuestions.map(q => ({ ...q, subject: 'HTML', difficulty: 'intermediate' })),
        ...cssQuestions.map(q => ({ ...q, subject: 'CSS', difficulty: 'intermediate' })),
        ...jsQuestions.map(q => ({ ...q, subject: 'JS', difficulty: 'intermediate' })),
      ];
      await Question.insertMany(allQuestions);
      console.log(`✅ Auto-seed: Seeded ${allQuestions.length} exam questions (HTML, CSS, JS)!`);
    }

    console.log('🎉 Auto-seeding finished successfully!');
  } catch (error) {
    console.error('⚠️ Auto-seed check failed (non-fatal):', error.message);
  }
}
