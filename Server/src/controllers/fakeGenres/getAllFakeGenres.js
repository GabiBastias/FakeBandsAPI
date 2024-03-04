const FakeGenre = require("../../models/fakeGenresModel");

const getAllFakeGenres = async(req, res, next) => {
    try {
        const getAllGenres = await FakeGenre.find({});
        if (getAllGenres.length > 1) res.status(200).json(getAllGenres);
        else throw new Error("La base de datos de generos está vacía.")
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = getAllFakeGenres;