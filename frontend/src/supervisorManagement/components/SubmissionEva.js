import { Link } from "react-router-dom";
import VideoPlayer from "react-video-js-player"
import { useEffect, useState } from "react";
import React, { Component }  from 'react';

const SubmissionEva = () => {
  const [submissions, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`http://localhost:5000/submission`);
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
<div >
              <div class="col-mb-8 mt-4 mx-auto">
                
                     <center>
                  

  <h1 className="textcenter" style={{marginTop:'5px',fontFamily: 'Fantasy'}}>Assignment Documents Evalution</h1> 


  <hr/>
  <button type="button" class="w3-button w3-light-blue w3-round-xxlarge"   style={{float:'right',width:'200px',height:'80px'}}><a href = "/viewMSchems2"   style={{textDecoration:'none', color:'white', color:'indigo',fontWeight:'bold'}}> Marking Schemes</a></button>
 


  
        
        <br></br><br></br><br></br><br></br>
        <button type="button"  class="w3-button w3-indigo w3-round-xxlarge"  style={{float:'right',width:'200px',height:'80px'}}><a href = "/submissionEva2"  style={{textDecoration:'none', color:'white',fontWeight:'bold'}}> Evaluate</a></button>
      














  <div className="row">
    
          {submissions?.map((submission) => (
            <div  className="card bg-light mb-3" key={submission._id}    style={{marginTop:'5px',fontFamily: 'Fantasy',width:'200px',height:'150px'}}>
             
             
              
          
              <a href={submission.pdf}    style={{color:'blue'}} download>Click to download</a>
              <div className="p-2">
                <h3>{submission.name}</h3>
    
              </div>
              
            </div>
          ))}


        
        
        
          </div>




    </center>
    </div>
    </div>
      );
    };

export default SubmissionEva;


