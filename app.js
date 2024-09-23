const express = require("express");
const { registerRoutes } = require("./routes/index");
const app = express();
//connect with db
const dbConnect = require("./db/connectDb");

const config = require("config");
const PORT = config.get("PORT") || 8000

const {urlMappingModel} = require("./schema/urlMapping");

async function startApp(){
    await dbConnect.connectWithDB();
    app.use(express.json());
    app.get("/health",(req,res)=>{
        res.send("I am healthy...");
    })
    //register end points
    registerRoutes(app);
    app.listen(PORT, ()=>{
        console.log("Server is running on port:"+PORT);
    })
}
startApp();


