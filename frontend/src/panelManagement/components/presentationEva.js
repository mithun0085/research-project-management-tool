import React, {Component} from 'react';
import evaPresent from './evaPresent.png';

export default class presentationEva extends Component{
   

render(){
        return(
            <center>
          <div className="">
          <h1 className="textcenter" >Evaluate Student Presentation</h1>
          <hr/>
   
          <div class="d-grid gap-2" >
 <div>      



 <div class="btn-group-vertical" style={{width:'250px'}}  >

  <button type="button" class="btn btn-warning"  ><a href = "http://localhost:3000/viewMSch/6297440e1646e562e07b7117"  style={{textDecoration:'none', color:'white'}}>View Marking Criteria</a></button>
          <button type="button" class="btn btn-warning"  ><a href = "/viewVideo"  style={{textDecoration:'none', color:'white'}}>View Student Presentation</a></button>
  <button type="button" class="btn btn-warning"  ><a href = "/insertEMarks"  style={{textDecoration:'none', color:'white'}}>Insert Marks</a></button>
  
 
 </div>


<center>
         
           <br></br><br></br>
          <img height="30%" width="30%" src={evaPresent} />
</center>


         </div>

          
          
         
          
          
          
          
          </div></div>


</center>


            
        )
    }
}