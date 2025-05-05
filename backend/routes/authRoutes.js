const express = require('express')
const router = express.Router();
const { registerUser, loginUser, refreshToken } = require('../controllers/authController');

// Public routes 
router.post('/register', registerUser);
router.post('/login', loginUser);

// Refresh Token 
router.post('/refreshtoken', refreshToken);

module.exports = router;
