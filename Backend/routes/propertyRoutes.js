const express = require('express');
const {
    createProperty,
    updateProperty,
    deleteProperty,
} = require('../controllers/propertyController');
const { protect,isOwner } = require('../middlewares/authMiddleware');

const router = express.Router();

// router.post('/create', protect, isOwner, createProperty);
router.post('/create',protect, isOwner, createProperty);

module.exports = router;