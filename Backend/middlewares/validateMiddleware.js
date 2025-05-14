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

const propertySchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long").max(50, "Name must be at most 50 characters long"),
    longitude: z.number().min(-180, "Longitude must be between -180 and 180").max(180, "Longitude must be between -180 and 180"),
    latitude: z.number().min(-90, "Latitude must be between -90 and 90").max(90, "Latitude must be between -90 and 90"),
    location: z.string().min(2, "Location must be at least 2 characters long").max(100, "Location must be at most 100 characters long"),
    rent: z.number().positive("Rent must be a positive number"),
    description: z.string().min(10, "Description must be at least 10 characters long").max(500, "Description must be at most 500 characters long"),
    images: z.array(z.string()).nonempty("At least one image URL is required"),
    amenities: z.array(z.string()).nonempty("At least one amenity is required"),
    available: z.boolean(),
    roomtype: z.enum(["single sharing", "double sharing", "triple sharing", "quad sharing"], "Room type must be either 'single', 'double', or 'suite'"),
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

const validateProperty = (req, res, next) => {
    try {
        req.body = propertySchema.parse(req.body);
        next();
    } catch (err) {
        return res.status(400).json({
            message: "Validation error",
            errors: err.errors.map(e => e.message),
        });
    }
}

module.exports = {
    validateRegister,
    validateLogin,
    validateOwner,
    validateProperty,
};