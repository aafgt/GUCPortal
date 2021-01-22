const mongoose = require('mongoose');

const Locations = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    currentCapacity: {
        type: Number,
        required: true,
        default: 0
    },
    maxCapacity: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Locations',Locations);