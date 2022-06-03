import { Link } from "react-router-dom";
import VideoPlayer from "react-video-js-player"
import { useEffect, useState } from "react";
import React, { Component }  from 'react';
import { Box, Text } from "@chakra-ui/layout";

const UploadDocS = () => {
  const [uploadDocs, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`http://localhost:5000/uploadDoc`);
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
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

      <hr/>
    
          {uploadDocs?.map((uploadDoc) => (
            <div style={{color:'red', backgroundColor:'#e2e2e2' }} key={uploadDoc._id}>
             
         <h1 style={{color:'black'}}>
         Documents From Admin
         </h1>
              <center>
             
              
          
              <a href={uploadDoc.pdf}    style={{color:'blue'}} download>Click to download</a>
              <div className="p-2">
                <h3>{uploadDoc.name}</h3>
    
              </div>
              </center>
            </div>
          ))}


        
        
        
        
        
        
        
    
    
    
    
      
        </div>
        </Box>
      
      );
    };

export default UploadDocS;

