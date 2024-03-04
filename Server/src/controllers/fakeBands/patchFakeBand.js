const FakeBand = require("../../models/fakeBandsModel");

const patchFakeBand = async(req, res, next) => {
    const { id } = req.query
    const { body } = req;
    try {
        if (!id) throw Error("The ID is required to know which band is going to be updated.")
        if (!body) throw Error("Nothing to patch here.");
        if (body.activeYears) throw Error("If you want to update the active years only need to patch the start date.");
        
        const findBand = await FakeBand.findById(id);
        if (!findBand) throw Error ("Band not found");

        if (!body.band) {
            body.band = findBand.band
        }
        if (body.discs.length == 0) {
            body.discs = findBand.discs
        }
        if (body.genres.length == 0) {
            body.genres = findBand.genres
        }
        if (body.startDate) {
            const dateNowYear = new Date().getFullYear();
            const yearStartDate = Number(body.startDate.split("-").splice(0, 1).join());
            if (yearStartDate > dateNowYear) throw Error("The Starting Date of the Fake Band can't be in the futere.");
            const maxYear = dateNowYear - yearStartDate;
            body.activeYears = maxYear;
        } else {
            body.startDate = findBand.startDate;
            body.activeYears = findBand.activeYears;
        }
        if (!body.numbOfMembers) {
            body.numbOfMembers = findBand.numbOfMembers;
        }

        const patchFakeBand = await FakeBand.findByIdAndUpdate(id, body, { new: true });

        if (patchFakeBand) return res.status(200).json({ message: "Successfully Patched the Fake Band.", band: patchFakeBand});
        else throw Error("Can't be possible to Patch the Fake Band.");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = patchFakeBand;