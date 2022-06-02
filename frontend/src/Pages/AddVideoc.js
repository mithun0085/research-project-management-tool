import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from 'react';
import { Box, Text } from "@chakra-ui/layout";


const AddVideoc = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [video, setVideo] = useState([]);
  
  
  const upload = async (e) => {
    try {
      e.preventDefault();
      

      const data = new FormData();

      data.append("name", name);
      
      for (var x = 0; x < video.length; x++) {
        data.append("uploaded_Image", video[x]);
      }
      


      const res = await fetch(`http://localhost:5000/videoc`, {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setName("");
        
        setVideo(null);
        history.replace("/videohome");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
     <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="#e2e2e2"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="100px"
      
      >
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <h1 style={{color:'black'}}>
         Upload Your Final Presentation
         </h1>
      {/* <pre>{file!=null && file.length}</pre> */}
      <form onSubmit={upload} encType="multipart/form-data" >
  <div className="form-group">  
  <input type="text"  placeholder="Group Name" value={name} required
   onChange={e=>{setName(e.target.value)}}
   className="form-control"/>
   </div>
Upload Video
<div className="form-group">
    <input type="file" multiple required filename="uploaded_Image"
     className="form-control-file" 
    onChange={e => {setVideo(e.target.files)}}/>
</div>


  <button className="mt-2" style={{color:'white', backgroundColor:'blue' ,
   margin:'5px', marginColor:'black' , paddingLeft:'10px' , paddingRight:'10px' ,
  paddingTop:'2px' , paddingBottom:'2px'}}
  type="submit" 
  variant="primary"
   size="xlg">
   Upload
   </button>      
  </form>

      {/* <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="video/*"
          name="video"
          onChange={handleChange("video")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="pdf/*"
          name="pdf"
          onChange={handleChange("pdf")}
        />
      </div> */}
      {/* <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div> */}
    </div>
    </Box>
  );
};

export default AddVideoc;