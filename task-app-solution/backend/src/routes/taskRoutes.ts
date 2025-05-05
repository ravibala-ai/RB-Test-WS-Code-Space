import { Router } from 'express';
import { TaskController } from '../controllers/taskController';
import { validateTask, validateTaskId } from '../middlewares/taskValidation';

const router = Router();
const taskController = new TaskController();

// Define routes for task management
router.post('/tasks', validateTask, taskController.createTask.bind(taskController)); // Add a task
router.get('/tasks', taskController.getTasks.bind(taskController)); // Get all tasks
router.put('/tasks/:id', validateTaskId, validateTask, taskController.updateTask.bind(taskController)); // Edit a task
router.delete('/tasks/:id', validateTaskId, taskController.deleteTask.bind(taskController)); // Delete a task

// Export the router
export default router;