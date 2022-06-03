import React,{useState} from "react"
import axios from "axios";
import './CreateGroup.css';
import RateReviewIcon from '@material-ui/icons/RateReview';
import {  blue, blueGrey } from '@material-ui/core/colors';
import { lightBlue} from '@material-ui/core/colors';
import { OutlinedInput } from "@material-ui/core";
export default function CreateGroup(){
    const [groupId,setGroupId]= useState("");
    const [groupName,setGroupName]= useState("");
    const [totalMembers,setTotalMembers]= useState("");
    const [leaderId,setLeaderId]= useState("");
    const [member1Id,setMember1Id]= useState("");
    const [member2Id,setMember2Id]= useState("");
    const [member3Id,setMember3Id]= useState("");
    const [phone,setPhone]= useState("");
    const [email,setEmail]= useState("");
    const [researchTopic,setResearchTopic]= useState("");
    const [supervisorName,setSupervisorName]= useState("");
    const [dateRegistered,setDateRegistered]= useState("");
    

    function sendData(e){
        e.preventDefault();
        const newGroup={
            groupId,
            groupName,
            totalMembers,
            leaderId,
            member1Id,
            member2Id,
            member3Id,
            phone,
            email,
            researchTopic,
            supervisorName,
            dateRegistered
            
            
        }

        //getting data from backend
        axios.post("http://localhost:5000/students/save",newGroup).then(()=>{
            alert("Student Group created")
        }).catch((error)=>{
            alert("creating failed")
        }) 
    }
    
    return(
      <div className="container2" align="center">
            <div className="card-form">
                <form onSubmit={sendData} className="boxAddReview1" >
                    <div className="row">
                        <div className="col-12">
                            < div className="row" style={{  color: 'blue'}} >
                               
                                <center> <h3>Create Student Groups <RateReviewIcon fontSize="large" style={{ color: blue[500]}}/> </h3></center>
                                <div className="col-md-12 mb-4">
                                    <div className="form-group">
                                         <OutlinedInput 
                                            id="groupId" placeholder="Enter group id"
                                            required fullWidth variant="outlined"
                                            onChange={(event)=> {setGroupId(event.target.value)}}
                                            inputProps={{style: {padding: 12}}}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-4">
                                    <div className="form-group">
                                         <OutlinedInput 
                                            id="groupName" placeholder="Enter group name"
                                            required fullWidth variant="outlined"
                                            onChange={(event)=> {setGroupName(event.target.value)}}
                                            inputProps={{style: {padding: 12}}}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-4">
                                    <div className="form-group">
                                        <OutlinedInput
                                         style={{  color: 'red'}}  

                                           id="totalMembers" placeholder="Maximum number of members should be 4"
                                            required fullWidth variant="outlined"
                                            onChange={(event)=> {setTotalMembers(event.target.value)}}
                                            inputProps={{style: {padding: 12}}}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12 mb-4">
                                    <div className="form-group">
                                        <OutlinedInput 
                                             id="leaderId" placeholder="Enter leader id"
                                            required fullWidth variant="outlined"
                                            onChange={(event)=> {setLeaderId(event.target.value)}}
                                            inputProps={{style: {padding: 12}}}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12 mb-4">
                                    <div className="form-group">
                                        <OutlinedInput 
                                             id="member1Id" placeholder="Enter member1 id"
                                            required fullWidth variant="outlined"
                                            onChange={(event)=> {setMember1Id(event.target.value)}}
                                            inputProps={{style: {padding: 12}}}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-4">
                                    <div className="form-group">
                                        <OutlinedInput 
                                             id="member2Id" placeholder="Enter member2 id"
                                            required fullWidth variant="outlined"
                                            onChange={(event)=> {setMember2Id(event.target.value)}}
                                            inputProps={{style: {padding: 12}}}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-4">
                                    <div className="form-group">
                                        <OutlinedInput 
                                             id="member3Id" placeholder="Enter member3 id"
                                            required fullWidth variant="outlined"
                                            onChange={(event)=> {setMember3Id(event.target.value)}}
                                            inputProps={{style: {padding: 12}}}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-4">
                                        <div className="form-group">
                                            <OutlinedInput 
                                                
                                                type="tel" id="phone" placeholder="phone" required fullWidth
                                                onChange={(event)=> {setPhone(event.target.value)}}
                                                inputProps={{style: {padding: 12}, pattern: "[0-9]{10}"}}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <div className="form-group">
                                            <OutlinedInput  
                                                type="email" id="email" placeholder="Email" 
                                                required fullWidth
                                                onChange={(event)=> {setEmail(event.target.value)}}
                                                inputProps={{style: {padding: 12}}}
                                            />
                                        </div>
                                    </div>
                                <div className="col-md-12 mb-4">
                                    <div className="form-group">
                                        <OutlinedInput  
                                            id="researchTopic" placeholder="Enter research topic"
                                            required fullWidth variant="outlined"
                                            onChange={(event)=> {setResearchTopic(event.target.value)}}
                                            inputProps={{style: {padding: 12}}}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-4">
                                    <div className="form-group">
                                        <OutlinedInput 
                                            id="supervisorName" placeholder="Enter supervisor Name"
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
                              <center> <input className="form-submit-btn" style={{ backgroundColor: lightBlue[600], color: 'white'}}type="submit" value="Create Student Group "  /></center><br></br>
                              <center><button type="button" class="btn btn-warning"  ><a href = "/Student/get"  style={{textDecoration:'none', color:'white'}}>Click here</a></button></center>

                            </div>
                        </div>
                    </div>       
                </form>                  
            </div>
        </div>               
    )
}
 
    
    


      
                                   