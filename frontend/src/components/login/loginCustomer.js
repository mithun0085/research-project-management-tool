import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Assign = ({ setLoginUser}) => {

    
    const history = useHistory()

    const [ user, setUser] = useState({
        branch:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:8070/staffs/assign", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/home")
        })
    }

    return (
        <div className="login">
            <div style={{textDecoration:'none',color:'red',}}><h6>Restricted Area:Only Satff Members Have Access</h6></div>
            <h1><b>System</b></h1>
            <div className="az"> <img height="50%" width="50%" src={'/static/images/login.png'}></img> </div>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login As Staff</div>
            
            
        </div>
        
    )
}

export default Assign