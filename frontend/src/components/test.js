import React, {Component} from 'react';
import axios from 'axios'; //import axios package


export default class test extends Component{
render(){ //meka athule liyanne jss formate eken, meka thama interface eka 
    return(
      
      <div className="login2">
      <h1>Manager's Login</h1>
         <br></br>
         <button className="btn btn-secondary"><a href ="/login" style={{textDecoration:'none',fontSize:'1.25rem' ,padding: '4rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white',}}>Log In As Item Manager</a></button>
         <br></br>
         <br></br>
         
        </div>
      
       
     
    )
  }
}