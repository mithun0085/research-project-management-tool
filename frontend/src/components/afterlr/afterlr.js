import React from "react"
import "./afterlr.css"

const Afterlr = ({setLoginUser}) => {
    return (
        <div className="afterlr">
            <h1><b>Hello Administrative Staff Members</b></h1>
            <h3><b>Welcome To The System</b></h3>
            
            <button className="button2"><a href ="/home" style={{textDecoration:'none', color:'white'}}>Administrator</a></button>

            <button className="button2"><a href ="/performance" style={{textDecoration:'none', color:'white'}}>Student </a></button>
            <button className="button2"><a href ="/supplier" style={{textDecoration:'none', color:'white'}}>Supervisor</a></button>
            <button className="button2"><a href ="/service" style={{textDecoration:'none', color:'white'}}>Panel Member</a></button>
            <button className="button2"><a href ="/payment" style={{textDecoration:'none', color:'white'}}>Payment Manager Area</a></button>
            <br></br>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}


export default Afterlr