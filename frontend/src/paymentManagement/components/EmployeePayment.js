import React, {Component} from 'react';
import axios from 'axios'; 



export default class EmployeePayment extends Component{
constructor(props){
  super(props);

 
  this.state={
    salaries:[] 
  };
}


componentDidMount(){
  this.retriveSalaries(); 
}


retriveSalaries(){ 
  axios.get("/staffs").then(res=>{ 
    if(res.data.success){
      this.setState({
        salaries:res.data.existingStaffs
      });

      console.log(this.state.salaries);
    }
  });
}





filterData(staff,searchKey){

  const result = staff.filter((a)=>

   a.name.includes(searchKey)
  )
  this.setState({salaries:result})
}

handleSearchArea=(e) =>{
  const searchKey =e.currentTarget.value;
  axios.get("/staffs").then(res=>{ 
    if(res.data.success){
      this.filterData(res.data.existingStaffs,searchKey)

    }

});
}

render(){ 
    return(
      <div className ="backgroun3">
      <div className ="container">
      <div className="row">
        



        <div className="textcenter" style={{marginTop:'40px', textDecorationStyle:'bold' }}>
           <h4>Employee Payment Management</h4>
       </div>
       <hr/>

        <div className="col-lg-3 mt-2 mb-2">
        <input
           className = "from-control" type="search" placeholder="Search" name="searchQuery" onChange={this.handleSearchArea}>
             </input>
             </div>
             
      </div>
        <table className="table table-hover" style={{marginTop:'40px'}} > 
          <thead>
            <tr style={{backgroundColor:'blue',color:'white'}}>
            <th scope="col">#</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Employee Role</th>
             
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
              {this.state.salaries.map((salaries,index)=>( //used salaries array variable
                <tr key={index} style={{backgroundColor:'lightblue'}}>
                  <th scope="row">{index+1}</th>  
                  <td>
                      
                      
                      {salaries.name}
                     
                  
                   </td>  
                   <td>{salaries.role}</td>
                  
                  
                  <td>

                    <a className="btn btn-outline-success" href="/addSalary">
                    <i className = "fas fa-edit"></i>&nbsp;Insert
                    </a>
                     &nbsp;
                    
                  </td>

                </tr>
               ) )}

          </tbody>
        </table>
       

        <div style={{marginTop:'20px' }}>
        <center>
        <button  type="button" class="btn btn-primary" style={{marginBottom:'10px' ,padding: "12px"}}><a href = "/employeepaymentcalculation"  style={{textDecoration:'none', color:'white'}}>Employee Payment Summary</a></button>
       
       </center>
        </div>
        </div>
      </div>
       
     
    )
  }
}