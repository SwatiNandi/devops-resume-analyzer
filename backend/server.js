const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const authRoutes = require('./routes/auth');
const uploadRoutes = require('./routes/upload');

const app = express();


// MIDDLEWARE

app.use(cors());
app.use(express.json());


// TEST ROUTE

app.get('/', (req, res) => {

    res.send('Backend Running');

});


// CHECK ROUTE

app.get('/check', (req, res) => {

    res.send('CHECK WORKING');

});


// AUTH ROUTES

app.use('/api/auth', authRoutes);


// UPLOAD ROUTES

app.use('/api/upload', uploadRoutes);


// MONGODB CONNECTION

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


// SERVER

app.listen(5000, () => {

    console.log('Server running on port 5000');

});