import React, { useState, useEffect } from "react";
import axios from "axios";
import './DisplayGroup.css'
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import { green,lightBlue} from '@material-ui/core/colors';
import GetAppIcon from '@material-ui/icons/GetApp';
import {IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import { useHistory } from 'react-router-dom';
import { red } from '@material-ui/core/colors';


function DisplayGroup() {
    const config = {
        headers: { 
            "content-Type": "application/json"
        }
    };  
  const [Student, setstudent] = useState([]);
  const history=useHistory()

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:5000/students")
        .then((res) => {
          setstudent(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudents();
  }, []);
  



  async function deleteGroup(id){
    await axios.delete(`http://localhost:5000/students/delete/${id}`,config).then(()=>{
        setstudent( Student.filter(element => element._id !== id))
        alert("deleted group successfully")
    }).catch((error)=>{
        alert("deleting  failed");
    })    
}

function update(id){
    history.push(`/students/update/${id}`)
}

const report=()=>{
    history.push(`/student/report`)
}
 
const details=()=>{
    history.push(`/student/submissionRej`)
}
  return (
   
    <div className="blue-table"><br></br><br></br>
     <h2>Group List</h2>
        <table className="table100 ver1 m-b-110">
            <thead>                    
                <tr>
                <th> group id</th>
                <th>group name</th>
                <th>total members</th>
                <th> leader id</th>
                <th> member1 id</th>
                <th> member2 id</th>
                <th> member3 id</th>
                <th>phone</th>
                <th>email</th>
                <th>research topic</th>
                <th>supervisor name</th>
                <th>date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {Student.map((Students, key) => (
            <tr key={key}>
               <td>
                {Students.groupId}
                </td> 
                <td>
                    {Students.groupName}
                </td>  
                <td>
                    {Students.totalMembers}
                </td>
                <td>
                    {Students.leaderId}
                </td>
                <td>
                    {Students.member1Id}
                </td>
                <td>
                    {Students.member2Id}
                </td>
                <td>
                    {Students.member3Id}
                </td>
               
               
                <td>
                    {Students.phone}
                </td>
                <td>
                    {Students.email}
                </td>
               
                <td>
                    {Students.researchTopic}
                </td>
                <td>
                    {Students.supervisorName}
                </td>
                <td>
                    {Students.dateRegistered}
                </td>
                <td>  
                            <div style={{verticalAlign:'middle'}}> 
                                <IconButton className="mx-4" onClick={()=>  update(Students._id)}>
                                    <EditIcon />
                                </IconButton>                                  
                                <IconButton  onClick={()=>  deleteGroup(Students._id)}>
                                    <DeleteIcon fontSize="large" style={{color:red[500]}} />
                                </IconButton>  
                            </div> 

                                         
                      </td>               
            </tr>   
              
        ))}
   </tbody>
</table>   <br></br> 

<center> 
                    <Button style={{ backgroundColor: lightBlue[600], color: 'white'}}
                        endIcon={<GetAppIcon />}
                        onClick={report}>
                        Generate Report
                    </Button>

                    
                </center>  <br></br>
               <center> <Button style={{ backgroundColor: lightBlue[600], color: 'white'}}
                        endIcon={<GetAppIcon />}
                        onClick={details}>
                        Submit Research Doccuments
                    </Button>
                    </center>

       
</div>


)
}

export default DisplayGroup;