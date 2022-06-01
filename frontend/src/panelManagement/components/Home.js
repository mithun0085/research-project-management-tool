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
    <div className="row">


      


  <hr/>

      {topicrejs?.map((topicrej) => (
        <div className="col-md-3 card me-3 mt-2 p-0 mb-2 d-flex" key={topicrej._id}>
         
         
          
      
          <a href={topicrej.pdf}    style={{color:'blue'}} download>Click to download</a>
          <div className="p-2">
            <h3>{topicrej.name}</h3>

          </div>
          
        </div>
      ))}
      <button type="button" class="btn btn-success"   style={{float:'right',width:'200px',height:'80px'}}><a href = "evaluateTopics"  style={{textDecoration:'none', color:'white'}}> Evaluate</a></button>
    
    
    
    
    





</div>
  );
};

export default Home;


