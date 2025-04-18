const express = require('express')
const router = express.Router();
const { registerUser, loginUser, adminLogin } = require('../controllers/authController');

// Public routes 
router.post('/register', registerUser);
router.post('/login', loginUser);

// Admin Login 
router.post('/adminlogin', adminLogin);

module.exports = router;
