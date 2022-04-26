import React, {Component} from 'react';
import axios from 'axios'; 
import jsPDF from "jspdf";


export default class staffPay extends Component{
constructor(props){
  super(props);

  this.state={
    salaries:[] 
  };
}

GeneratePDF =()=>{
  var doc = new jsPDF("p", "pt", "a3", "pdf");
  doc.html(document.querySelector('#content'),{
         callback: function(pdf){
             pdf.save("Staff Payement Summary.pdf");
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


render(){ 
    return(
      <div  >
      <div className ="container">
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
        <h4>Staff Payment Summary</h4>
       
       <hr/>
             </div>
             
      </div>
      <form style={{textDecoration:'none',backgroundColor:'#EEEEEE',}}>
        <table id="content" className="table table-hover" style={{marginTop:'40px'}} > 
          <thead>
            <tr>
            <th scope="col">No</th>
              <th scope="col">Payment ID</th>
              <th scope="col">Basic Salary(Rs:)</th>
              <th scope="col">Net Salary(Rs:)</th>
              <th scope="col"></th>
              
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
                  <td>{salaries.Netsalary}</td>
                  <td></td>
                  

                </tr>
               ) )}





          </tbody>
        </table>
     

        </form>
        </div>
        <button className="btn btn-dark" style={{textDecoration:'none',backgroundColor:'#fc0703', fontSize:'1.25rem' ,padding: '0.5rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white'}} onClick={this.GeneratePDF} type="primary">Create pdf</button>
      </div>
       

       
     
    )
  }
}