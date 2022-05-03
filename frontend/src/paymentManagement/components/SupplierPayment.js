import React, {Component} from 'react';
import axios from 'axios'; //import axios package

export default class Home extends Component{
constructor(props){
  super(props);

 
  this.state={
    suppliers:[] //request ekak yewwama server eken dena slaries tika me array variable eka athulata dagannawa
  };
}


componentDidMount(){
  this.retriveSuppliers(); //retrive salaries method ekata call krnwa
}


retriveSuppliers(){ //get request ekata adala method ekak hithalaliyanwa
  axios.get("/suppliers").then(res=>{ //server eke thiyana serama salaries get request eka magin gannwa,link eka wenne get request ekata agala url eka
    if(res.data.success){//data enwwanam e kiynne get method eke dila thiyana success key eka true unth
      this.setState({
        suppliers:res.data.existingSuppliers//salries kiyana array variable ekata, js eke thiyana existingSalaries kiyana key ekat awith tyn ewa assign krnwa
      });

      console.log(this.state.suppliers);//liyapu request ekata salaries enwada balnwa
    }
  });
}



onDelete = (id) =>{ //ondelete method eka delete button eke
   axios.delete(`/suppliers/delete/${id}`).then((res) =>{ //delete ekt adala backend url eka
     alert("Delete successfully");
     this.retriveSuppliers();//display ithuru salaries, kalin liyapu method eka

   })
}
  
filterData(suppliers,searchKey){//pahala method eka
  const result=suppliers.filter((supplier)=> //
  supplier.s_name.includes(searchKey)//basicsalary eka thama search krnne
  )
   this.setState({suppliers:result})//search wela ena basic salary eka state eke thiyala salaries walata assign kr gnnwa
  
}

handleSearchArea= (e)=>{//search ekata function ekak
  const searchKey = e.currentTarget.value;//search wela ena eka searchkey variable ekata assign kr gnnwa
         
  axios.get("/suppliers").then(res=>{
    if(res.data.success){
      this.filterData(res.data.existingSuppliers,searchKey)
    }                 
  }); 
}
render(){ 
  return(
    <div style={{backgroundColor:'GhostWhite'}}>
    <div className ="container">
    <div className="row">
      



      <div className="textcenter" style={{marginTop:'40px', textDecorationStyle:'bold' }}>
         <h4>Supplier Payment Management</h4>
     </div>
     <hr/>
   
      <div className="col-lg-3 mt-2 mb-2">
        
      <input
         className = "from-control"  style={{width:'400px', height:'40px',backgroundColor:'white'}}type="search" placeholder="Search" name="searchQuery" onChange={this.handleSearchArea}>
           </input>
          
           </div>
         
    </div>



    <div style={{marginTop:'20px' }}>
   
      <button class="btn" type="button" class="btn btn-primary" style={{marginBottom:'10px' ,padding: "12px",color:'white'}}><i class="fa fa-folder"></i><a href = "/supplierpaymentcalculation"  style={{textDecoration:'none', color:'white'}}>Supplier Payment Summary</a></button>
      
     
      </div>

    
<center>
      <table id="customers2" className="table table-hover" style={{marginTop:'40px',backgroundColor:'white'}} > 
        <thead>
          <tr >
          <th scope="col">Index</th>
            <th scope="col">Supplier Name</th>
            <th scope="col">Supplier ID</th>
         
           
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
            {this.state.suppliers.map((suppliers,index)=>( //used salaries array variable
              <tr key={index} style={{}}>
                <th scope="row">{index+1}</th>  
                <td>
                    
                    
                    {suppliers.s_name}
                   
                
                 </td> 
                 <td>
                    
                    
                    {suppliers.s_id}
                   
                
                 </td> 
               
                
                
                <td>

                  <a className="btn3 button3" href="/insertsupplierpayment">
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
  <h>keeps a record of the total amount of payments or wages paid by a company to its suppliers</h>
</div>
</div>
      </div>
    </div>
     
   
  )
}
}