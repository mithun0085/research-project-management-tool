import React,{Component} from 'react';
import axios from 'axios';//


export default class Feedback extends Component{//
 constructor(props){//
   super(props);//

   this.state = {//
     emps:[]//
   };//
 }//


componentDidMount(){//
  this.retrieveEmps();//
}//

retrieveEmps(){//
  axios.get("/emps").then(res =>{//
    if(res.data.success){//
    this.setState({//
      emps:res.data.existingEmps//
    });//
    console.log(this.state.emps);//
  }//

  });//
}//

onDelete = (id)=>{
  axios.delete(`/emps/remove/${id}`).then((res)=>{
    alert("Deleted Successfully");
    this.retrieveEmps();
  })

}



 
  render(){//
    return(//
<div>
<table width="100%">
<thead >
<nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#2B547E'}}>
                <div class="container-fluid">
                <button class="navbar-toggler" type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="navbarNav" aria-controls="navbarNav" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" area-current="page" href="/performance" style={{color:'white'}}>Description</a>
                        </li>

                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" area-current="page" href="/sale" style={{color:'white'}}>All Sales</a>
                        </li>

                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" area-current="page" href="/feedback" style={{color:'white'}}>Feedback</a>
                        </li>

                    </ul>
                </div>


                </div>
            </nav>
</thead>

</table>



      <div className="container">
        <div clasName="row">
        <div className="col-lg-9 mt-2 mb-2">
            <h4 className="saleHeader"><b>All Feedback Details</b></h4>
            </div>


      </div>
      <button className="button button1"><a href="/feedback/create" style={{textDecoration:'none', color:'black'}}><b>+ </b> Create New feedback</a></button>

          <table className="table table-hover" style={{marginTop:'40px'}}> 
            <thead>
              <tr className="tablerow">
                <th scope="col" className="items">ID</th>
                <th scope="col" className="items">Date</th>
                <th scope="col" className="items">Name</th>
                <th scope="col" className="items">Job Position</th>
                <th scope="col" className="items">Mobile Number</th>
                <th scope="col" className="items">Feedback</th>
                <th scope="col" className="items">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.emps.map((emps,index)=>(//return-now ok

                    <tr key={index} >
                        <th scope="row" >{index+1}</th>
                        <td>
                           
                            {emps.date}
                            
                        </td>
                        <td>{emps.name}</td>
                        <td>{emps.jobPosition}</td>
                        <td>{emps.mobile}</td>
                        <td>{emps.feedback}</td>


                        <td >

                        

                          <a className="btn btn-warning" href={`/feedback/edit/${emps._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;Update
                          </a>

                          &nbsp;

                          <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(emps._id)}>
                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                          </a>

                        </td>

                    </tr>

    ))}

            </tbody>

          </table>
            
</div>
      </div>
    )
  }
}

