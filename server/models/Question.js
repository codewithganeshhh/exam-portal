import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  subject: {
    type: String,
    enum: ['HTML', 'CSS', 'JS'],
    required: true,
    index: true,
  },
  questionNumber: {
    type: Number,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
    validate: [val => val.length === 4, 'Must have exactly 4 options'],
  },
  correctOption: {
    type: Number,
    required: true,
    min: 0,
    max: 3,
  },
  explanation: {
    type: String,
    default: '',
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'intermediate',
  },
}, { timestamps: true });

// Compound index to ensure uniqueness per subject and questionNumber
questionSchema.index({ subject: 1, questionNumber: 1 }, { unique: true });

const Question = mongoose.model('Question', questionSchema);
export default Question;
