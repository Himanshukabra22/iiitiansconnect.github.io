const express = require("express");
const env = require("dotenv");
const hbs = require('hbs')
require("./db/connection");
const bodyparser = require("body-parser");
const DataRouter = require("./routes/routes")
// const multer = require("multer")
const fs = require("fs")
const path = require('path')
const {PORT} = require("../ignore")


const port = process.env.PORT || 3000;

const app = express();







//defining static dir path
const staticPath = path.join(__dirname,"../public"); 

//defining views and partials
const tempPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");


// console.log(staticPath);
// console.log(tempPath);
// console.log(partialsPath);

//Serving static files using express

//setting view engine and directory
app.set("view engine", "hbs");
app.set("views", tempPath);

//setting partials directory
hbs.registerPartials(partialsPath)

app.use(express.static("public")) 

app.use(bodyparser.urlencoded({ extended:false }))
app.use(bodyparser.json());



app.use(DataRouter);
 
app.listen(port, () => {
    console.log(`Port is listening at ${port}\nhttp://localhost:${port}`);
})