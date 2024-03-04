const mongoose = require('mongoose');

const FakeGenreSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

const FakeGenre = mongoose.model("FakeGenre", FakeGenreSchema);
module.exports = FakeGenre;