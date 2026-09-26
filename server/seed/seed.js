import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import User from '../models/User.js';
import Question from '../models/Question.js';
import { htmlQuestions } from './htmlQuestions.js';
import { cssQuestions } from './cssQuestions.js';
import { jsQuestions } from './jsQuestions.js';
import { aimlQuestions } from './aimlQuestions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/exam_portal';

async function seedDatabase() {
  try {
    console.log('Connecting to MongoDB for seeding...');
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB successfully!');

    // 1. Seed or update Admin User with username 'admin' and password 'admin'
    let existingAdmin = await User.findOne({ username: 'admin' });
    if (!existingAdmin) {
      const admin = new User({
        name: 'System Admin',
        username: 'admin',
        password: 'admin',
        role: 'admin',
      });
      await admin.save();
      console.log('✅ Created Admin account: Username = admin | Password = admin');
    } else {
      existingAdmin.password = 'admin';
      await existingAdmin.save();
      console.log('✅ Updated Admin account password to: admin (Username = admin | Password = admin)');
    }

    // 2. Seed a sample Student for immediate testing
    let existingStudent = await User.findOne({ username: 'student' });
    if (!existingStudent) {
      const student = new User({
        name: 'Sample Student',
        username: 'student',
        password: 'student',
        role: 'student',
      });
      await student.save();
      console.log('✅ Created Student account: Username = student | Password = student');
    } else {
      existingStudent.password = 'student';
      await existingStudent.save();
      console.log('✅ Updated Student account password to: student');
    }

    // 3. Clear existing questions and insert fresh questions
    await Question.deleteMany({});
    console.log('Cleared existing questions...');

    // Prepare questions with subject tags
    const allQuestions = [
      ...htmlQuestions.map(q => ({ ...q, subject: 'HTML', difficulty: 'intermediate' })),
      ...cssQuestions.map(q => ({ ...q, subject: 'CSS', difficulty: 'intermediate' })),
      ...jsQuestions.map(q => ({ ...q, subject: 'JS', difficulty: 'intermediate' })),
      ...aimlQuestions.map(q => ({ ...q, subject: 'AIML', difficulty: q.difficulty || 'basic' })),
    ];

    await Question.insertMany(allQuestions);
    console.log(`🎉 Successfully seeded ${allQuestions.length} questions into MongoDB!`);
    console.log(`   - HTML:  ${htmlQuestions.length} questions`);
    console.log(`   - CSS:   ${cssQuestions.length} questions`);
    console.log(`   - JS:    ${jsQuestions.length} questions`);
    console.log(`   - AIML:  ${aimlQuestions.length} questions (40 Basic + 10 Medium)`);

    console.log('\n--- Seeding Complete ---');
    console.log('You can log in at the portal with:');
    console.log('👑 Admin:   username: admin    | password: admin');
    console.log('🎓 Student: username: student  | password: student');

    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seedDatabase();
