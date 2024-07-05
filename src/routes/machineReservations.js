const express = require('express');
const router = express.Router();

module.exports = (db) => {
    // Route to add a new machine reservation
    router.post('/', (req, res) => {
        const { machineName, userName, startTime, endTime } = req.body;
        const insertQuery = 'INSERT INTO machine_reservations (machine_name, user_name, start_time, end_time) VALUES (?, ?, ?, ?)';
        db.query(insertQuery, [machineName, userName, startTime, endTime], (err, result) => {
            if (err) {
                console.error('Error adding reservation:', err);
                return res.status(500).json({ message: 'Error adding reservation', error: err });
            }
            res.status(201).json({ id: result.insertId, machineName, userName, startTime, endTime });
        });
    });

    return router;
};
