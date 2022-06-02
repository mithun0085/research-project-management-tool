import { Link } from "react-router-dom";
import VideoPlayer from "react-video-js-player"
import { useEffect, useState } from "react";
import React from 'react';

const VideoHome = () => {
  const [videocs, setVideocs] = useState();

  useEffect(() => {
    const fetchVideocs = async () => {
      const res = await fetch(`http://localhost:5000/videoc`);
      const data = await res.json();
      setVideocs(data);
    };
    fetchVideocs();
  }, []);

  return (
    <div className="row">
      {videocs?.map((videoc) => (
        <div className="col-md-3 card me-3 mt-2 p-0 mb-2 d-flex" key={videoc._id}>
         
         
          <VideoPlayer src={videoc.video} width="720"
                    height="420"
          playBackRates={[0.5,1,1.25,1.5,2]}/>
      
          
          <div className="p-2">
            <h3>{videoc.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoHome;
