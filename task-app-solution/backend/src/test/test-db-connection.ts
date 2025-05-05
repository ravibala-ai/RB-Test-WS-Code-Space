import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

console.log({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const pool = new Pool({
    user: process.env.DB_USER || 'your-username',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'your-database',
    password: process.env.DB_PASSWORD || 'your-password',
    port: parseInt(process.env.DB_PORT || '5432', 10),
});

const testDatabaseConnection = async () => {
    try {
        const client = await pool.connect();
        console.log('✅ Connected to the database successfully!');
        client.release();
    } catch (error) {
        console.error('❌ Database connection error:', error);
    } finally {
        pool.end();
    }
};

testDatabaseConnection();