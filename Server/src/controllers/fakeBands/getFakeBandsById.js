const FakeBand = require("../../models/fakeBandsModel");

const getFakeBandsById = async(req, res, next) => {
    const { id } = req.params
    try {
        if(!id) throw Error("Need an ID to find the Fake Band." );
        const findFakeBand = await FakeBand.findById(id);
        if (findFakeBand) return res.status(200).json(findFakeBand);
        else throw Error("Fake Band not found." );
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = getFakeBandsById;