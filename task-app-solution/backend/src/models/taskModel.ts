import { Pool } from 'pg';

export class TaskModel {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: Number(process.env.DB_PORT),
        });
    }

    async createTask(task: { title: string; description: string; }): Promise<void> {
        const query = 'INSERT INTO tasks (title, description) VALUES ($1, $2)';
        await this.pool.query(query, [task.title, task.description]);
    }

    async getTasks(): Promise<any[]> {
        const query = 'SELECT * FROM tasks';
        const result = await this.pool.query(query);
        return result.rows;
    }

    async updateTask(id: number, task: { title?: string; description?: string; }): Promise<void> {
        const query = 'UPDATE tasks SET title = COALESCE($1, title), description = COALESCE($2, description) WHERE id = $3';
        await this.pool.query(query, [task.title, task.description, id]);
    }

    async deleteTask(id: number): Promise<void> {
        const query = 'DELETE FROM tasks WHERE id = $1';
        await this.pool.query(query, [id]);
    }
}