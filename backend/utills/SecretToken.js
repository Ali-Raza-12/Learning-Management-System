require("dotenv").config();
const jwt = require("jsonwebtoken");

// Generate Access Token
module.exports.createSecretToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.TOKEN_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Generate Refresh Token
module.exports.generateRefreshToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
  });
};

// Verify Access Token
module.exports.verifyAccessToken = (token) => {
  return jwt.verify(token, process.env.TOKEN_KEY);
};

// Verify Refresh Token
module.exports.verifyRefreshToken = (token) => {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
};
