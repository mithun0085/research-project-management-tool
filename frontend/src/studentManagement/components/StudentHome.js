import React, {Component} from 'react';



export default class StudentHome extends Component{
   

render(){
        return(
            
          <div className="bacground1">
          <h1 className="textcenter" >Student</h1>
          <hr/>
   
          <div class="d-grid gap-2" >
 <div>      



 <div class="btn-group-vertical"   >

  <button type="button" class="btn btn-warning"  ><a href = "/insertTopic"  style={{textDecoration:'none', color:'white'}}>Topic Registration</a></button>
  <button type="button" class="btn btn-dark" ><a href = "/topicSummaryS1"  style={{textDecoration:'none', color:'white'}}> Topic Feedback by Supervisors</a></button>
  <button type="button" class="btn btn-warning" ><a href = "/topicDeRej"  style={{textDecoration:'none', color:'white'}}> Topic Details Registration</a></button>
  <button type="button" class="btn btn-danger" ><a href = "/submissionRej"  style={{textDecoration:'none', color:'white'}}>Assignments</a></button>
  
  
  
 
 </div>











   
<center>
         
          <img height="350px" width="800px" src={'/static/images/payment2.jpg'}/>
</center>


         </div>

          
          
         
          
          
          
          
          </div></div>





            
        )
    }
}