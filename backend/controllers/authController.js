const User = require('../models/User.model')
const { createSecretToken, generateRefreshToken, verifyRefreshToken } = require('../utills/SecretToken')
const bcrypt = require('bcrypt')


// Register 
module.exports.registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({email})
        if(existingUser) {
            return res.status(400).json({ success: false, message: 'Email already in use'});
        }
        
        const user = new User({name, email, password})
        await user.save();

        const accessToken = createSecretToken(user)
        const refreshToken = generateRefreshToken(user)

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 1 * 24 * 60 * 60 * 1000
        });

        return res.status(201).json({ message: 'User registered successfully', data: {
            name: user.name,
            email: user.email
        },
        accessToken
    })
    } catch (error) {
        next(error)
    }
};


// Login 
module.exports.loginUser = async (req, res, next) => {
    try {
        // console.log("Api Hit")
        const { email, password} = req.body;

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid credentials'})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid credentials'});
        }

        // Generate Access Token and refresh token 
        const accessToken = createSecretToken(user);
        const refreshToken = generateRefreshToken(user);

        // Refresh token 
        res.cookie('refreshToken', refreshToken, { 
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            maxAge: 1 * 24 * 60 * 60 * 1000 
          });

        return res.json({ accessToken });

    } catch (error) {
        next(error)
    }
}

// Admin login 
module.exports.adminLogin = async (req, res, next) => {

    try {
        // console.log("🔥 Admin login controller hit");
        // console.log("📥 Request body:", req.body);

        const { email, password } = req.body;
        if (
            email === process.env.ADMIN_EMAIL &&
            password === process.env.ADMIN_PASSWORD
        ) {
            const accessToken = createSecretToken({ id: 'admin', role: 'admin'});
            return res.json({ accessToken });
        } else {
            return res.status(401).json({ message: "Invalid credentials"})
        }
    } catch (error) {
        next(error)
    }  
}

// Refresh Token
module.exports.refreshToken = async ( req, res, next) => {
    try {
        const { refreshToken } = req.cookies;

        if(!refreshToken) {
            return res.status(401).json({ success: false,  message: "No refresh token provided" })
        }

        const decodedUser =     verifyRefreshToken(refreshToken)
        if(!decodedUser) {
            return res.status(401).json({ success: false, message: "Invalid or expired Refresh Token"})
        }

        const newAccessToken = createSecretToken({ _id: decodedUser.id });

        return res.json({ accessToken: newAccessToken });
    } catch (error) {
        next(error);
    }
} 