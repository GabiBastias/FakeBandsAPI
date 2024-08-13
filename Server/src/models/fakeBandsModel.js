const mongoose = require("mongoose");

const FakeBandsSchema = new mongoose.Schema({
    band: {
        type: String,
        require: true
    },
    discs: {
        type: Array
    },
    genres: {
        type: Array
    },
    bandImage:{
        type: String  
    },
    startDate: {
        type: String
    },
    activeYears: {
        type: Number
    },
    numbOfMembers: {
        type: Number
    }
});

const FakeBand = mongoose.model("FakeBand", FakeBandsSchema);
module.exports = FakeBand;