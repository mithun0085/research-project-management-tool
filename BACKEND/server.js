const path = require('path');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const dotev = require("dotenv");
require("dotenv").config();

const express = require("express");   //import express
const mongoose = require("mongoose"); //''
const bodyParser = require("body-parser");//body parser
const cors = require("cors");
const app = express();  //invoke express
const fileUpload= require('express-fileupload');
const cookieParser = require('cookie-parser');




/*
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles:true
}))

*/
app.use(cors());//midleware
app.use(bodyParser.json());

// Middleware



// Mongo URI
const URL = process.env.MONGODB_URL;

// Create mongo connection
// Init gfs


{mongoose.connect(URL, {});}
const connection = mongoose.connection;
connection.once("open", () => {

   
    console.log("Mongodb Connection success!");
})



const staffRoute = require('./routes/staffs');//path to method 
app.use(bodyParser.json());//bodyparser midleware
app.use(staffRoute);

const logresRoute = require('./routes/logres');
app.use(express.json());
app.use(express.urlencoded());
app.use(logresRoute);


 const customersRoute = require('./routes/customers');
app.use(customersRoute);

const employeesRoute = require('./routes/employees');
app.use(employeesRoute);


const aRoute = require('./routes/a');
app.use(aRoute);



const topicsRoute = require('./routes/topics');
app.use(topicsRoute);

const dmarksRoute = require('./routes/dmarks');
app.use(dmarksRoute);







app.use("/submission", require("./routes/submission"));

app.use("/topicrej", require("./routes/topicrej"));


const PORT = 8070;



app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})