const FakeBand = require("../../models/fakeBandsModel");

const updateAllFakeBand = async(req, res, next) => {
    const { id } = req.query;
    const { bandName, bandDiscs, bandGenres, startDate, numbOfMembers } = req.body;
    try {
        if(!id) throw Error("The ID is required to know which band is going to be updated.");
        if (!bandName || !bandDiscs || !bandGenres || !startDate || !numbOfMembers) throw Error("The Fake Band does not have any params, rememeber this is a complete update of a Fake fakeBand.")
        if (req.body.activeYears) throw Error("The active years are automatically update.");
        
        const dateNowYear = new Date().getFullYear();
        const yearStartDate = Number(startDate.split("-").splice(0, 1).join());
        if (yearStartDate > dateNowYear) throw Error("The Starting Date of the Fake Band can't be in the futere.");
        const maxYear = dateNowYear - yearStartDate;

        const fakeBand = {band: bandName, discs: bandDiscs, genres: bandGenres, startDate, activeYears: maxYear, numbOfMembers}

        const findFakeBand = await FakeBand.findByIdAndUpdate(id, fakeBand, { new: true });
        if (findFakeBand) return res.status(200).json({message: "Band updated successfully. 😃", band: findFakeBand});
        else throw Error("Can't be possible to update the Fake Band.")
    } catch (error){
        return res.status(500).json({ error: error.message });
    }
}

module.exports = updateAllFakeBand;