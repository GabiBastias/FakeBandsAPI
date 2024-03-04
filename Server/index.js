require('dotenv').config();
const app = require('./src/app');
const { PORT, URL } = process.env;
const mongoDBConnect = require('./src/mongoDBConnect');

app.listen(PORT, async() => {
    await mongoDBConnect();
    console.log(`Server: ${PORT}`);
})