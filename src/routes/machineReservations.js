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

    // Route to get the list of machine reservations
    router.get('/', (req, res) => {
        const selectQuery = 'SELECT * FROM machine_reservations';
        db.query(selectQuery, (err, results) => {
            if (err) {
                console.error('Error fetching reservations:', err);
                return res.status(500).json({ message: 'Error fetching reservations', error: err });
            }
            res.json(results);
        });
    });

    // Route to update a machine reservation
    router.put('/:id', (req, res) => {
        const { id } = req.params;
        const { machineName, userName, startTime, endTime } = req.body;
        const updateQuery = 'UPDATE machine_reservations SET machine_name = ?, user_name = ?, start_time = ?, end_time = ? WHERE id = ?';
        db.query(updateQuery, [machineName, userName, startTime, endTime, id], (err, result) => {
            if (err) {
                console.error('Error updating reservation:', err);
                return res.status(500).json({ message: 'Error updating reservation', error: err });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Reservation not found' });
            }
            res.json({ message: 'Reservation updated' });
        });
    });

    return router;
};
