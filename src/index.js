const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 8083;

// Middleware
app.use(cors());
app.use(express.json());

// Configure the database connection
const db = mysql.createConnection({
    host: 'mysql-programaciondis.alwaysdata.net',
    user: '357676_bj',
    password: 'Uyt:tBHLgt4Kk_E',
    database: 'programaciondis_gym'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Import routes
const machineReservationsRoutes = require('./routes/machineReservations')(db);
app.use('/reservations', machineReservationsRoutes);

// Root route to check if the server is running
app.get('/', (req, res) => {
    res.send('Server Running');
});

app.listen(port, () => {
    console.log(`Machines service listening at http://localhost:${port}`);
});
