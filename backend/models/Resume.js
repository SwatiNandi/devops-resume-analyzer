const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({

    filename: {
        type: String
    },

    score: {
        type: Number
    },

    skills: {
        type: [String]
    }

});

module.exports = mongoose.model('Resume', ResumeSchema);