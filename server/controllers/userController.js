const sendToken = require("../utils/jwtToken.js");
const User = require("../models/userModel.js");

// Register a user 
exports.registerUser = async (req, res, next) => {
    const { username, email, password } = req.body;

    const user = await User.create({
        username,
        email,
        password,
    });

    sendToken(user, 200, res);
};

// Login User 

exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(500).json({
            success:false,
            message: "Please enter email & password"
        });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return res.status(401).json({
            success:false,
            message: "Invalid email or password"
        });
    }

    const passwordMatched = await user.comparePassword(password);

    if (!passwordMatched) {
        return res.status(401).json({
            success:false,
            message: "Invalid email or password"
        });
    }

    sendToken(user, 200, res);
};


// Logout User 

exports.logoutUser = async (req, res, next) => {

    res.cookie("token",null,{
        expire: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message:"Logged out successfully"
    })
};