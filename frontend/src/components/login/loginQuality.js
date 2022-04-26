import React, {Component} from 'react';
import axios from 'axios'; //import axios package


export default class loginQuality extends Component{
render(){ //meka athule liyanne jss formate eken, meka thama interface eka 
    return(
      
        <div className="login3">
            <h1>Quality Manager Login</h1>
            <input type="text" name="email"  placeholder="Enter your Email"></input>
            <input type="password" name="password"  placeholder="Enter your Password" ></input>
            <div className="button" >Login As Quality Manager</div>
            
            
        </div>
        
    )
}
}