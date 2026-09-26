import mongoose from 'mongoose';

const answerItemSchema = new mongoose.Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
  },
  questionNumber: Number,
  selectedOption: {
    type: Number,
    default: null, // null if unattempted
  },
  correctOption: Number,
  isCorrect: Boolean,
}, { _id: false });

const examResultSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  studentUsername: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    enum: ['HTML', 'CSS', 'JS', 'AIML'],
    required: true,
    index: true,
  },
  totalQuestions: {
    type: Number,
    default: 50,
  },
  attemptedQuestions: {
    type: Number,
    required: true,
  },
  correctAnswers: {
    type: Number,
    required: true,
  },
  wrongAnswers: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  timeSpentSeconds: {
    type: Number,
    default: 0,
  },
  passed: {
    type: Boolean,
    default: false,
  },
  answers: [answerItemSchema],
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const ExamResult = mongoose.model('ExamResult', examResultSchema);
export default ExamResult;
