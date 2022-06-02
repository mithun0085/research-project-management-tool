import { useState } from "react";
import { useHistory } from "react-router-dom";

import React, { Component }  from 'react';


const TopicDeRej = () => {
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


      const res = await fetch(`http://localhost:5000/topicrej`, {
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
    <div >
      {/* <pre>{file!=null && file.length}</pre> */}


<br></br><br></br><br></br>



<div className="backgrund3">
              <div class="col-mb-8 mt-4 mx-auto">
                
                     <center>
                 

  <h1 className="textcenter" style={{marginTop:'5px'}}>Topic Details Document Registration</h1> 

  <hr/>

  <br></br>





      <form onSubmit={upload} encType="multipart/form-data" >
  <div className="form-group">  
  <input type="text"  placeholder="Enter Group ID" style={{width:'700px'}} value={name} required
   onChange={e=>{setName(e.target.value)}}
   className="form-control"/>
   </div>

   <br></br><br></br>
<div className="form-group">
    <input type="file" multiple required filename="uploaded_Image"
     className="form-control-file" 
    onChange={e => {setPdf(e.target.files)}}/>
</div>




  <button className="btm btn-success" 
  type="submit" 
  variant="primary"
   size="lg"  style={{marginTop:'120px',width:'150px',height:'40px',float: 'center'}}>
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
    </center>
    </div>
    </div>
    </div>
  );
};

export default TopicDeRej;