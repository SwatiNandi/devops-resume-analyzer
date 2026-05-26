const express = require('express');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const Resume = require('../models/Resume');

const router = express.Router();


// MULTER STORAGE

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, 'uploads/');

    },

    filename: function (req, file, cb) {

        cb(null, Date.now() + '-' + file.originalname);

    }

});

const upload = multer({ storage });


// CHECK ROUTE

router.get('/check', (req, res) => {

    res.send('UPLOAD ROUTE WORKING');

});


// RESUME UPLOAD ROUTE

router.post('/resume', upload.single('resume'), async (req, res) => {

    try {

        // SAVE TO MONGODB

        const newResume = new Resume({

            filename: req.file.filename

        });

        await newResume.save();


        // SEND FILE TO ATS SERVICE

        const formData = new FormData();

        formData.append(
            'resume',
            fs.createReadStream(req.file.path)
        );

        // ATS CONTAINER API CALL

        const response = await axios.post(

            'http://ats:7000/analyze',

            formData,

            {
                headers: formData.getHeaders()
            }

        );

        res.json({

            message: 'Resume analyzed successfully',

            analysis: response.data

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            error: error.message

        });

    }

});

module.exports = router;