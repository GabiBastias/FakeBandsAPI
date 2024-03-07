const express = require("express");
const router = express.Router();
const { createFakeBand, fakeGenres } = require("../utils/faker");

router.get("/faker", async(req, res, next) => {
    try {
        const fak = await createFakeBand();
        if (fak) return res.status(200).send(fak);
        else throw new Error("Error en la consulta.")
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
});

router.post("/fakeGenres", async (req, res, next) => {
    try {
        const resp = await fakeGenres();
        if (resp) res.status(200).json(resp);
        else throw new Error("Error en la consulta.")
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
});

module.exports = router;