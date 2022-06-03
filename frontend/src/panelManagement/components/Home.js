import { Link } from "react-router-dom";
import VideoPlayer from "react-video-js-player"
import { useEffect, useState } from "react";
import React, { Component }  from 'react';

const Home = () => {
  const [topicrejs, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`http://localhost:5000/topicrej`);
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    


      
<div >
              <div class="col-mb-8 mt-4 mx-auto">
                
                     <center>
                  

  <h1 className="textcenter" style={{marginTop:'5px',fontFamily: 'Fantasy'}}>Topic Details Document Evalution</h1> 
  <button type="button" class="w3-button w3-purple w3-round-xxlarge"   style={{float:'right',width:'200px',height:'80px'}}><a href = "evaluateTopics"  style={{textDecoration:'none', color:'white'}}> Evaluate</a></button>
 
 <br></br> <br></br> <br></br>
  <hr/>


  <div className="row">
   

      {topicrejs?.map((topicrej) => (
        <div className="card bg-light mb-3"key={topicrej._id} style={{marginTop:'5px',fontFamily: 'Fantasy',width:'200px',height:'150px'}}>
         
         
          
      
          <a href={topicrej.pdf}    style={{color:'blue'}} download>Click to download</a>
          <div className="p-2">
            <h3>{topicrej.name}</h3>
          
          </div>
          
        </div>
    
      ))}
     
    
    
    
    
    </div>




    </center>
    </div>
    </div>
  );
};

export default Home;


