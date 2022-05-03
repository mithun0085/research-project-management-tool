const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");//body parser
const cors = require("cors");
const dotev = require("dotenv");
const app = express();
require("dotenv").config();
const fileUpload= require('express-fileupload');
const cookieParser = require('cookie-parser');


app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles:true
}))



const PORT = process.env.PORT || 8070;

app.use(cors());//midleware


const URL =  process.env.MONGODB_URL;

{mongoose.connect(URL, {});}
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!");
})




app.use(bodyParser.json());//bodyparser midleware


const logresRoute = require('./routes/logres');
app.use(express.json());
app.use(express.urlencoded());
app.use(logresRoute);

const staffRoute = require('./routes/staffs');//path to method 
app.use(staffRoute); 

const customersRoute = require('./routes/customers');
app.use(customersRoute);

const employeesRoute = require('./routes/employees');
app.use(employeesRoute);

const suppliersRoute = require('./routes/suppliers');
app.use(suppliersRoute);







app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})