const mongoose = require('mongoose');
const AC_Members = require('./ac_members.js').schema;
//const Time_Slots = require('./time_slots.js').schema;

const Courses = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    instructors: [{
        type: String,
        required: true
    }],
    TAs: [{
        type: String,
        required: true
    }],
    CC: {
        type: String,
        default: ""
    },
    teaching_slots: [{
        type: {
            type: String,
            required: true
        },
        day: {
            type: String,
            required: true
        },
        slot_no: {
            type: Number,
            required: true
        },
        timing: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        assigned: {
            type: String,
            default: ""
        }
    }],
    faculty: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Courses', Courses);