const express = require('express');

const {createOwner} = require('../controllers/ownerController');
const { protect, isOwner } = require('../middlewares/authMiddleware');
const { validateOwner } = require('../middlewares/validateMiddleware');

const router = express.Router();

router.post('/create',protect, isOwner, createOwner);

module.exports = router;

