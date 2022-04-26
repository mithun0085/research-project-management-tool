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
  supplier.name.includes(searchKey)//basicsalary eka thama search krnne
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

render(){ //meka athule liyanne jss formate eken, meka thama interface eka 
    return(
      <div className ="container">
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
        <br></br>
         <center> <h4>All Suppliers</h4> </center>
        </div>

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
              <th scope="col">Supplier Name</th>
              <th scope="col">Supplier Id</th>
              <th scope="col">NIC</th>
              <th scope="col">ContactNo</th>
              <th scope="col">E-Mail</th>
              <th scope="col">Item Code</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
              {this.state.suppliers.map((suppliers,index)=>( //used supplier array variable
                <tr key={index}>
                  <th scope="row">{index+1}</th>  
                  <td>
                      
                      <a href = {`/suppliers/${suppliers._id}`} style={{textDecoration:'none'}}>
                      {suppliers.s_name}
                      </a>
                  
                   </td>  
                  <td>{suppliers.s_id}</td>
                  <td>{suppliers.nic}</td>
                  <td>{suppliers.phone}</td>
                  <td>{suppliers.email}</td>
                  <td>{suppliers.i_code}</td>
                  
                  <td>

                    <a className="btn btn-dark" href={`/editSupplier/${suppliers._id}`}>
                    <i className = "fas fa-edit"></i>&nbsp;Edit
                    </a>
                     &nbsp;
                    <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(suppliers._id)}> 
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>

                </tr>
               ) )}

          </tbody>
        </table>

         <button className="btn btn-secondary"><a href ="/addSupplier" style={{textDecoration:'none', color:'white'}}>Add New Supplier</a></button>
         <button className="btn btn-info"><a href ="/option" style={{textDecoration:'none', color:'black'}}>Supplier Options</a></button>
      
        </div>
      
       
     
    )
  }
}