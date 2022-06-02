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
    <div className="row">


      
 
                    
      
    
      <hr/>
    
          {submissions?.map((submission) => (
            <div className="col-md-3 card me-3 mt-2 p-0 mb-2 d-flex" key={submission._id}>
             
             
              
          
              <a href={submission.pdf}    style={{color:'blue'}} download>Click to download</a>
              <div className="p-2">
                <h3>{submission.name}</h3>
    
              </div>
              
            </div>
          ))}


        
          <br></br><br></br><br></br><br></br><br></br>
          <button type="button" class="btn btn-success"   style={{float:'right',width:'200px',height:'80px'}}><a href = "/submissionEva2"  style={{textDecoration:'none', color:'white'}}> Evaluate</a></button>
        
        
        
        
        
        
    
    
    
    
      
        </div>
      
      );
    };

export default SubmissionEva;

