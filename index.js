const express = require("express");
const a = require("./test.js");

const app = express();

app.get("/", (req,res)=>{
    console.log(req.url);
    let b = a(req.url == "/"? "/index.html" : req.url);
    res.sendFile( b ? b : `${__dirname}/public/index.html`);
});

app.use((req,res)=>{
    console.log(req.url);
    let b = a(req.url == "/"? "/index.html" : req.url);
    res.sendFile( b ? b : `${__dirname}/public/index.html`);
})

app.listen(8000);