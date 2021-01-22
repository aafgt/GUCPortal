const mongoose = require('mongoose');

const Faculties = mongoose.Schema({
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
    departments: [{
        depName:{
            type: String,
            required: true
        },
        HOD: {
            type: String,
            default: ""
        }
    }],
});

module.exports = mongoose.model('Faculties',Faculties);