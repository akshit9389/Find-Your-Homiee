const express = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');
const { validateRegister, validateLogin } = require('../middlewares/validateMiddleware');

const router = express.Router();

router.post('/register',validateRegister, registerUser);
router.post('/login',validateLogin,  loginUser);
router.post('/logout', protect, logoutUser);

module.exports = router;