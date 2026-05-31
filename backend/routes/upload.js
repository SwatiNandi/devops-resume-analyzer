const express = require('express');
const router = express.Router();

const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const Resume = require('../models/Resume');


// STORAGE CONFIG

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, 'uploads/');

    },

    filename: function (req, file, cb) {

        cb(null, Date.now() + '-' + file.originalname);

    }

});


// MULTER UPLOAD

const upload = multer({ storage });


// ROUTE

router.post(

    '/resume',

    upload.single('resume'),

    async (req, res) => {

        try {

            // CREATE FORM DATA

            const formData = new FormData();

            formData.append(
                'resume',
                fs.createReadStream(req.file.path)
            );


            // SEND TO ATS SERVICE

            const atsResponse = await axios.post(

                'http://localhost:7000/analyze',

                formData,

                {
                    headers: formData.getHeaders()
                }

            );


            // GET ANALYSIS

            const analysis = atsResponse.data.analysis;


            // SAVE TO MONGODB

            const savedResume = await Resume.create({

                filename: req.file.filename,

                score: analysis["ATS Score"],

                skills: analysis["Matched Skills"]

            });


            // RESPONSE

            res.status(200).json({

                message: 'Resume analyzed successfully',

                analysis,

                savedResume

            });

        }

        catch (error) {

            console.log(error);

            res.status(500).json({

                error: 'Upload failed'

            });

        }

    }

);

module.exports = router;