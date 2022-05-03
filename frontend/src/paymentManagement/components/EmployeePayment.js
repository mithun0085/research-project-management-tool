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
      <div style={{backgroundColor:'GhostWhite'}}>
      <div className ="container">
      <div className="row">
        



        <div className="textcenter" style={{marginTop:'40px', textDecorationStyle:'bold' }}>
           <h4>Employee Payment Management</h4>
       </div>
       <hr/>
     
        <div className="col-lg-3 mt-2 mb-2">
          
        <input
           className = "from-control"  style={{width:'400px', height:'40px',backgroundColor:'white'}}type="search" placeholder="Search" name="searchQuery" onChange={this.handleSearchArea}>
             </input>
            
             </div>
           
      </div>



      <div style={{marginTop:'20px' }}>
     
        <button class="btn" type="button" class="btn btn-primary" style={{marginBottom:'10px' ,padding: "12px",color:'white'}}><i class="fa fa-folder"></i><a href = "/employeepaymentcalculation"  style={{textDecoration:'none', color:'white'}}>Employee Payment Summary</a></button>
        
       
        </div>

      
<center>
        <table id="customers" className="table table-hover" style={{marginTop:'40px',backgroundColor:'white'}} > 
          <thead>
            <tr >
            <th scope="col">Index</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Employee Role</th>
             
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
              {this.state.salaries.map((salaries,index)=>( //used salaries array variable
                <tr key={index} style={{}}>
                  <th scope="row">{index+1}</th>  
                  <td>
                      
                      
                      {salaries.name}
                     
                  
                   </td>  
                   <td>{salaries.role}</td>
                  
                  
                  <td>

                    <a className="btn3 button3" href="/addSalary">
                    <i className = "fas fa-edit"></i>&nbsp;Insert
                    </a>
                     &nbsp;
                    
                  </td>

                  

                </tr> 
                
                
                
                
                
                
                ) )}



               </tbody>



               
        </table>
        </center>

       




        <div class="card" >
  
  <div class="container" >


 
     
    <p >Run Payroll</p> 
    <h>keeps a record of the total amount of salaries or wages paid by a company to its employees</h>
  </div>
</div>
        </div>
      </div>
       
     
    )
  }
}
