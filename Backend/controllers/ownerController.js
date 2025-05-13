const ownerModel = require('../model/Owner');

const createOwner = async (req, res) => {
    try {
        const { fullname, contact } = req.body;
        const newOwner = await ownerModel.create({
            user: req.user._id,
            fullName: fullname,
            contact: contact
        });
        req.user.ownerDetails = newOwner._id;
        await req.user.save();

        // Send response after creation
        res.status(201).json({
            message: "Owner created successfully",
            owner: newOwner
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createOwner
};
