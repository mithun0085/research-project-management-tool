import React, {Component} from 'react';
import axios from 'axios'; 
import jsPDF from "jspdf";


export default class DMarksView extends Component{
constructor(props){
  super(props);

 
  this.state={
    topics:[] 
  };
}




GeneratePDF =()=>{
    var doc = new jsPDF("p", "pt", "a2", "pdf");
    doc.html(document.querySelector('#content'),{
           callback: function(pdf){
               pdf.save("mypdf.pdf");
           }
    });
  };











componentDidMount(){
  this.retriveTopics(); 
}


retriveTopics(){ 
  axios.get("/dmarks2").then(res=>{ 
    if(res.data.success){
      this.setState({
        topics:res.data.existingDmarks2
      });

      console.log(this.state.topics);
    }
  });
}





filterData(topic,searchKey){

  const result = topic.filter((a)=>

   a.Name.includes(searchKey)
  )
  this.setState({topics:result})
}

handleSearchArea=(e) =>{
  const searchKey =e.currentTarget.value;
  axios.get("/dmarks2").then(res=>{ 
    if(res.data.success){
      this.filterData(res.data.existingDmarks2,searchKey)

    }

});
}

render(){ 
    return(

      
        <center>
  <div class="card bg-light mb-3" style={{width:'600px'}}>

      <div>
      <div >
      <div className="row">
            
      <div class="w3-container">
          
          <input
             className = "from-control"  style={{width:'400px', height:'40px',backgroundColor:'white',width:'200px',marginTop:'7px'}}type="search" placeholder="Search by Group ID" name="searchQuery" onChange={this.handleSearchArea}>
          </input>
              
               </div>

<div id="content" >
<center>
      
           <h4 className="textcenter" style={{marginTop:'40px' ,fontFamily: 'Fantasy',fontSize:'30px',width:'400px' }}>Documents Mark Sheet</h4>
           <h4 className="textcenter" style={{marginTop:'40px' ,fontFamily: 'Fantasy',fontSize:'20px',width:'400px',color:'red' }}>Official results</h4>
           </center> 

       <hr/>
       <center>
      

</center>

       
     
     



     
      
<center >
        <table class="w3-table-all w3-centered" style={{marginTop:'40px',backgroundColor:'white'}} > 
          <thead>
            <tr >
            <th scope="col">Index</th>
              <th scope="col">Group ID</th>
              <th scope="col">Student ID</th>
              <th scope="col">Marks</th>
             
             
            </tr>
          </thead>

          <tbody>
              {this.state.topics.map((topics,index)=>( //used salaries array variable
                <tr key={index} style={{}}>
                  <td>{index+1}</td>  
                  <th>
                      
                      
              
                            {topics.Name}
                        
                            
                  
                   </th>  
                   <td>

                   {topics.S1ID}<br></br>
                   {topics.S2ID}<br></br>
                   {topics.S3ID}<br></br>
                   {topics.S4ID}<br></br>

                  </td>
                  <td>
                   {topics.S1DAllocatedMarks}<br></br>
                   {topics.S2DAllocatedMarks}<br></br>
                   {topics.S3DAllocatedMarks}<br></br>
                   {topics.S4DAllocatedMarks}<br></br>
                   </td>
              
                  </tr> 
                
                 ) )}



               </tbody>
            </table>
        </center>

       
</div>

</div>


        </div>
      </div>
       
      </div>

      <button class="w3-button w3-indigo fa fa-download" onClick={this.GeneratePDF} type="primary">Print the Marking Scheme</button>
      </center>
  
       
     
    )
  }
}






