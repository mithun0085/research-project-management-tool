import React, {Component} from 'react';
import axios from 'axios'; 
import jsPDF from "jspdf";



export default class EmployeePayment extends Component{
constructor(props){
  super(props);

 
  this.state={
    salaries:[] 
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
  this.retriveSalaries(); 
}


retriveSalaries(){ 
  axios.get("/salaries").then(res=>{ 
    if(res.data.success){
      this.setState({
        salaries:res.data.existingSalaries
      });

      console.log(this.state.salaries);
    }
  });
}



onDelete = (id) =>{ 
   axios.delete(`/salary/delete/${id}`).then((res) =>{ 
     alert("Delete successfully");
     this.retriveSalaries();

   })
}
  



render(){ 
    return(
      <div >
      <div className ="container">
      <div className="row">
        


<div  >
        <div  className="textcenter" style={{marginTop:'40px' }}>
           <h4>Employee Payment Summary</h4>
       </div>
       <hr/>


       
       
                  <div class="card2" id="content"   >
  
  <div class="container" >
  <form   className="needs-validation" noValidate>
                        


                      
                        
                                                <div className="form-group" style={{marginBottom:'15px'}}>
                                                   <label style={{marginBottom:'15px'}} class="form-label" ></label>
                                                    <input   style={{backgroundColor:'LightCyan'}}type="text" className="form-control"  placeholder="Enter Year" 
                                                   />
                                                </div>
                                                </form>

  <div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example" style={{backgroundColor:'LightCyan'}}>
   
    <option value="1">January</option>
    <option value="2">February</option>
    <option value="3">March</option>
    <option value="1">April</option>
    <option value="2">May</option>
    <option value="2">June</option>
    <option value="3">July</option>
    <option value="1">August</option>
    <option value="2">September</option>
    <option value="3">Octomber</option>
    <option value="1">November</option>
    <option value="2">December</option>
    
  </select>
  <label for="floatingSelect">Select Month</label>
</div>

        <div className="col-lg-3 mt-2 mb-2">
       
             </div>
             
      </div>
        <table  className="table table-hover" style={{marginTop:'40px'}} > 
          <thead>
            <tr>
            <th scope="col">#</th>
              <th scope="col">PaymentID</th>
              <th scope="col">Basic Salary (Rs)</th>
              <th scope="col">OT (Rs)</th>
              <th scope="col">Allowance (Rs)</th>
              <th scope="col">Bonus (Rs)</th>
              <th scope="col">Insurance (Rs)</th>
              <th scope="col">Transport (Rs)</th>
              <th scope="col">NetSalary (Rs)</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              
              
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
              {this.state.salaries.map((salaries,index)=>( //used salaries array variable
                <tr key={index}>
                  <th scope="row">{index+1}</th>  
                  <td style={{color:"blue",fontWeight:'bold'}}>
                     {salaries.Paymentid}
                 </td>  
                  <td  style={{color:"darkblue",fontWeight:'bold'}}>{salaries.Basicsalary}</td>
                  <td style={{color:"darkblue",fontWeight:'bold'}}>{salaries.OT}</td>
                  <td  style={{color:"darkblue",fontWeight:'bold'}}>{salaries.Vehicleallowance}</td>
                  <td  style={{color:"darkblue",fontWeight:'bold'}}>{salaries.Bonus}</td>
                  <td  style={{color:"darkblue",fontWeight:'bold'}}>{salaries.Insurance}</td>
                  <td  style={{color:"darkblue",fontWeight:'bold'}}>{salaries.Transport}</td>
                  <td style={{color:"blue",fontWeight:'bold'}}>{salaries.Netsalary}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>

                    <a className="btn btn-outline-success" href={`/editSalary/${salaries._id}`}>
                    <i className = "fas fa-edit"></i>&nbsp;Edit
                    </a>
                     &nbsp;
                    <a className="btn btn-outline-success" href="#" onClick={()=>this.onDelete(salaries._id)}> 
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>

                </tr>
               ) )}





          </tbody>
        </table>
        </div>
        </div>
        </div>
       
     
<button className="btn3 button3" onClick={this.GeneratePDF} type="primary">Print the Report</button>

        </div>
      </div>
       

       
     
    )
  }
}




