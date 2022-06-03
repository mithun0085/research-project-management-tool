import React, {Component} from 'react';
import axios from 'axios'; 




export default class ViewMSchems extends Component{
constructor(props){
  super(props);

 
  this.state={
    marks:[] 
  };
}


componentDidMount(){
  this.retriveMarks(); 
}




retriveMarks(){ 
  axios.get("/dmarks").then(res=>{ 
    if(res.data.success){
      this.setState({
        marks:res.data.existingDmarks 
      });

      console.log(this.state.marks);
    }
  });
}



onDelete = (id) =>{ 
   axios.delete(`/dmark/delete/${id}`).then((res) =>{ 
     alert("Marking Scheme Deleted successfully");
     this.retriveMarks();

   })
}
  


filterData(dmarks,searchKey){
const result = dmarks.filter((aa)=>

 aa.Name.includes(searchKey)
)
this.setState({marks:result})
}


handleSearchArea=(e) =>{
  const searchKey =e.currentTarget.value;
  axios.get("/dmarks").then(res=>{ 
    if(res.data.success){
      this.filterData(res.data.existingDmarks,searchKey)
}

 });
   }
   render(){ 
    return(
      <div >
      <div className ="container">
      <div className="row">
        


<div  >
<center>
        <div  className="textcenter" style={{marginTop:'40px' }}>
          <center>
           <h2>List of Marking Schemes</h2>
           </center>
       </div>
       <hr/>


  <center>
       <div class="w3-card-4 w3-margin w3-white"style={{width:'1000px',float:'center'}} > 
     
  
  <div class="container" >
  
                        


                      
                        
                                          

  <div class="form-floating">

  

</div>

        <div className="col-lg-3 mt-2 mb-2">
       
             </div>
             
      </div>
        <table  className="table table-hover" style={{marginTop:'40px'}} > 
          <thead>
            <tr>
            <th scope="col">#</th>
              <th style={{fontWeight:'bold'}} scope="col">Marking Scheme Name</th>
            
              
              
              <th style={{fontWeight:'bold'}} scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
              {this.state.marks.map((marks,index)=>( //used salaries array variable

              
                <tr key={index}>
                  <th scope="row">{index+1}</th>  
                  
                  <td  style={{color:"darkblue",fontWeight:'bold'}}>{marks.Name}</td>
               
                 
                  <td>

                    <a className="w3-button w3-amber" href="#" onClick={()=>this.onDelete(marks._id)}> 
                    <i className="far fa-trash-alt"></i>&nbsp;
                    </a>
                <br></br>
                    <a className="w3-button w3-brown"  href={`/editMS/${marks._id}`} > 
                    <i className="far fa-edit"></i>&nbsp;
                    </a>
                  </td>
                

                </tr>
               ) )}





          </tbody>
        </table>
  </div>
  </center>
        </center>
        </div>
        </div>
       


        </div>
      </div>
       

       
     
    )
  }
}


