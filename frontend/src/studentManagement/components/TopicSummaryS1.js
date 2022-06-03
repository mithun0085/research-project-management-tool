import React, {Component} from 'react';
import axios from 'axios'; 



export default class S1 extends Component{
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
      <div style={{backgroundColor:'GhostWhite'}}>
      <div >
      <div className="row">
        



      <center>
           <h4 className="textcenter" style={{marginTop:'20px' ,fontFamily: 'Fantasy',fontSize:'40px' }}>Topic Feedback by supervisors</h4>
      
    
       </center>



       <div class="card" style={{width:'400px', height:'60px',backgroundColor:'blue',marginTop:'5px'}} >
  
  <div class="w3-container w3-amber"  >


 
     
   <h1 >Notice</h1>
    <h>Topic should be uploaded by students utill it accepted /If accepted send a document contains details that is asking under Topic Details Registration </h>
  </div>
</div>



       
     <center>
        <div className="col-lg-3 mt-2 mb-2">
          
        <input
           className = "from-control"  style={{width:'400px', height:'40px',backgroundColor:'white'}}type="search" placeholder="Search by Group ID" name="searchQuery" onChange={this.handleSearchArea}>
        </input>
            
             </div>
             </center>
      </div>



   
      
<center>
        <table id="customers" className="table table-hover" style={{marginTop:'50px',backgroundColor:'white',float:'center',width:'1200px'}} > 
          <thead>
            <tr >
            <th scope="col">Index</th>
              <th scope="col">Group ID</th>
              <th scope="col">Research Topic</th>
              <th scope="col">Action</th>
              <th scope="col">Reason to reject</th>
             
             
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
                   
                       {topics.Topic1}<br></br><br></br>
                       {topics.Topic2}<br></br><br></br>
                       {topics.Topic3}<br></br><br></br>
                 
                   </td>

                   <td>
                  
                       {topics.Action1}<br></br><br></br>
                       {topics.Action2}<br></br><br></br>
                       {topics.Action3}<br></br><br></br>
                 
                   
                   </td>
                   <td>
                   
                       {topics.Reason1}<br></br><br></br>
                       {topics.Reason2}<br></br><br></br>
                       {topics.Reason3}<br></br><br></br>
                  
                   
                   </td>
                   <td>
                   
                   <button type="button" class="btn btn-success" ><a href = {`/insertRejTopic/${topics._id}`}  style={{textDecoration:'none', color:'white'}}> +</a></button>  <br></br><br></br>
                   <button type="button" class="btn btn-dark" ><a href = {`/insertRejTopic2/${topics._id}`}  style={{textDecoration:'none', color:'white'}}> +</a></button>        
                  
                   
                   </td>
                  
                  
              
                  </tr> 
                
                 ) )}



               </tbody>
            </table>
        </center>

       




        </div>
      </div>
       
     
    )
  }
}






