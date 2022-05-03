import React, {Component} from 'react';



export default class Payment extends Component{
   

render(){
        return(
            
          <div className="bacground1">
          <h1 className="textcenter" >Supervisor/Co-Superviser</h1>
          <hr/>
   
          <div class="d-grid gap-2" >
 <div>      



 <div class="btn-group-vertical"   >

<button type="button" class="btn btn-warning"  ><a href = "/employeepaymentcalculation"  style={{textDecoration:'none', color:'white'}}>Accept Topics</a></button>
<button type="button" class="btn btn-dark" ><a href = "/supplierpaymentcalculation"  style={{textDecoration:'none', color:'white'}}>Evaluate Documents</a></button>
<button type="button" class="btn btn-warning" ><a href = "/customerpayment"  style={{textDecoration:'none', color:'white'}}>Customer Payment summary</a></button>

 </div>
   
<center>
         
          <img height="350px" width="800px" src={'/static/images/payment2.jpg'}/>
</center>


         </div>
       
          <button  type="button" class="btn btn-primary" style={{marginBottom:'10px' ,padding: "12px"}}><a href = "/employeepayment"  style={{textDecoration:'none', color:'white'}}>Accept Topics</a></button>
          <button  type="button" class="btn btn-primary" style={{marginBottom:'10px', padding:"10px" }}><a href = "/supplierpayment"  style={{textDecoration:'none', color:'white'}}>Evaluate Documents</a></button>
          <button  type="button" class="btn btn-primary" style={{marginBottom:'10px', padding:"10px" }}><a href = "/customerpayment"  style={{textDecoration:'none', color:'white'}}>Customer Payment Management</a></button>
          
          
         
          
          
          
          
          </div></div>





            
        )
    }
}