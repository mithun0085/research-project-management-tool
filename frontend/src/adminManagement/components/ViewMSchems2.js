import React, {Component} from 'react';
import axios from 'axios'; 




export default class ViewMSchems2 extends Component{
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
     alert("Delete successfully");
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
        <center>
      <div className ="container">
      <div className="row">
        


<div  >
       

       
       
       <div class="w3-card-4 w3-margin w3-pale-white"style={{width:'1300px'}} >


       <div  className="textcenter" style={{marginTop:'40px' }}>

          
<h4 className="textcenter" style={{marginTop:'40px' ,fontFamily: 'Fantasy' }} >Marking Scheme List</h4>
</div>
<hr/>
  
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
              <th scope="col">Name</th>
            
              
              
            
            </tr>
          </thead>

          <tbody>
              {this.state.marks.map((marks,index)=>( //used salaries array variable
                <tr key={index}>
                  <th scope="row">{index+1}</th>  
                  
                  <td  ><a href={`/viewMSch/${marks._id}`} style={{color:'blue'}}>
                  {marks.Name}   </a></td>
               
              
                

                </tr>
               ) )}





          </tbody>
        </table>
        </div>
        </div>
        
        </div>

        <br></br><br></br><br></br>

  
</div>
</center>
       


        </div>
    
       

       
     
    )
  }
}


