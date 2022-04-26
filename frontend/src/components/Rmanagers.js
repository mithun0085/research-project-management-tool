import React, {Component} from 'react';
import axios from 'axios'; //import axios package


export default class Rmanagers extends Component{
render(){ //meka athule liyanne jss formate eken, meka thama interface eka 
    return(
      
      <div className="login2">
      <h1>Manager's Login</h1>
         <br></br>
         <button className="btn btn-secondary"><a href ="/newLogin" style={{textDecoration:'none',fontSize:'1.25rem' ,padding: '4rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white',}}>Log In As Item Manager</a></button>
         <br></br>
         <br></br>
         <button className="btn btn-secondary"><a href ="/service" style={{textDecoration:'none',fontSize:'1.25rem' ,padding: '4rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white',}}>Log In As Service Manager</a></button>
         <br></br>
         <br></br>
         <button className="btn btn-secondary"><a href ="/supplier" style={{textDecoration:'none',fontSize:'1.25rem' ,padding: '4rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white',}}>Log In As Supplier Manager</a></button>
         <br></br>
         <br></br>
         <button className="btn btn-secondary"><a href ="/payment" style={{textDecoration:'none',fontSize:'1.25rem' ,padding: '4rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white',}}>Log In As Payment Manager</a></button>
         <br></br>
         <br></br>
         <button className="btn btn-secondary"><a href ="/customer_manager_login" style={{textDecoration:'none',fontSize:'1.25rem' ,padding: '4rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white',}}>Log In As Customer Manager</a></button>
         <br></br>
         <br></br>
         <button className="btn btn-secondary"><a href ="/performance" style={{textDecoration:'none',fontSize:'1.25rem' ,padding: '4rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white',}}>Log In As Perfomance Manager</a></button>
         <br></br>
         <br></br>
         <button className="btn btn-secondary"><a href ="/quality_manager_login" style={{textDecoration:'none',fontSize:'1.25rem' ,padding: '4rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white',}}>Log In As Quality Assurance Manager</a></button>
        </div>
      
       
     
    )
  }
}