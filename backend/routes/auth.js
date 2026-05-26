const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

const User = require('../models/User');


// REGISTER ROUTE

router.post('/register', async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        res.json({
            message: 'User Registered Successfully'
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


// LOGIN ROUTE

router.post('/login', async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({
                message: 'User not found'
            });

        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return res.status(400).json({
                message: 'Invalid password'
            });

        }

        const token = jwt.sign(
            { id: user._id },
            'secretkey',
            { expiresIn: '1d' }
        );

        res.json({
            message: 'Login Successful',
            token
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


module.exports = router;