import mysql from 'mysql2/promise';
import 'dotenv/config';

const database = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'notes_db',
});

async function testConnection() {
    try {
        await database.getConnection();
        console.log("Successfully connected to the database!");
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
}

async function executeQuery(command, values = []) {
    try {
        const [result] = await database.query(command, values);
        return result;
    } catch (error) {
        console.error("Error executing query:", error);
    }
}

export { executeQuery, testConnection };
