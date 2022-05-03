import React, {Component} from 'react';
import axios from 'axios'; 
import jsPDF from "jspdf";



export default class CustomerPayment extends Component{
constructor(props){
  super(props);

 
  this.state={
    payments:[] 
  };
}


componentDidMount(){
  this.retrivePayments(); 
}




GeneratePDF =()=>{
  var doc = new jsPDF("p", "pt", "a2", "pdf");
  doc.html(document.querySelector('#content'),{
         callback: function(pdf){
             pdf.save("mypdf.pdf");
         }
  });
};

retrivePayments(){ 
  axios.get("/customers").then(res=>{ 
    if(res.data.success){
      this.setState({
        payments:res.data.existingPayments 
      });

      console.log(this.state.payments);
    }
  });
}



onDelete = (id) =>{ 
   axios.delete(`/cpayment/delete/${id}`).then((res) =>{ 
     alert("Delete successfully");
     this.retrivePayments();

   })
}
  


filterData(customer,searchKey){
const result = customer.filter((aa)=>

 aa.Customername.includes(searchKey)
)
this.setState({payments:result})
}


handleSearchArea=(e) =>{
  const searchKey =e.currentTarget.value;
  axios.get("/customers").then(res=>{ 
    if(res.data.success){
      this.filterData(res.data.existingPayments,searchKey)
}

 });
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
              <th scope="col">Customer Name</th>
              <th scope="col">Customer Payment ID</th>
              <th scope="col">Cart ID</th>
              <th scope="col">Total (Rs)</th>
             
              
              
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
              {this.state.payments.map((payments,index)=>( //used salaries array variable
                <tr key={index}>
                  <th scope="row">{index+1}</th>  
                  
                  <td  style={{color:"darkblue",fontWeight:'bold'}}>{payments.Customername}</td>
                  <td style={{color:"blue",fontWeight:'bold'}}>{payments.Customerid}</td>
                  <td  style={{color:"darkblue",fontWeight:'bold'}}>{payments.Cartid}</td>
                  <td  style={{color:"blue",fontWeight:'bold'}}>{payments.Total}</td>
                 
                  <td>

                    <a className="btn btn-outline-success" href="#" onClick={()=>this.onDelete(payments._id)}> 
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


