import React, {Component} from 'react';



export default class PanelHome extends Component{
   

render(){
        return(
            
          <div >

        
   
          <div >
 <div>      





<center>
 <h4  className="textcenter" style={{marginTop:'10px' ,fontFamily: 'Fantasy' ,fontSize:'60px'}} >Panel Member</h4>

 </center>





         </div>

          
          
         
          
          
          
          
          </div>
          
          
          <div class="container">
          <img height="600px" width="1500px" style={{marginTop:'25px'}} src={'/static/images/panelhome.png'}/>
  
          <button  class="btn" style={{top:'40%',left:'50%'}} ><a href = "/home"  >Evaluate Topics</a></button>
   


          <button  class="btn" style={{top:'30%',left:'40%'}} ><a href = "/presentationEva"  >Evaluate Presentation</a></button>
  
  
</div>

</div>





            
        )
    }
}