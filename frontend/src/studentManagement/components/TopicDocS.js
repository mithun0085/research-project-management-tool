import React, {Component} from 'react';
import axios from 'axios'; 



export default class TopicDocS extends Component{
constructor(props){
  super(props);

 
  this.state={
    topics:[] 
  };
}


componentDidMount(){
  this.retriveTopics(); 
}


retriveTopics(){ 
  axios.get("/topicdocs").then(res=>{ 
    if(res.data.success){
      this.setState({
        topics:res.data.existingTopicDocs
      });

      console.log(this.state.topics);
    }
  });
}





filterData(topic,searchKey){

  const result = topic.filter((a)=>

   a.DocName.includes(searchKey)
  )
  this.setState({topics:result})
}

handleSearchArea=(e) =>{
  const searchKey =e.currentTarget.value;
  axios.get("/topicdocs").then(res=>{ 
    if(res.data.success){
      this.filterData(res.data.existingTopicDocs,searchKey)

    }

});
}

render(){ 
    return(
    
      <div >
      <div className="row">
        



     








<center>
       <div class="w3-card-4 w3-margin w3-white"  style={{width:'900px',height:'800px'}} >




       <div style={{marginTop:'6px'}}>

       <center>
           <h4 className="textcenter" style={{marginTop:'40px' ,fontFamily: 'Fantasy',fontSize:'30px' }}>Topic Feedbacks</h4>
           </center>
       <hr/>
<center>
<div   style={{width:'900px'}} >

<div class="w3-container w3-sand" style={{width:'900px'}}>



<h1>Notice</h1>
<h2>Supervisor Feedback</h2>
<h>Check daily to get the feedback from supervisor/if topic is rejected need to register again </h>
<h2>Supervisor Feedback</h2>
<h>Topic details document should be uploaded by students till it accepted by the panel member / If it is rejecter students have to select a new topic and send it to the supervisor, then send to the panel member</h>
</div>
</div>
</center>
</div>




     
             <button type="button" class="w3-btn w3-gray"     style={{ width:'400px',height:'60px'}} ><a href = "/topicSummaryS1"  style={{textDecoration:'none', color:'white'}}> Feedback from Supervisor</a></button>  <br></br><br></br>

   
      

             <div class="dropdown"> 
<button class="w3-btn w3-gray"  style={{ width:'400px',height:'60px'}}  ><h style={{textDecoration:'none', color:'white'}}>Feed back from panel member</h></button>
{this.state.topics.map((topics,index)=>(
   <tr key={index} >
   <th style={{color:'white'}}>{index+1}</th>  

<div class="dropdown-content">
  
          
<a href="/topicDeRej" ><h style={{color:'red'}} >{topics.DocName}</h> |<h style={{color:'red'}} > {topics.Action}ed</h> | {topics.Reason}</a>
         
           
         </div>    
       
         </tr>
         ) )}
             
             </div>

         



            
  

       


</div>


</center>



        </div>
 
      </div>
       
     
    )
  }
}






