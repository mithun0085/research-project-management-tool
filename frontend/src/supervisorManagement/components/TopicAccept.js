import React, {Component} from 'react';
import axios from 'axios'; 



export default class TopicAccept extends Component{
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
  axios.get("/topics").then(res=>{ 
    if(res.data.success){
      this.setState({
        topics:res.data.existingTopics
      });

      console.log(this.state.topics);
    }
  });
}





filterData(topic,searchKey){

  const result = topic.filter((a)=>

   a.GroupId.includes(searchKey)
  )
  this.setState({topics:result})
}

handleSearchArea=(e) =>{
  const searchKey =e.currentTarget.value;
  axios.get("/topics").then(res=>{ 
    if(res.data.success){
      this.filterData(res.data.existingTopics,searchKey)

    }

});
}

render(){ 
    return(

      
        <center>
  <div class="card bg-light mb-3 w3-gray" style={{width:'1000px'}}>

      <div>
      <div >
      <div className="row">
        



      
           <h4 className="textcenter" style={{marginTop:'40px' ,fontFamily: 'Fantasy',fontSize:'30px',color:'white' }}>Research Topics</h4>
      
       <hr/>
       <center>
       <div style={{marginTop:'10px'}}>

<div class="w3-card-4 w3-margin w3-purple"  style={{width:'980px'}} >

<div class="w3-container w3-deep-purple" style={{width:'800px'}}>




<h1 style={{backgroundColor:'blue',width:'400px'}}>System Supervisor</h1>
<h>keeps a record of submited topic by students/ to give a feed back click on the relavant topic link</h>
</div>
</div>
</div>
</center>

       
     
        <div className="col-lg-3 mt-2 mb-2">
          
        <input
           className = "from-control"  style={{width:'400px', height:'40px',backgroundColor:'white'}}type="search" placeholder="Search by Group ID" name="searchQuery" onChange={this.handleSearchArea}>
        </input>
            
             </div>
           
      </div>



      <div style={{marginTop:'20px' }}>
     
   
        
       
        </div>

      
<center>
        <table id="customers" className="table table-hover" style={{marginTop:'40px',backgroundColor:'white'}} > 
          <thead>
            <tr >
            <th scope="col">Index</th>
              <th scope="col">Group ID</th>
              <th scope="col">Research Topic</th>
             
             
            </tr>
          </thead>

          <tbody>
              {this.state.topics.map((topics,index)=>( //used salaries array variable
                <tr key={index} style={{}}>
                  <td>{index+1}</td>  
                  <th>
                      
                      
              
                            {topics.GroupId}
                        
                            
                  
                   </th>  
                   <td>
                   <a href={`/topicAction/${topics._id}`} style={{color:'blue'}}>
                     {topics.Topic1} </a><br></br>
                     <a href={`/topicAction2/${topics._id}`} style={{color:'blue'}}>
                   {topics.Topic2}</a><br></br>
                   <a href={`/topicAction3/${topics._id}`} style={{color:'blue'}}>
                  {topics.Topic3}</a><br></br>
                  
                  
                  </td>
                  
                  
              
                  </tr> 
                
                 ) )}



               </tbody>
            </table>
        </center>

       





        </div>
      </div>
       
      </div>
      </center>
  
       
     
    )
  }
}






