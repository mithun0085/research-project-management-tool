import React, {Component} from 'react';
import axios from 'axios';



export default class option extends Component{

render(){
    return(

        <div className="Options">
        <center>
        <br></br>    
        <h2>Supplier Options</h2>
        <br></br>
        <br></br>
        <br></br>
         <button className="btn btn-primary"><a href ="/option" style={{textDecoration:'none',fontSize:'1.25rem' ,padding: '4rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white',}}>Supplier Payment Options</a></button>
         <br></br>
         <br></br>
         <button className="btn btn-primary"><a href ="/option" style={{textDecoration:'none',fontSize:'1.25rem' ,padding: '4rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white',}}>Stock Item View</a></button>
         <br></br>
         <br></br>
         <button className="btn btn-primary"><a href ="/option" style={{textDecoration:'none',fontSize:'1.25rem' ,padding: '4rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white',}}>Researh</a></button>
         <br></br>
        </center> 
        </div>
        
    )
}

}

