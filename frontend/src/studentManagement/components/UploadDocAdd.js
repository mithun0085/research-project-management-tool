import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Text } from "@chakra-ui/layout";

import React, { Component }  from 'react';

const UploadDocAdd = () => {
  const history = useHistory();
  const [name, setName] = useState("");

  const [pdf, setPdf] = useState([]);
  // const handleChange = (e) => {
  //   const newStateFiles = [...files, e.target.files];
  //   setFiles(newStateFiles);
  // };
  const upload = async (e) => {
    try {
      e.preventDefault();
      // let formData = new FormData();
      // for (let i = 0; i < files.length; i++) {
      //   formData.append("files", files[i]);
      // }
      // formData.append("name", name);
      // formData.append("video", data.video);
      // formData.append("pdf", data.pdf);

      const data = new FormData();

      data.append("name", name);
   
      for (var x = 0; x < pdf.length; x++) {
        data.append("uploaded_Image", pdf[x]);
      }


      const res = await fetch(`http://localhost:5000/uploadDoc`, {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setName("");
      
        setPdf(null);
      
        history.replace("/");
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
         Upload Documents
         </h1>
      <form onSubmit={upload} encType="multipart/form-data" >
  <div className="form-group">  
  <input type="text"  placeholder="Document Name" value={name} required
   onChange={e=>{setName(e.target.value)}}
   className="form-control"/>
   </div>


<div className="form-group">
    <input type="file" multiple required filename="uploaded_Image"
     className="form-control-file" 
    onChange={e => {setPdf(e.target.files)}}/>
</div>




  <button className="mt-2" style={{color:'white', backgroundColor:'blue' ,
   margin:'5px', marginColor:'black' , paddingLeft:'10px' , paddingRight:'10px' ,
  paddingTop:'2px' , paddingBottom:'2px'}}
  type="submit" 
  variant="primary"
   size="lg">
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

export default UploadDocAdd;