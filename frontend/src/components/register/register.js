import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        role: "",
        age: "",
        gender: "",
        email: "",
        address: "",
        contactNo: "",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, role, age, gender, address, email,contactNo, password, reEnterPassword } = user
        if( name && role && age && gender && address && email && contactNo && password && (password === reEnterPassword)){
            axios.post("http://localhost:8070/staffs/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="role" value={user.role} placeholder="Your role" onChange={ handleChange }></input>
            <input type="text" name="age" value={user.age} placeholder="Your age" onChange={ handleChange }></input>
            <input type="text" name="gender" value={user.gender} placeholder="Your gender" onChange={ handleChange }></input>
            <input type="text" name="address" value={user.address} placeholder="Your address" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="text" name="contactNo" value={user.contactNo} placeholder="Your contact" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Register