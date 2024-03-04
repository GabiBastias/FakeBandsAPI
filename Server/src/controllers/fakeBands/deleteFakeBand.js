const FakeBand = require("../../models/fakeBandsModel");

const deleteFakeBand = async(req, res, next) => {
    const { id } = req.query;
    try {
        const deleteFakeBand = await FakeBand.findByIdAndDelete(id);
        const allBands = await FakeBand.find({});
        if (deleteFakeBand) return res.status(200).json({ message: "Fake Band deleted Successfully.", bands: allBands });
        else throw Error("Can't be possible delete the Fake Band. Please try again."); 
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = deleteFakeBand;