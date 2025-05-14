const express = require('express');

const {createOwner, getOwnerProfile, updateOwnerProfile, myProperties} = require('../controllers/ownerController');
const { protect, isOwner } = require('../middlewares/authMiddleware');
const { validateOwner } = require('../middlewares/validateMiddleware');

const router = express.Router();

router.post('/create', protect, isOwner, createOwner);
router.get('/myProfile', protect, isOwner, getOwnerProfile);
router.post('/updateProfile', protect, isOwner, updateOwnerProfile);
router.get('/myProperties', protect, isOwner, myProperties);

module.exports = router;

