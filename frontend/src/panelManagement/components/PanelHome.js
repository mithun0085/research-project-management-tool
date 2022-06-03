import React, {Component} from 'react';



export default class PanelHome extends Component{
   

render(){
        return(
            
          <div className="bacground1">
          <h1 className="textcenter" >Panel Member</h1>
          <hr/>
   
          <div class="d-grid gap-2" >
 <div>      



 <div class="btn-group-vertical"   >

  <button type="button" class="btn btn-warning"  ><a href = "/home"  style={{textDecoration:'none', color:'white'}}>Evaluate Topics</a></button>
          <button type="button" class="btn btn-warning"  ><a href = "/presentationEva"  style={{textDecoration:'none', color:'white'}}>Evaluate Presentation</a></button>
  <button type="button" class="btn btn-warning"  ><a href = "/home"  style={{textDecoration:'none', color:'white'}}>Upload </a></button>
  
 
 </div>











   
<center>
         
          <img height="350px" width="800px" src={'/static/images/payment2.jpg'}/>
</center>


         </div>

          
          
         
          
          
          
          
          </div></div>





            
        )
    }
}