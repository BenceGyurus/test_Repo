const express = require("express");
const a = require("./test.js");
const fs = require("fs");
const { nextTick } = require("process");

const app = express();

function open_File(url){
    try{
    return fs.readFileSync(url);
    }
    catch {
        return false;
    }
}

app.get("/", (req,res)=>{
    console.log(req.url);
    let b = a(req.url == "/"? "/index.html" : req.url);
    res.sendFile( b ? b : `${__dirname}/public/index.html`);
});

app.get("/main.js", (req,res)=>{
    res.sendFile(`${__dirname}/public/main.js`);
});


app.listen(8000);