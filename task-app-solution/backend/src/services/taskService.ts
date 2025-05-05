import { TaskModel } from '../models/taskModel';

export class TaskService {
    private taskModel: TaskModel;

    constructor() {
        this.taskModel = new TaskModel();
    }

    async addTask(taskData: any) {
        return await this.taskModel.createTask(taskData);
    }

    public async fetchTasks() {
        // Use the correct method name from TaskModel
        return await this.taskModel.getTasks();
    }

    async modifyTask(taskId: string, taskData: any) {
        const numericTaskId = parseInt(taskId, 10); // Convert taskId to a number
        if (isNaN(numericTaskId)) {
            throw new Error('Invalid task ID. It must be a number.');
        }
        return await this.taskModel.updateTask(numericTaskId, taskData);
    }

    async removeTask(taskId: string) {
        const numericTaskId = parseInt(taskId, 10); // Convert taskId to a number
        if (isNaN(numericTaskId)) {
            throw new Error('Invalid task ID. It must be a number.');
        }
        return await this.taskModel.deleteTask(numericTaskId);
    }
}