require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Port = process.env.PORT || 5001;
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.SECRET;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(5);
const authenticateJWT = require("./middleware/authenticateJWT");
const Reservation = require('api/models/reservationDB.js'); 

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173", // Adjust if needed
    credentials: true,
}));
app.use(cookieParser());

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// API route for reservation
app.post('/api/reservation', authenticateJWT, async (req, res) => {
    console.log(req.body); // Log the request body for debugging

    const {
        carType, pickPlace, dropPlace,
        pickDate, dropDate, pickTime, dropTime,
        firstname, lastname, age, phone, email,
        address, city, zipcode
    } = req.body;api/models/reservationDB.js

    const clientId = req.user.id; // Extract client ID from authenticated user
    try {
        // Create a new reservation
        const reservation = new Reservation({
            owner: clientId,
            firstname, lastname, age, phone, email,
            address, city, zipcode,
            carType, pickPlace, dropPlace,
            pickDate, dropDate, pickTime, dropTime
        });

        await reservation.save();
        res.json(reservation);
    } catch (error) {
        console.error('Error saving reservation:', error); // Log the error
        res.status(400).json({ error: error.message || 'An error occurred' });
    }
});

// Start the server
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});

