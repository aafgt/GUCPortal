const mongoose = require('mongoose');

const Schedule = mongoose.Schema({
    ACemail: {
        type: String,
        required: true,
        unique: true
    },
    schedule: [{
        day: {
            type: String,
        },
        slots: [{
            type: {
                type: String,
            },
            slot_no: {
                type: Number,
            },
            timing: {
                type: String,
            },
            course: {
                type: String
            },
            location: {
                type: String
            }
        }]
    }]
});

module.exports = mongoose.model('Schedule', Schedule);