const FakeBand = require("../../models/fakeBandsModel");

const createFakeBand = async(req, res, next) => {
    const { bandName, bandDiscs, bandGenres, startDate, numbOfMembers } = req.body;
    try {
        if ( !bandName || !bandDiscs || !bandGenres || !startDate || !numbOfMembers ) throw Error("Some info is missing, try again pls.");

        const dateNowYear = new Date().getFullYear();
        const yearStartDate = Number(startDate.split("-").splice(0, 1).join());
        const maxYear = dateNowYear - yearStartDate;

        const newFakeBand = await FakeBand.create({ band: bandName, discs: bandDiscs, genres: bandGenres, startDate, activeYears: maxYear, numbOfMembers });
        
        if (newFakeBand) return res.status(200).json({ message: "Fake Band Created 😎.", band: newFakeBand });
        else throw Error("Can't be possible to create the Fake Band. Try again pls.")
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = createFakeBand;