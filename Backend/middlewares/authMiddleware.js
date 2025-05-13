const jwt = require('jsonwebtoken');
const User = require('../model/User');

const protect = async (req, res, next) => {
    let token;
    console.log("Entering protect middleware...");
    try {
        const authHeader = req.headers['authorization'] || req.headers['Authorization'];
        console.log("Authorization Header:", authHeader);

        if (authHeader && authHeader.startsWith('Bearer ')) {
            token = authHeader.split(' ')[1];
            console.log("Extracted Token:", token);
        }

        if (!token) {
            console.log("No token provided");
            return res.status(401).json({ message: 'Not authorized, no token provided' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded);

        const user = await User.findById(decoded.id).select('-password');
        console.log("User Found:", user);

        if (!user) {
            console.log("User not found");
            return res.status(401).json({ message: 'User not found, unauthorized' });
        }

        req.user = user;
        console.log("User attached to request");
        next();
    }
    catch (error) {
        console.log("Error in protect:", error.message);
        return res.status(401).json({ message: 'Not authorized, invalid token', error: error.message });
    }
};

const isOwner = (req, res, next) => {
    console.log("Entering isOwner middleware...");
    if (req.user && req.user.role === 'owner') {
        console.log("User is an owner");
        next();
    } else {
        console.log("User not authorized as owner");
        return res.status(403).json({ message: 'Not authorized as an owner' });
    }
};

module.exports = { protect, isOwner };
