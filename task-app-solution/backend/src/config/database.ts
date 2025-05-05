import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER || 'your-username',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'your-database',
    password: process.env.DB_PASSWORD || 'your-password', // Ensure this is a string
    port: parseInt(process.env.DB_PORT || '5432', 10),
});

export const connectDatabase = async () => {
    try {
        await pool.connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
};

export default pool;