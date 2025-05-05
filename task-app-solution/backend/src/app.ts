import express from 'express';
import taskRoutes from './routes/taskRoutes';
import { connectDatabase } from './config/database';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database connection
connectDatabase();

// Routes
app.use('/api', taskRoutes); // Use the task routes under the "/api" prefix

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});