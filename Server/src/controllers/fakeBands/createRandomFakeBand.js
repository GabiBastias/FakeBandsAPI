const FakeBand = require("../../models/fakeBandsModel");
const { createFakeBand } = require("../../utils/faker");


const createRandomFakeBand = async(req, res, next) => {
    try {
        const newFakeBand = await createFakeBand();
        if (!newFakeBand) throw Error("Can't be possible to create a Fake Band 😱.");

        const createInDB = await FakeBand.create(newFakeBand);
        if (createInDB) return res.status(200).json({ message: "Fake Band Created 😎.", band: createInDB });
        else throw Error("Can't be possible to insert the Fake Band in MongoDB.");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = createRandomFakeBand;