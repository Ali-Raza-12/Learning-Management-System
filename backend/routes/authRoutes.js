const express = require('express')
const router = express.Router();
const { registerUser, loginUser, adminLogin, refreshToken } = require('../controllers/authController');

// Public routes 
router.post('/register', registerUser);
router.post('/login', loginUser);

// Admin Login 
router.post('/adminlogin', adminLogin);

// Refresh Token 
router.post('/refreshtoken', refreshToken);

module.exports = router;
