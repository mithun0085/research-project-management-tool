import React,{Component} from 'react';
import axios from 'axios';//


export default class AllSales extends Component{//
 constructor(props){//
   super(props);//

   this.state = {//
     posts:[]//
   };//
 }//


componentDidMount(){//
  this.retrievePosts();//
}//

retrievePosts(){//
  axios.get("/posts").then(res =>{//
    if(res.data.success){//
    this.setState({//
      posts:res.data.existingPosts//
    });//
    console.log(this.state.posts);//
  }//

  });//
}//

onDelete = (id)=>{
  axios.delete(`/post/delete/${id}`).then((res)=>{
    alert("Deleted Successfully");
    this.retrievePosts();
  })

}

filterData(posts,searchKey){
  const result = posts.filter((post)=>
  post.year.includes(searchKey)
  )
this.setState({posts:result})
}

handleSearchArea = (e)=>{
  const searchKey = e.currentTarget.value;

  axios.get("/posts").then(res =>{//
    if(res.data.success){//
      this.filterData(res.data.existingPosts,searchKey)
    }
  });//

}


 
  render(){//
    return(//
<div className="">
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

      
      
        <div clasName="row">
        <div className="col-lg-9 mt-2 mb-2" >
            <h4 className="saleHeader"><b>All Selling Details (LKR.)</b></h4><br></br>
            </div>
            <div >

              <table width="100%">
                <tr>
                <td width="20%">
                    <input
              className="form-control"
              type="search"
              placeholder="Search Year"
              name="searchQuery"
              onChange={this.handleSearchArea}> 
              
              </input>
                    </td>


                  <td width="50%" align="right">
                  &nbsp;   <button className="button2 button2"><a href="/sale/add" style={{textDecoration:'none', color:'white'}}><b>+</b> &nbsp; Create New Sale</a></button>

                  </td>

                </tr>
              </table>

        </div>

      </div>

          <table className="table table-hover" style={{marginTop:'40px'}}> 
            <thead>
              <tr className="tablerow">
                <th scope="col" className="items">ID</th>
                <th scope="col" className="items">year</th>
                <th scope="col" className="items">Jan</th>
                <th scope="col" className="items">Feb</th>
                <th scope="col" className="items">Mar</th>
                <th scope="col" className="items">Apr</th>
                <th scope="col" className="items">May</th>
                <th scope="col" className="items">Jun</th>
                <th scope="col" className="items">Jul</th>
                <th scope="col" className="items">Aug</th>
                <th scope="col" className="items">Sep</th>
                <th scope="col" className="items">Oct</th>
                <th scope="col" className="items">Nov</th>
                <th scope="col" className="items">Dec</th>
                <th scope="col" className="items">Options</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts,index)=>(//return-now ok

                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>
                            <a href={`/sale/post/${posts._id}`} style={{textDecoration:'none'}}>
                            {posts.year}
                            </a>
                        </td>
                        <td>{posts.Jan}</td>
                        <td>{posts.Feb}</td>
                        <td>{posts.Mar}</td>
                        <td>{posts.Apr}</td>
                        <td>{posts.May}</td>
                        <td>{posts.Jun}</td>
                        <td>{posts.Jul}</td>
                        <td>{posts.Aug}</td>
                        <td>{posts.Sep}</td>
                        <td>{posts.Oct}</td>
                        <td>{posts.Nov}</td>
                        <td>{posts.Dec}</td>


                        <td>

                          <a className="btn btn-warning" href={`/sale/edit/${posts._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;Update
                          </a>

                          &nbsp;

                          <a className="btn btn-danger" href="/sale" onClick={()=>this.onDelete(posts._id)}>
                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                          </a>

                        </td>

                    </tr>

    ))}

            </tbody>

          </table>

      </div>
    )
  }
}