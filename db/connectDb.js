const mongoose = require("mongoose");
const config = require("config");
   



async function connectWithDB() {
    try {
        const mongoUri = `mongodb://${config.userName}:${config.password}@${config.host}/${config.dbName}?authSource=admin`;
        
        const instance = await mongoose.connect(mongoUri, {
           
        });

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = {connectWithDB};
