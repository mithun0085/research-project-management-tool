import React, {Component} from 'react';
import axios from 'axios'; 



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
      <div className ="background3">
      <div className ="container">
      <div className="row">
        
        <div className="textcenter" style={{marginTop:'40px' ,backgroundColor:'black' , color:'white', padding:'30px'}}>
            <h4>Customer Payment Management</h4>
               </div>
               <hr/>
                  <div className="col-lg-3 mt-2 mb-2">
                    <input
                       className = "from-control" type="search" placeholder="Search" name="searchQuery" onChange={this.handleSearchArea}>
                    </input>
                 </div>
      </div>
        
        <table className="table table-hover" style={{marginTop:'40px'}}> 
          <thead>
            <tr>
              <th scope="col">#</th>
             
              <th scope="col">Customer Name</th>
              <th scope="col">Registration No</th>
              <th scope="col">Cart NO</th>
              <th scope="col">Total Amount</th>
              <th></th>
             <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
              {this.state.payments.map((payments,index)=>( 
                <tr key={index}>
                  <th scope="row">{index+1}</th>  
                  
                   
                   
                  <td>{payments.Customername}</td>
                   <td >{payments.Customerid}</td>
                   <td >{payments.Cartid}</td>


                    <td>{payments.Total}</td>
                    <td></td>
                   
                 
                 
                  <td>

                   
                    <a className="btn btn-success" style={{backgroundColor:'	indigo'}} href="#" onClick={()=>this.onDelete(payments._id)}> 
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>

                </tr>
               ) )}

          </tbody>
        </table>
       

       
        
         
        
        </div>
        </div>
      
       
     
    )
  }
}

