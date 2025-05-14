const express = require('express');
const {
    createProperty,
    updateProperty,
    deleteProperty,
} = require('../controllers/propertyController');
const { protect, isOwner } = require('../middlewares/authMiddleware');
const { validateProperty } = require('../middlewares/validateMiddleware');

const router = express.Router();

router.post('/create',protect, isOwner, validateProperty, createProperty);

module.exports = router;