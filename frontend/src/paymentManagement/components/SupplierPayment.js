import React, {Component} from 'react';
import axios from 'axios'; 



export default class SuppliePayment extends Component{
constructor(props){
  super(props);

 
  this.state={
    payments:[] 
  };
}


componentDidMount(){
  this.retrivePayments(); 
}


retrivePayments(){ 
  axios.get("/supplierss").then(res=>{ 
    if(res.data.success){
      this.setState({
        payments:res.data.existingPayments
      });

      console.log(this.state.payments);
    }
  });
}



onDelete = (id) =>{ 
   axios.delete(`/payment/delete/${id}`).then((res) =>{ 
     alert("Delete successfully");
     this.retrivePayments();

   })
}
  


filterData(supplier,searchKey){
const result = supplier.filter((aa)=>

 aa.Suppliername.includes(searchKey)
)
this.setState({payments:result})
}


handleSearchArea=(e) =>{
  const searchKey =e.currentTarget.value;
  axios.get("/supplierss").then(res=>{ 
    if(res.data.success){
      this.filterData(res.data.existingPayments,searchKey)
}

 });
   }

   render(){ 
    return(
      <div className ="background4">
      <div className ="container">
      <div className="row">
        
        <div className="textcenter" style={{marginTop:'40px' ,backgroundColor:'black' , color:'white', padding:'30px'}}>
           <h4>Supplier Payment Management</h4>
       </div>
       <hr/>
     
        <div className="col-lg-3 mt-2 mb-2">
        <input
           className = "from-control" type="search" placeholder="Search" name="searchQuery" style={{position:'right'}} onChange={this.handleSearchArea}>
             </input>
             </div>
            
             
      </div>
        <table className="table table-hover" style={{marginTop:'40px'}}> 
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Supplier Name</th>
              <th scope="col">Registration NO</th>
              <th scope="col">Total Amount</th>
              
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
              {this.state.payments.map((payments,index)=>( 
                <tr key={index}>
                  <th scope="row">{index+1}</th>  
                  <td>
                      
                      <a href = {`/supplierpaymentdetails/${payments._id}`} style={{textDecoration:'none'}}>
                      {payments.Suppliername}
                      </a>
                  
                   </td>  
                   <td>{payments.Supplierid}</td>
                  <td>{payments.Total}</td>
                  
<td>
                    <a className="btn btn-dark" style={{backgroundColor:'	dimgray' }} href={`/editsupplierpayment/${payments._id}`}>
                    <i className = "fas fa-edit"></i>&nbsp;Edit
                    </a>
                     &nbsp;
                    <a className="btn btn-dark"  style={{backgroundColor:'	dimgray' }}href="#" onClick={()=>this.onDelete(payments._id)}> 
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>

                </tr>
               ) )}

          </tbody>
        </table>
       

        <div style={{marginTop:'20px' }}>
        <center>
         <button type="button"  className="btn btn-primary"><a href ="/insertsupplierpayment" style={{textDecoration:'none', color:'white'}}>Insert New Payment</a></button>
        </center>
        </div>
        </div>
      </div>
       
     
    )
  }
}


