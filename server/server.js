import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import examRoutes from './routes/examRoutes.js';
import { checkAndAutoSeed } from './seed/autoSeed.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/exam_portal';

// Middlewares
const allowedOrigin = process.env.CORS_ORIGIN || '*';
app.use(cors({
  origin: allowedOrigin === '*' ? '*' : allowedOrigin.split(',').map(s => s.trim()),
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Root endpoint for Render & browser health checks
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'online',
    name: 'Exam Portal API',
    version: '1.0.0',
    health: '/api/health',
    timestamp: new Date().toISOString(),
  });
});

// Health Check / Root route
app.get('/api/health', (req, res) => {
  const isDbConnected = mongoose.connection.readyState === 1;
  res.status(200).json({
    status: 'online',
    database: isDbConnected ? 'connected' : 'disconnected',
    message: isDbConnected 
      ? 'Exam Portal API & Database are connected and healthy' 
      : 'API is running, but MongoDB is not connected yet. Please update MONGO_URI in server/.env with your MongoDB Atlas or Local connection string.',
    timestamp: new Date().toISOString(),
  });
});

// Middleware to check DB connection before processing DB-backed routes
app.use('/api', (req, res, next) => {
  if (req.path === '/health') return next();
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      success: false,
      databaseOffline: true,
      message: 'MongoDB is not connected yet! Please add your MongoDB link in server/.env (MONGO_URI) and run "npm run seed".',
    });
  }
  next();
});

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/exams', examRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack || err);
  res.status(500).json({
    success: false,
    message: 'Internal server error occurred',
    error: err.message || 'Unknown error',
  });
});

// Start Express Server immediately
app.listen(PORT, () => {
  console.log(`🚀 Exam Portal Server running on http://localhost:${PORT}`);
  connectDatabase();
});

// Connect to MongoDB with timeout and retry
const connectDatabase = async (retryCount = 1, maxRetries = 5) => {
  try {
    const maskedUri = MONGO_URI.includes('@') 
      ? MONGO_URI.replace(/:([^:@]{3})[^:@]*@/, ':***@')
      : MONGO_URI;
    console.log(`Connecting to MongoDB at: ${maskedUri}... (Attempt ${retryCount}/${maxRetries})`);

    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 15000,
    });
    console.log('✅ Connected to MongoDB successfully!');

    // Check and automatically seed fresh database if empty
    await checkAndAutoSeed();
  } catch (error) {
    console.error('⚠️ MongoDB Connection Failed:', error.message);
    if (retryCount < maxRetries) {
      console.log(`⏳ Retrying MongoDB connection in 4 seconds... (Attempt ${retryCount + 1}/${maxRetries})`);
      setTimeout(() => connectDatabase(retryCount + 1, maxRetries), 4000);
    } else {
      console.log('⚠️ MongoDB is still not reachable at:', MONGO_URI);
      console.log('👉 Tip: Check MongoDB Atlas "Network Access" -> ensure "0.0.0.0/0" (Allow Access from Anywhere) is added.');
    }
  }
};
