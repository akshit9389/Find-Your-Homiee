const jwt = require('jsonwebtoken');
const User = require('../model/User');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '2h',
    });
};

const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        console.log('User data:', req.body);
        const user = await User.create({
            name,
            email,
            password,
            role
        });
        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    }
    catch (error) {
            return res.status(500).json({ message: error.message });
        }
}
    
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    }
    catch (error) {
        return res.status(500).json({
            message: 'Server error',
            error: error.message,
         }
            
        );
    }
};

const logoutUser = async (req, res) => {
    try {
        res.cookie('jwt', '', { expires: new Date(0) });
        res.status(200).json({ message: 'Logged out successfully' });
    }
    catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
};