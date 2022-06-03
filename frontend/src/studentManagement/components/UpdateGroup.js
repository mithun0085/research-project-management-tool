import React, { Component } from "react";
import axios from "axios";

export default class EditMark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupId: "",
      groupName:"",
      leaderId:"",
      totalMembers:"",
      phone:"",
      researchTopic:"",
      supervisorName:""
     
    
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { groupId,groupName,leaderId,totalMembers,phone,researchTopic,supervisorName} = this.state;

    const data = {
      groupId: groupId,
      groupName:groupName,
      leaderId:leaderId,
      totalMembers:totalMembers,
      phone:phone,
      researchTopic: researchTopic,
      supervisorName:supervisorName
     
     
    };
    console.log(data);

    axios.put(`http://localhost:5000/stupdate/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Student Updated Successfully");
        this.setState({
            groupId: "",
            groupName:"",
            leaderId:"",
            totalMembers:"",
            phone:"",
            researchTopic:"",
            supervisorName:""
            
        
          
        });
      }
    }); 
  };

  componentDidMount(){
  
    const id = this.props.match.params.id ;

    axios.get(`http://localhost:5000/studentget/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          groupId:res.data.post.groupId,
          groupName:res.data.post.groupName,
          leaderId:res.data.post.leaderId,
          totalMembers:res.data.post.totalMembers,
          phone:res.data.post.phone, 
          researchTopic:res.data.post.researchTopic,
          supervisorName:res.data.post.supervisorName
          
          
          
        });
        console.log(this.state);
      }
    }); 
}

  render() {
    return (
      <div>
        <br/>
        <center>
          <form
            style={{
              width: "550px",
              padding: "20px",
              background:" #eee6ff",
              borderRadius: "40px",
              borderLeft: "6px solid  #9666ff"
             
            }}
          >
            
                <center>
                  <h3 style={{ fontFamily: "Abel" }}>Update Group Details </h3>
                </center>
              
                  <label style={{ fontSize: "20px" }}>Group id : </label>
                  <br />
                  <input
                    class="form-control"
                    id="groupId"
                    type="text"
                    name='groupId'
                    value={this.state.groupId}
                    onChange={this.handleInputChange}
                  />
              
                  <label style={{ fontSize: "20px" }}>Group name : </label>
                  <br />
                  <input
                    class="form-control"
                    id="groupName"
                    type="text"
                    name='groupName'
                    value={this.state.groupName}
                    onChange={this.handleInputChange}
                  />
                  <label style={{ fontSize: "20px" }}>leader  id : </label>
                  <br />
                  <input
                    class="form-control"
                    id="leaderId"
                    type="text"
                    name='leaderId'
                    value={this.state.leaderId}
                    onChange={this.handleInputChange}
                  />
                  <label style={{ fontSize: "20px" }}>total members : </label>
                  <br />
                  <input
                    class="form-control"
                    id="totalMembers"
                    type="text"
                    name='totalMembers'
                    value={this.state.totalMembers}
                    onChange={this.handleInputChange}
                  />
                  <label style={{ fontSize: "20px" }}>contact number: </label>
                  <br />
                  <input
                    class="form-control"
                    id="phone"
                    type="text"
                    name='phone'
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                  />

                <label style={{ fontSize: "20px" }}>research Topic: </label>
                  <br />
                  <input
                    class="form-control"
                    id="researchTopic"
                    type="text"
                    name='researchTopic'
                    value={this.state.researchTopic}
                    onChange={this.handleInputChange}
                  />
                  
                  <label style={{ fontSize: "20px" }}> supervisor Name : </label>
                  <br />
                  <input
                    class="form-control"
                    id="supervisorName"
                    type="text"
                    name='supervisorName'
                    value={this.state.supervisorName}
                    onChange={this.handleInputChange}
                  />
                  <br />
               
                 
               
         
              <center><button type="submit"onClick={this.onSubmit}class="btn btn-primary">Update</button></center><br></br>
              
              <center><button type="button" class="btn btn-warning"  ><a href = "/Student/get"  style={{textDecoration:'none', color:'white'}}>View Updates</a></button></center>
            
          </form>
        </center>
        <br/>
      </div>
    );
  }
}