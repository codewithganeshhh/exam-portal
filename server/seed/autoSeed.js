import User from '../models/User.js';
import Question from '../models/Question.js';
import { htmlQuestions } from './htmlQuestions.js';
import { cssQuestions } from './cssQuestions.js';
import { jsQuestions } from './jsQuestions.js';
import { aimlQuestions } from './aimlQuestions.js';

export async function checkAndAutoSeed() {
  try {
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

    // 3. Ensure base questions (HTML, CSS, JS) exist
    const baseQuestionCount = await Question.countDocuments({ subject: { $in: ['HTML', 'CSS', 'JS'] } });
    if (baseQuestionCount === 0) {
      const baseQuestions = [
        ...htmlQuestions.map(q => ({ ...q, subject: 'HTML', difficulty: 'intermediate' })),
        ...cssQuestions.map(q => ({ ...q, subject: 'CSS', difficulty: 'intermediate' })),
        ...jsQuestions.map(q => ({ ...q, subject: 'JS', difficulty: 'intermediate' })),
      ];
      await Question.insertMany(baseQuestions);
      console.log(`✅ Auto-seed: Seeded ${baseQuestions.length} exam questions (HTML, CSS, JS)!`);
    }

    // 4. Ensure AIML questions exist
    const aimlCount = await Question.countDocuments({ subject: 'AIML' });
    if (aimlCount === 0) {
      const aimlData = aimlQuestions.map(q => ({ ...q, subject: 'AIML', difficulty: q.difficulty || 'basic' }));
      await Question.insertMany(aimlData);
      console.log(`✅ Auto-seed: Seeded ${aimlData.length} AIML exam questions (40 Basic + 10 Medium)!`);
    }

    console.log('🎉 Auto-seeding check finished successfully!');
  } catch (error) {
    console.error('⚠️ Auto-seed check failed (non-fatal):', error.message);
  }
}
