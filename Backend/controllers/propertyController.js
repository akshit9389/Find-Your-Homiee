const propertiesModel = require('../model/properties');
const OwnerModel = require('../model/Owner');

const createProperty = async (req, res) => {
    try {
        const { name,longitude, latitude, location, rent, description, images, amenities, available, roomtype } = req.body;

        const owners = await req.user
        if (!owners || owners.role !== 'owner') {
            return res.status(403).json({ message: 'You are not authorized to create a property' });
        }
        const ownid = owners.ownerDetails;
        const newProperty =await propertiesModel.create({
            owner: ownid,
            name,
            location,
            longitude,
            latitude,
            rent,
            description,
            images,
            amenities,
            available,
            roomtype
        });
        console.log(newProperty._id);
        const owners1 = await OwnerModel.findById(ownid);
        owners1.properties.push(newProperty._id);
        console.log(owners1.properties);
        owners1.numberOfProperties = owners1.properties.length;
        console.log(owners1.numberOfProperties);
        await owners1.save();
        console.log('Property created:', newProperty);
        return res.status(201).json({ message: 'Property created successfully', property: newProperty });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateProperty = async (req, res) => {
    try {
        const property = await propertiesModel.findById(req.params.id);
        const updateFields = req.body;
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        const owner = await OwnerModel.findById(property.owner);
        if (!owner || owner._id.toString() === req.body.owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }
        Object.assign(property, updateFields);
        await property.save();
        return res.status(200).json({ message: 'Property updated successfully', property });
    }
    catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};

const deleteProperty = async (req, res) => {
    try {
        const property = await propertiesModel.findById(req.params.id);
        const owner = await OwnerModel.findById(property.owner);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        if (owner || owner._id.toString() !== req.body.owner) {
            owner.properties = owner.properties.filter(prop => prop.toString() !== property._id.toString());
            owner.numberOfProperties = owner.properties.length;
            await owner.save();
        }
        await property.remove();
        return res.status(200).json({ message: 'Property deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createProperty,
    updateProperty,
    deleteProperty
};
