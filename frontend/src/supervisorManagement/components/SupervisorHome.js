import React, {Component} from 'react';



export default class SupervisorHome extends Component{
   

render(){
        return(
            
          <div >
            <center>
          <h4  className="textcenter" style={{marginTop:'10px' ,fontFamily: 'Fantasy' ,fontSize:'60px'}} >Supervisor</h4>
          </center>
        
   
          <div  >
 <div>      



 <div  class="container" >
 <img height="600px" width="1500px" style={{marginTop:'25px' }} src={'/static/images/supervisor.jpg'}/>
<button type="button" class="btn"  style={{top:'40%',left:'50%'}}><a href = "/topicAccept"  >Research Topics</a></button>

<button type="button" class="btn" style={{top:'30%',left:'40%'}}><a href = "/submissionEva"  > Assignment Evaluation</a></button>


 </div>
   



         </div>
       
        
          
         
          
          
          
          
          </div></div>





            
        )
    }
}