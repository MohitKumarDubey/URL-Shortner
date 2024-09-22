const express = require("express");
const app = express();

const config = require("config");

const PORT = config.get("PORT") || 8000

app.get("/health",(req,res)=>{
    res.send("I am healthy...");
})
app.listen(PORT, ()=>{
    console.log("Server is running on port:"+PORT);
})
