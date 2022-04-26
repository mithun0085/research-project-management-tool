import React, {Component} from 'react';
import axios from 'axios';
import "./Home.css"


export default class Home extends Component {
constructor(props){
  super(props);

  this.state={
    posts:[]
  };

}

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("/postsSer").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts//me posts variable eka uda this.state yata use krpu ekami
      });

      console.log(this.state.posts)
    }

  });
}

onDelete = (id) =>{

  axios.delete(`/postsSer/delete/${id}`).then((res) =>{
    alert("Deleted Successfully!!");
    this.retrievePosts();
  })
}

filterData(posts,searchKey){
   
  const result = posts.filter((post) =>
  post.delivery_Date.includes(searchKey)||
  post.location.toLowerCase().includes(searchKey)||
  post.customerID.includes(searchKey)
  )

  this.setState({posts:result})
}

handleSearchArea = (e) =>{

   const searchKey = e.currentTarget.value;

   axios.get("/postsSer").then(res =>{
    if(res.data.success){
      
      this.filterData(res.data.existingPosts,searchKey)
    }
  });
}

  render(){
    return(
      <div className="container">  
        <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
        <br/><h4 className="ab"><b>Past Delivery Orders</b></h4><br/>
          </div>
         <div className="col-lg-3 mt-2 mb-2">
           <input
           className="form-control"
           type="search"
           placeholder="search"
           name="searchQue"
           onChange={this.handleSearchArea}>
        
             </input>          
             </div>
             </div>
        <table className="table">
          <thead>
          <tr>
              <th scope="col">DeliveryID</th>
              <th scope="col">Cart ID</th>
              <th scope="col">Delivery Location</th>
              <th scope="col">Delivery Date</th>
              <th scope="col">customer ID</th>
              <th scope="col">Action</th>
           </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>{
            
              return <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/postService/${posts._id}`} style={{textDecoration:"none"}}>
                    {posts.cartID}
                    </a>
                    </td>
                <td>{posts.location}</td>
                <td>{posts.delivery_Date}</td>
                <td>{posts.customerID}</td>
                <td>
                    <a className="btn btn-warning" href={`/editService/${posts._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Update
		                 </a>
		                 &nbsp;

                    <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
		                </a>
                </td>

              </tr>
            })}
          </tbody>
        </table>
        <button className="btn btn-success"><a href="/addService" style={{textDecoration:"none", color:"white"}}> Create New Delivery </a></button>
                  
      </div>
    )
}
}