
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


//instance of the express

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


//Get route 

app.get("/", (res)=>{
     res.sendFile(__dirname + "/index.html");
});



//Starting the server 
app.listen(8080, ()=>{
   console.log("Server open on port 8080");
});