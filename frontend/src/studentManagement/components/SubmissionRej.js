import { useState } from "react";
import { useHistory } from "react-router-dom";
import { lightBlue,red} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

import React, { Component }  from 'react';

const SubmissionRej = () => {
  const history = useHistory();
  const [name, setName] = useState("");

  const [pdf, setPdf] = useState([]);
  const [groupId, setGroupId] = useState("");
  const [groupName, setGroupName] = useState("");
  const [researchTopic, setResearchTopic] = useState("");
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
      data.append("groupId", groupId);
      data.append("groupName", groupName);
      data.append("researchTopic", researchTopic);
   
   
      for (var x = 0; x < pdf.length; x++) {
        data.append("uploaded_Image", pdf[x]);
      }


      const res = await fetch(`http://localhost:5000/submission`, {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setName("");
        setGroupId("");
        setGroupName("");
        setResearchTopic("");

      
        setPdf(null);
      
        history.replace("/");
        alert(" Doccument Uploaded  Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Report=()=>{
    history.push(`/student/request`)
}


  return (
    <div style={{ color:"blue" }}>
    {/* <pre>{file!=null && file.length}</pre> */}
    <form onSubmit={upload} encType="multipart/form-data" align="center"><br></br>
    <h2>Doccument Submission</h2>

  <div className="form-group">  
  <input type="text"  placeholder="Name" value={name} required
   onChange={e=>{setName(e.target.value)}}
   className="form-control"/>
   </div><br></br>
   <div className="form-group">  
  <input type="text"  placeholder="Group Id" value={groupId} required
   onChange={e=>{setGroupId(e.target.value)}}
   className="form-control"/>
   </div><br></br>

   <div className="form-group">  
  <input type="text"  placeholder="Group Name" value={groupName} required
   onChange={e=>{setGroupName(e.target.value)}}
   className="form-control"/>
   </div><br></br>

   <div className="form-group">  
  <input type="text"  placeholder="Research Toipc" value={researchTopic} required
   onChange={e=>{setResearchTopic(e.target.value)}}
   className="form-control"/>
   </div><br></br>

   Upload Pdf

<div className="form-group"><br></br>
    <input type="file" multiple required filename="uploaded_Image"
    style={{ backgroundColor: lightBlue[600], color: 'white'}}
     className="form-control-file" 
     
    onChange={e => {setPdf(e.target.files)}}/>
</div><br></br>




  <button className="mt-2" 
  type="submit" 
  variant="primary"
  style={{ backgroundColor: lightBlue[600], color: 'white'}}
   size="lg">
   Upload Files
   
   </button>  

  <br></br><br></br>
   <Button style={{ backgroundColor: lightBlue[600], color: 'white'}}
                        
                        onClick={Report}>
                        Request Supervisors
                    </Button>
                   
                    

     
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
  );
};

export default SubmissionRej;