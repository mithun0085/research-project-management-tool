import React,{useState} from "react"
import axios from "axios";
import './Create.css';
import RateReviewIcon from '@material-ui/icons/RateReview';
import {  blue, blueGrey } from '@material-ui/core/colors';
import { lightBlue} from '@material-ui/core/colors';
import { OutlinedInput,TextField } from "@material-ui/core";

export default function CreateRequest(){
    const [groupId,setGroupId]= useState("");
    const [researchField,setResearchField]= useState("");
    const [supervisorName,setSupervisorName]= useState("");
    const [dateRegistered,setDateRegistered]= useState("");
  
    
   
    function sendData(e){
        e.preventDefault();
        const newRequest={
            groupId,
           researchField,
           supervisorName,
            dateRegistered
            
        }

        //getting data from backend
        axios.post("http://localhost:5000/requests/save",newRequest).then(()=>{
            alert("Supervisor requested successfully")
        }).catch((error)=>{
            alert("Requesting failed")
        }) 
    }
    return(
        <div className="container3" align="center">
              <div className="card-form">
                  <form onSubmit={sendData} className="boxAddReview">
                 
                      <div className="row">
                          <div className="col-12">
                              < div className="row" style={{  color: 'blue'}} >
                                 
                                 <center> <h3>Request Supervisors <RateReviewIcon fontSize="large" style={{ color: blue[500]}}/> </h3></center>
                                  
                                  <div className="col-md-12 mb-4">
                                      <div className="form-group">
                                          <OutlinedInput 
                                              multiline minRows={1} id="groupId" placeholder="Enter group id"
                                              required fullWidth variant="outlined"
                                              onChange={(event)=> {setGroupId(event.target.value)}}
                                              inputProps={{style: {padding: 12}}}
                                          />
                                      </div>
                                  </div>
                                  <div className="col-md-12 mb-4">
                                      <div className="form-group">
                                          <OutlinedInput 
                                              multiline minRows={1} id="researchField" placeholder="Enter Research field"
                                              required fullWidth variant="outlined"
                                              onChange={(event)=> {setResearchField(event.target.value)}}
                                              inputProps={{style: {padding: 12}}}
                                          />
                                      </div>
                                  </div>
                                  <div className="col-md-12 mb-4">
                                      <div className="form-group">
                                          <OutlinedInput 
                                              multiline minRows={1} id="supervisorName" placeholder="Enter supervisor name"
                                              required fullWidth variant="outlined"
                                              onChange={(event)=> {setSupervisorName(event.target.value)}}
                                              inputProps={{style: {padding: 12}}}
                                          />
                                      </div>
                                  </div>
                                  <div className="col-md-12 mb-4">
                                        <div className="form-group">
                                            <OutlinedInput 
                                                type="date" id="dateRegistered"
                                                required fullWidth
                                                onChange={(event)=> {setDateRegistered(event.target.value)}}
                                                inputProps={{style: {padding: 12}}}
                                            />
                                        </div>
                                    </div>
                                  
                              </div>
                          </div> 
                      </div>
                      <div className="row">
                          <div className="col-md-12">
                              <div className="form-group">
                                 <center><input className="form-submit-btn" style={{ backgroundColor: lightBlue[600], color: 'white'}}type="submit" value="Add Details "  /></center><br></br>
                                 <center><button type="button" class="btn btn-warning"  ><a href = "/Student/view"  style={{textDecoration:'none', color:'white'}}>View Details</a></button></center><br></br>

                               
                              </div>
                          </div>
                      </div>       
                  </form>                  
              </div>
          </div>               
      )
  }
   
      
      
  
  
        
                                     