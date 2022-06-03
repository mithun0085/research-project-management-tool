import React, {Component} from 'react';



export default class SupervisorHome extends Component{
   

render(){
        return(
            
          <div className="bacground1">
          <h4  className="textcenter" style={{marginTop:'40px' ,fontFamily: 'Fantasy' }} >Supervisor</h4>
          <hr/>
   
          <div class="d-grid gap-2" >
 <div>      



 <div class="btn-group-vertical"   >

<button type="button" class="btn btn-warning"  ><a href = "/topicAccept"  style={{textDecoration:'none', color:'white'}}>Research Topics</a></button>

<button type="button" class="btn btn-dark" ><a href = "/submissionEva"  style={{textDecoration:'none', color:'white'}}> Assignment Evaluation</a></button>


 </div>
   
<center>
         
          <img height="350px" width="800px" src={'/static/images/payment2.jpg'}/>
</center>


         </div>
       
        
          
         
          
          
          
          
          </div></div>





            
        )
    }
}