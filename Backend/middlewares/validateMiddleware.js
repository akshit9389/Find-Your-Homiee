const { z } = require('zod');

const registerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long").max(50, "Name must be at most 50 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long").max(100, "Password must be at most 100 characters long"),
    role: z.enum(["owner", "seeker"], "Role must be either 'owner' or 'seeker'"),
});

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long").max(100, "Password must be at most 100 characters long"),
});

const ownerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long").max(50, "Name must be at most 50 characters long"),
    
    phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be at most 15 digits"),
    
})

const validateRegister = (req, res, next) => {
    try {
        req.body = registerSchema.parse(req.body);
        next();
    } catch (err) {
        return res.status(400).json({
            message: "Validation error",
            errors: err.errors.map(e => e.message),
        });
    }
};

const validateLogin = (req, res, next) => {
    try {
        req.body = loginSchema.parse(req.body);
        next();
    } catch (err) {
        return res.status(400).json({
            message: "Validation error",
            errors: err.errors.map(e => e.message),
        });
    }
};

const validateOwner = (req, res, next) => {
    try {
        req.body = ownerSchema.parse(req.body);
        next();
    } catch (err) {
        return res.status(400).json({
            message: "Validation error",
            errors: err.errors.map(e => e.message),
        });
    }
};

module.exports = {
    validateRegister,
    validateLogin,
    validateOwner,
};