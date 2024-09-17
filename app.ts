import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Config/db';
import authRoutes from './routes/authRoutes'
import dataRoutes from './routes/dataRoutes';
import { errorHandler } from './middleware/errorHandler';
import logger from './Config/logger';

//Initialize dotenv 
dotenv.config();

//Initialize 
const app = express();

//Connect to the database
connectDB();

//middleware
app.use(express.json());

//API routes
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);

//error handler
app.use(errorHandler);

//Default route
app.get('/', (req, res) => {
    res.send('API is running');
});

export default app