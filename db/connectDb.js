const mongoose = require("mongoose");
const config = require("config");

const password = encodeURIComponent(config.password)



async function connectWithDB() {
    try {
        const mongoUri = `mongodb+srv://${config.userName}:${password}@url-shortener.4fcvt.mongodb.net/?retryWrites=true&w=majority&appName=Url-Shortener`;
        
        const instance = await mongoose.connect(mongoUri, {
           
        });

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = {connectWithDB};
