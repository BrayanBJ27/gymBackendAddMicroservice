const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = process.env.Por || 8088;

// Middleware
app.use(cors());
app.use(express.json());

// Configure the database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Route to add a new reserve
app.post('/reservations', (req, res) => {
    const { machineName, userName, startTime, endTime } = req.body;
    const insertQuery = 'INSERT INTO machine_reservations (machine_name, user_name, start_time, end_time) VALUES (?, ?, ?, ?)';
    db.query(query, [machineName, userName, startTime, endTime], (err, result) => {
        if (err) {
            console.error('Error adding reservation:', err);
            res.status(500).send({ message: 'Error adding reservation', error: err });
            return;
        }
        res.status(201).send({ id: result.insertId, machineName, userName, startTime, endTime });
    });
});

// Root route to check if the server is running
app.get('/', (req, res) => {
    res.send('Server Running');
});

app.listen(port, () => {
    console.log(`Add Reservations Machines service listening at http://localhost:${port}`);
});
