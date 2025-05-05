const express = require('express');
const router = express.Router();
const User = require('../models/User.model');


module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        if(!users) return res.status(404).json({ success: false, message: "No users found" });
        
        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
    } catch (err) {
        console.error(err); // Log the error
        res.status(500).json({ 
            success: false,
            message: "Server Error",
            error: err.message 
        });
    }
}

module.exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if(!user) return res.status(404).json({ success: false, message: "User not found" });
        
        res.status(200).json({
            success: true,
            data: user
        }); 

    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        }); 
    }
}

module.exports.createUser = async (req, res) => {
    try {
        const users = await User.create(req.body);
        const newUser = new User({ name, email, password, role});
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "Please fill all fields" });
        }

        if (password.length < 6) {
            return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ success: false, message: "Passwords do not match" });
        }       

        
        await newUser.save();
        res.status(201).json({
            success: true,
            data: newUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
}

module.exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!user) return res.status(404).json({ success: false, message: "User not found" });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Sever Error",
            error: error.message
        })
    }
}

module.exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) return res.stats(404).json({ success: false, message: "User not found"});
        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
    } catch (error) {
        
        res.stats(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        })
    }
}