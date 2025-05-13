const mongoose = require('mongoose');

const propertiesSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    // location: {
    //     type: {
    //         type: String,
    //         enum: ['Point'],
    //         default: 'Point'
    //     },
    //     coordinates: {
    //         type: [Number]
    //     },
    //     formattedAddress: {
    //         type: String
    //     },
    // },
    rent: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500
    },
    images: {
        type: [String],
        required: true,
        default: []
    },
    amenities: {
        type: [String],
        default: [],
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    roomtype: {
        type: [String],
        default: [],
        enum: ['single', 'double sharing', 'triple sharing', 'quad sharing'],
        required: true
    },
    
}, { timestamps: true });

// propertiesSchema.index({ location: '2dsphere' });

const PropertyModel = mongoose.model('Property', propertiesSchema);
module.exports = PropertyModel;