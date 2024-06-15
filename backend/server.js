const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 5000;

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'mydb'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/api/hello', (req, res) => {
    const query = 'SELECT message FROM hello_world LIMIT 1';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Error fetching data from database' });
            return;
        }
        res.json({ message: results[0].message });
    });
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
