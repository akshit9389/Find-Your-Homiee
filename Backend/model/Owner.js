const mongoose = require('mongoose');

const Owner = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    numberOfProperties: {
        type: Number,
        default: 0
    },
    properties: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Property',
        default: []
    },
    contact: {
        type: Number,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    
}, { timestamps: true });

const OwnerModel = mongoose.model('Owner', Owner);
module.exports = OwnerModel;