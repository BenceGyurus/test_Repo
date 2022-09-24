const express = require("express");
const a = require("./test.js");

const app = express();

app.get("/", (req,res)=>{
    res.send(a() ? a() : "Nem");
})

app.listen(8000);