const mongoose = require('mongoose');
const Locations = require('./locations.js').schema;

const HR_Members = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    alternativeEmail: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        default: "123456"
    },
    salary: {
        type: Number,
        required: true
    },
    officeLocation: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        required: true
    },
    dayOff: [{
        type: String,
        required: true
    }],
    signINs: [{
        type: Date,
    }],
    signOUTs: [{
        type: Date,
    }],
    missingExtraHours: {
        type: String
    },
    attendance: [{
        date: {
            type: Date,
        },
        attended: {
            type: Boolean,
        }
    }],
    leaveBalance: {
        type: Number,
        required: true,
        default: 0
    },
    loggedIn: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('HR_Members', HR_Members);