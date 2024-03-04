require('dotenv').config();
const mongoose = require('mongoose');
const { DB_URI } = process.env;

const mongoDBConnect = async() => {
    await mongoose.connect(DB_URI)
    .then(() => {
        console.log('MongoDB connected succesfully!');
    })
    .catch((error) => {
        console.error('Error connecting MongoDB: ', error.message)
    })
}

module.exports = mongoDBConnect;