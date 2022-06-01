import React, {Component} from 'react';



export default class StudentHome extends Component{
   

render(){
        return(
            
          <div className="bacground1">
          <h1 className="textcenter" >Admin</h1>
          <hr/>
   
          <div class="d-grid gap-2" >
 <div>      







 <div class="w3-container">


<div class="w3-bar">
  <button class="w3-bar-item w3-button w3-black" style={{width:'33.3%'}}><a href = "/createDocMSch"   style={{textDecoration:'none', color:'white'}}>Create Marking Schems</a></button>
  <button class="w3-bar-item w3-button w3-teal" style={{width:'33.3%'}}><a href = "/viewMSchems"   style={{textDecoration:'none', color:'white'}}>Edit/Delete Marking Schems</a></button>
  
</div>

</div>





   
<center>
         
          <img height="350px" width="800px" src={'/static/images/payment2.jpg'}/>
</center>


         </div>
       
          
          
         
          
          
          
          
          </div></div>





            
        )
    }
}