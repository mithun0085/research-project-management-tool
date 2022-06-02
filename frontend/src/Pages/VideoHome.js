import { Link } from "react-router-dom";
import VideoPlayer from "react-video-js-player"
import { useEffect, useState } from "react";
import React from 'react';
import { Box, Text } from "@chakra-ui/layout";

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
    <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="100px"
        
      >
    <div className="" style={{alignItems:'center', textAlign:'center'}}>
      {videocs?.map((videoc) => (
        <div style={{color:'red', backgroundColor:'#e2e2e2' }} key={videoc._id}>
         <h3>Upload Success</h3>
         <h1 style={{color:'black'}}>
         Video Submission Preview
         </h1>
         <center>
         <VideoPlayer src={videoc.video} width="720"
                    height="420"
          playBackRates={[0.5,1,1.25,1.5,2]}/>
        </center>
          
          <div className="p-2">
            <h3>{videoc.name}</h3>
          </div>
        </div>
      ))}
    </div>
    </Box>
  );
};

export default VideoHome;
