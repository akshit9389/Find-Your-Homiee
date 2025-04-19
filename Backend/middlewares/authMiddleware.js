const jwt = require('jsonwebtoken');
const User = require('../model/User');

const protect = async (req, res, next) => {
    let token;
    try {
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.id).select('-password');
        }
        if(!token) {
            return res.status(401).json({ message: 'Not authorized, no token' });
        }
    }
    catch (error) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
}

module.exports = { protect };