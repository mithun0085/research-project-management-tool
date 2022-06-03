import React, { useState, useEffect } from "react";
import axios from "axios";
import './View.css'
import EditIcon from '@material-ui/icons/Edit';
import {IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import { useHistory } from 'react-router-dom';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { green,lightBlue} from '@material-ui/core/colors';
import GetAppIcon from '@material-ui/icons/GetApp';

function View() {
    const config = {
        headers: { 
            "content-Type": "application/json"
        }
    };  
  const [Request, setrequest] = useState([]);
  const history=useHistory()

  useEffect(() => {
    function getRequests() {
      axios
        .get("http://localhost:5000/requests")
        .then((res) => {
          setrequest(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getRequests();
  }, []);
  

  async function deleteRequest(id){
    await axios.delete(`http://localhost:5000/requests/delete/${id}`,config).then(()=>{
        setrequest( Request.filter(element => element._id !== id))
        alert("deleted successfully")
    }).catch((error)=>{
        alert("deleting  failed");
    })    
}
const re=()=>{
    history.push(`/student/add`)
}
  return (
   
    <div className="blue-table"><br></br><br></br>
     <h2>Requesting List</h2>
        <table className="table100 ver1 m-b-110">
            <thead>                    
                <tr>
                <th> group id</th>
               <th>research Field</th>
                <th>supervisor name</th>
                <th>date</th>
                <th>Actions</th>
               
            </tr>
        </thead>
        <tbody>
            {Request.map((Requests, key) => (
            <tr key={key}>
               <td>
                {Requests.groupId}
                </td> 
                <td>
                    {Requests.researchField}
                </td>  
                <td>
                    {Requests.supervisorName}
                </td>
                <td>
                    {Requests.dateRegistered}
                </td>
                
               
                <td>  
                            <div style={{verticalAlign:'middle'}}> 
                                                               
                                <IconButton  onClick={()=>  deleteRequest(Requests._id)}>
                                    <DeleteIcon fontSize="large" style={{color:red[500]}} />
                                </IconButton>  
                            </div>                         
                      </td>    
                                
                         
            </tr>     
        ))}
   </tbody>
</table>
<br></br>
<center> <Button style={{ backgroundColor: lightBlue[600], color: 'white'}}
                        
                        onClick={re}>
                        Request Supervisors
                    </Button>
                    </center>
      
</div>

)
}

export default View;