const FakeBand = require("../../models/fakeBandsModel");

const getAllFakeBands = async(req, res, next) => {
    try {
        const allFakeBands = await FakeBand.find({});
        if (allFakeBands.length <= 0) throw Error("The Fake Bands Data Base is Empty.")
        else return res.status(200).json(allFakeBands);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

module.exports = getAllFakeBands;