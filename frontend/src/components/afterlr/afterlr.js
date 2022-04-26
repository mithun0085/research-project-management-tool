import React from "react"
import "./afterlr.css"

const Afterlr = ({setLoginUser}) => {
    return (
        <div className="afterlr">
            <h1><b>Hello Administrative Staff Members</b></h1>
            <h3><b>Welcome To The System</b></h3>
            <div className="az"> <img height="100%" width="100%" src={'/static/images/afterlr.jpeg'}></img> </div>
           
            <button className="button2"><a href ="/home" style={{textDecoration:'none', color:'white'}}>Administrator Area</a></button>
            <button className="button2"><a href ="/payment" style={{textDecoration:'none', color:'white'}}>Payment Manager Area</a></button>
            <button className="button2"><a href ="/performance" style={{textDecoration:'none', color:'white'}}>Performance Manager Area</a></button>
            <button className="button2"><a href ="/service" style={{textDecoration:'none', color:'white'}}>Service Manager Area</a></button>
            <button className="button2"><a href ="/supplier" style={{textDecoration:'none', color:'white'}}>Supplier Manager Area</a></button>
            <button className="button2"><a href ="/loginCustomer" style={{textDecoration:'none', color:'white'}}>Customer Manager Area</a></button>
            <button className="button2"><a href ="/assignB" style={{textDecoration:'none', color:'white'}}>Item Manager Area</a></button>
            <br></br>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
           
        </div>
    )
}


export default Afterlr