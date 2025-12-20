import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import { errorHandler } from './middleware/errorHandler';
import productRoutes from './routes/productRoutes';
import uploadRoutes from './routes/uploadRoutes';

// Load environment variable
dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'], // Vite default port
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' })); // Increased for multiple images
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Routes
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/upload', uploadRoutes);

// Health check
app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handler (must be last)
app.use(errorHandler);

// Database connection and server start
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  });
