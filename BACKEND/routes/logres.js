const express = require('express');//require expree
const Staffs = require('../models/Staff');

const app = express.Router();
//Routes
app.post("/staffs/login", (req, res)=> {
    const { email, password} = req.body
    Staffs.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/staffs/register", (req, res)=> {
    const { name, role, age, gender, email, address, contactNo, password} = req.body
    Staffs.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new Staffs({
                name,
                role,
                age,
                gender,
                email,
                address,
                contactNo,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

module.exports = app;