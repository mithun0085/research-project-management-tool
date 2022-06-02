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

      <div>
      <div className ="container">
      <div className="row">
        



      
           <h4 className="textcenter" style={{marginTop:'40px' ,fontFamily: 'Fantasy' }}>Research Topics</h4>
      
       <hr/>


     
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
                  <th scope="row">{index+1}</th>  
                  <td>
                      
                      
              
                            {topics.GroupId}
                        
                            
                  
                   </td>  
                   <td>
                   <a href={`/topicAction/${topics._id}`} >
                     {topics.Topic1} </a><br></br>
                     <a href={`/topicAction2/${topics._id}`} >
                   {topics.Topic2}</a><br></br>
                   <a href={`/topicAction3/${topics._id}`} >
                  {topics.Topic3}</a><br></br>
                  
                  
                  </td>
                  
                  
              
                  </tr> 
                
                 ) )}



               </tbody>
            </table>
        </center>

       





        </div>
      </div>
       
   
      </center>
  
       
     
    )
  }
}





