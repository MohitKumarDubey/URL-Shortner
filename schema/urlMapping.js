const mongoose = require("mongoose");
const urlMappingSchema = new mongoose.Schema({
    shortURL:{
        type:String,
        require:true
    },
    longURL:{
        type:String,
        require:true
    },
    expires:{
        type:Number,
        require:false
    },
})

const urlMappingModel = new mongoose.model('urlMapping',urlMappingSchema);
module.exports = { urlMappingModel };