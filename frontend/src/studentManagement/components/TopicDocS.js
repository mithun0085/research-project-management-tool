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
      <div style={{backgroundColor:'GhostWhite'}}>
      <div className ="container">
      <div className="row">
        



      
           <h4 className="textcenter" style={{marginTop:'40px' ,fontFamily: 'Fantasy' }}>Topic Feedback by Panel</h4>
      
       <hr/>







 
     
   

       
     
        <div className="col-lg-3 mt-2 mb-2">
          
        <input
           className = "from-control"  style={{width:'400px', height:'40px',backgroundColor:'white'}}type="search" placeholder="Search by Document Name" name="searchQuery" onChange={this.handleSearchArea}>
        </input>
            
             </div>
           
      </div>



   
      
<center>
        <table id="customers" className="table table-hover" style={{marginTop:'40px',backgroundColor:'white'}} > 
          <thead>
            <tr >
            <th scope="col">Index</th>
              <th scope="col">Document Name</th>
              <th scope="col">Action</th>
              <th scope="col">Reasomn to rejecct</th>
           
             
             
            </tr>
          </thead>

          <tbody>
              {this.state.topics.map((topics,index)=>( //used salaries array variable
                <tr key={index} style={{}}>
                  <th scope="row">{index+1}</th>  
                  <td>
                      
                      
                  
                            {topics.DocName}
                       
                            
                  
                   </td>  
                   <td>
                   
                       {topics.Action}
                    
                 
                   </td>

                   <td>
                  
                       {topics.Reason}
                     
                       
                 
                   
                   </td>
           
                
                  
                  
              
                  </tr> 
                
                 ) )}



               </tbody>
            </table>


            <button type="button" class="btn btn-success" ><a href = "/topicDeRej"  style={{textDecoration:'none', color:'white'}}> +</a></button>  <br></br><br></br>
        </center>

       




        </div>
      </div>
       
     
    )
  }
}





