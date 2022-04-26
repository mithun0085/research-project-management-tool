import React, {Component} from 'react';
import axios from 'axios'; //import axios package
import jsPDF from "jspdf";

export default class Home extends Component{
constructor(props){
  super(props);

 
  this.state={
    staffs:[] 
  };
}

GeneratePDF =()=>{
  var doc = new jsPDF("p", "pt", "a3", "pdf");
  doc.html(document.querySelector('#content'),{
         callback: function(pdf){
             pdf.save("staff.pdf");
         }
  });
};


componentDidMount(){
  this.retriveStaffs(); 
}


retriveStaffs(){ 
  axios.get("/staffs").then(res=>{ 
    if(res.data.success){
      this.setState({
        staffs:res.data.existingStaffs
      });

      console.log(this.state.staffs);
    }
  });
}



onDelete = (id) =>{ 
   axios.delete(`/staffs/delete/${id}`).then((res) =>{ 
     alert("Delete successfully");
     this.retriveStaffs();

   })
}
  
filterData(staffs,searchKey){
  const result=staffs.filter((staff)=> 
  staff.name.includes(searchKey)
  )
   this.setState({staffs:result})
  
}

handleSearchArea= (e)=>{
  const searchKey = e.currentTarget.value;
         
  axios.get("/staffs").then(res=>{
    if(res.data.success){
      this.filterData(res.data.existingStaffs,searchKey)
    }                 
  });
}

render(){  
    return(
      <div className ="container">
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
          <h4>All Staff Members</h4>
        </div>

        <div className="col-lg-3 mt-2 mb-2">
        <input style={{textDecoration:'none',backgroundColor:'#EEEEEE',borderBlockColor:'black',float: 'right',
  padding: '6px 10px',
  marginTop: '8px',
  marginRight: '16px',
  background: '#ddd',
  fontSize: '17px',
  border: 'none',
  cursor: 'pointer',}}
           className = "from-control" type="search" placeholder="Search By Name" name="searchQuery" onChange={this.handleSearchArea}>
             </input>
             </div>
             
      </div>
      <form style={{textDecoration:'none',backgroundColor:'#EEEEEE',}}>
        <table id="content" className="table table-hover" style={{marginTop:'40px'}}> 
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Contact No</th>
              <th scope="col">**********Action***********</th>
            </tr>
          </thead>

          <tbody>
              {this.state.staffs.map((staffs,index)=>( 
                <tr key={index}>
                  <th scope="row">{index+1}</th>  
                  <td>
                      
                      <a href = {`/staff/${staffs._id}`} style={{textDecoration:'none'}}>
                      {staffs.name}
                      </a>
                  
                   </td>  
                  <td>{staffs.role}</td>
                  <td>{staffs.age}</td>
                  <td>{staffs.gender}</td>
                  <td>{staffs.email}</td>
                  <td>{staffs.address}</td>
                  <td>{staffs.contactNo}</td>
                  
                  <td>

                    <a className="btn btn-warning" href={`/edit/${staffs._id}`}>
                    <i className = "fas fa-edit"></i>&nbsp;Update
                    </a>
                     &nbsp;
                    <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(staffs._id)}> 
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>

                </tr>
               ) )}

          </tbody>
        </table>
        </form>
         <button className="btn btn-dark"><a href ="/add" style={{textDecoration:'none',fontSize:'1.25rem' ,padding: '4rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white'}}>Create A New Administrative User</a></button>
         <br></br>
         <br></br>
         <button className="btn btn-dark"><a href ="/staffPay" style={{textDecoration:'none',fontSize:'1.25rem' ,padding: '4rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white'}}>Staff Payment Summary</a></button>
         <br></br>
         <br></br>
         <button className="btn btn-dark" style={{textDecoration:'none',backgroundColor:'#fc0703', fontSize:'1.25rem' ,padding: '0.5rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white'}} onClick={this.GeneratePDF} type="primary">Create pdf</button>
        </div>
        
       
     
    )
  }
}