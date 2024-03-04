const { faker } = require('@faker-js/faker');
const fs = require("node:fs/promises");
const path = require("path");
const FakeGenre = require('../models/fakeGenresModel');

const createFakeBand = async (json) => {
    try {
        
        let data = [];
        const fakeGenres = [];
        const fakeDiscNames = [];
        const startingYear = faker.number.int({ min: 1920, max: 1998})
        const dateNowYear = new Date().getFullYear();
        const bandName = `${faker.vehicle.model()} ${faker.animal.snake()}`
        const startingDate = faker.date.birthdate({ min: startingYear, max: dateNowYear - 1, mode: 'year' });
        const startDate = `${startingDate.getDate()}/${startingDate.getMonth()}/${startingDate.getFullYear()} `
        for (let i = 0; i < faker.number.int({ min: 1, max: 10}); i++) {
            fakeDiscNames.push(`${faker.word.adjective()} ${faker.person.jobDescriptor()}`)
            fakeGenres.push(faker.music.genre());
        }

        const maxYear = dateNowYear - startingDate.getFullYear();
        
        const randomDisc = {
            band: bandName,
            discs: fakeDiscNames,
            genres: fakeGenres,
            startDate: startDate,
            activeYears: maxYear,
            numbOfMembers: faker.number.int({ min: 1, max: 10 })    
        }

        if (json) {
            const filePath = path.join(__dirname, "../assets/json/artist.json");
            const fileData = await fs.readFile(filePath, "utf-8");
            if (fileData.length === 0) {
                const jsonData = JSON.stringify(randomDisc, null, 2);
                await fs.writeFile(filePath, `[\n${jsonData}\n]`);
                if (jsonData) return jsonData;
            } else {
                data = JSON.parse(fileData);
                data.push(randomDisc);
                const jsonData = JSON.stringify(data, null, 2);
                await fs.writeFile(filePath, data.length === 0 ? `[${jsonData}]`: jsonData)
                if (jsonData) return jsonData;
            }
            throw Error("Can't be possible writte the file.")
        } else return randomDisc;
        
    } catch (error) {
        return error.message;
    }
}

const fakeGenres = async() => {
    try {
        const genresList = {};
        for (let i = 0; i < 18; i++) {
            let aux = 0;
            const newGenre = faker.music.genre();
            for (const genre in genresList) {
                if (genresList[genre] === newGenre) aux = 1;
            }
            if (aux) {
                i--;
                continue;
            } else {
                genresList[i] = newGenre;
                await FakeGenre.create({name: newGenre});
            }
        }
        return genresList
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    createFakeBand,
    fakeGenres
};