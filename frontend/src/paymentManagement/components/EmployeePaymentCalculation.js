
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
      <div className ="background3">
      <div className ="container">
      <div className="row">
        



        <div className="textcenter" style={{marginTop:'40px' ,backgroundColor:'black' , color:'white', padding:'30px'}}>
           <h4>Employee Payment Management</h4>
       </div>
       <hr/>

        <div className="col-lg-3 mt-2 mb-2">
       
             </div>
             
      </div>
        <table id="content" className="table table-hover" style={{marginTop:'40px'}} > 
          <thead>
            <tr>
            <th scope="col">#</th>
              <th scope="col">Payment ID</th>
              <th scope="col">Basic Salary</th>
              <th scope="col">OT</th>
              <th scope="col">Vehicle Allowance</th>
              <th scope="col">Bonus</th>
              <th scope="col">Insurance</th>
              <th scope="col">Transport</th>
              <th scope="col">Net Salary</th>
              <th scope="col"></th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
              {this.state.salaries.map((salaries,index)=>( //used salaries array variable
                <tr key={index}>
                  <th scope="row">{index+1}</th>  
                  <td>
                     {salaries.Paymentid}
                 </td>  
                  <td>{salaries.Basicsalary}</td>
                  <td>{salaries.OT}</td>
                  <td>{salaries.Vehicleallowance}</td>
                  <td>{salaries.Bonus}</td>
                  <td>{salaries.Insurance}</td>
                  <td>{salaries.Transport}</td>
                  <td>{salaries.Netsalary}</td>
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
     
<button className="btn3 button3" onClick={this.GeneratePDF} type="primary">Create pdf</button>

        </div>
      </div>
       

       
     
    )
  }
}