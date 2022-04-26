import React, {Component} from 'react';



export default class Payment extends Component{
   

render(){
        return(
            
            <div className="background1">
            <h1 className="textcenter" style={{marginTop:'40px'}}>Payment Management</h1>
            <hr/>
     
            <div class="d-grid gap-2"  style={{marginTop:'40px'}}>
            
            <button  type="button" class="btn btn-dark" style={{marginTop:'140px' ,padding: "12px"}}><a href = "/employeepayment"  style={{textDecoration:'none', color:'white'}}>Employee Payment Management</a></button>
            <button  type="button" class="btn btn-dark" style={{marginTop:'100px', padding:"10px"}}><a href = "/supplierpayment"  style={{textDecoration:'none', color:'white'}}>Supplier Payment Management</a></button>
            <button  type="button" class="btn btn-dark" style={{marginTop:'100px', padding:"10px"}}><a href = "/customerpayment"  style={{textDecoration:'none', color:'white'}}>Customer Payment Management</a></button>
         
          
          </div>
          </div>  
            
        )
    }
}
