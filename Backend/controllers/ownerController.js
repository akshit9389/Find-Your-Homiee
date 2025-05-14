const ownerModel = require('../model/Owner');
const propertiesModel = require('../model/properties');

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

const getOwnerProfile = async (req, res) => {
    try {
        const owner = await ownerModel.findById(req.user.ownerDetails);
        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }
        // console.log(owner);
        res.status(200).json({
            message: "Owner profile fetched successfully",
            owner: {
                id: owner._id,
                fullname: owner.fullName,
                contact: owner.contact,
                numberOfProperties: owner.numberOfProperties,
                properties: owner.properties,
                verified: owner.verified
            }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateOwnerProfile = async (req, res) => {
    try {
        const { fullname, contact } = req.body;
        const owner = await ownerModel.findById(req.user.ownerDetails);
        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }
        owner.fullName = fullname || owner.fullName;
        owner.contact = contact || owner.contact;
        await owner.save();
        res.status(200).json({
            message: "Owner profile updated successfully",
            owner: {
                id: owner._id,
                fullname: owner.fullName,
                contact: owner.contact,
                numberOfProperties: owner.numberOfProperties,
                properties: owner.properties,
                verified: owner.verified
            }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const myProperties = async (req, res) => {
    try {
        const owner = await ownerModel.findById(req.user.ownerDetails);
        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }
        const properties = await propertiesModel.find({ owner: owner._id });
        res.status(200).json({
            message: "Properties fetched successfully",
            properties: properties.map(property => ({
                id: property._id,
                name: property.name,
                location: property.location,
                rent: property.rent,
                description: property.description,
                images: property.images,
                amenities: property.amenities,
                available: property.available,
                roomtype: property.roomtype
            }))
        });
    }catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createOwner,
    getOwnerProfile,
    updateOwnerProfile,
    myProperties
};
