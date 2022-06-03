import { useReactToPrint } from "react-to-print";
import React,{useRef} from 'react'
import axios from 'axios';
import  {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import { green} from '@material-ui/core/colors';
import GetAppIcon from '@material-ui/icons/GetApp';
import './Report.css';
import { useHistory } from 'react-router-dom';

export default function StudentReport(){
    const [Student, setstudent] = useState([]);
  const history=useHistory()

   

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
   
   
  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:5000/students")
        .then((res) => {
          setstudent(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudents();
  }, []);
  
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

   
    return(
      
            <div class="container1">
                <div class="row">
                    <div class="col-md-12">
                        <div ref={componentRef}>
                            <div className="container1" align='center'>
                                <div className="box-payment-report1">
                                    <div className="row">
                                        <div className="col-xl-2" align='center'>
                                            <img src="/images/Logo.png" width="150px" alt="logo" />
                                        </div>
                                        <div className="col-xl-8" align='center'style={{  color: 'blue'}}>
                                            <h3>Research Project Management Tool</h3>
                                            <h6 >Digitally Generated Group Details</h6>
                                        </div>
                                        <div className="col-xl-2" align='right'>
                                            <p>{date}/{month}/{year}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <br />
                                    <div className="prescription px-4">
                                        <div className="col-4">
                                            <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between" style={{  color: 'blue'}}>
                                                <h2>Groups</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                        </div>
                                    </div>
                                    <div className="blue-table ">
                                        <div className="blue-table, box-view-prescription">
                                            <table>
                                                <thead >
                                                    <tr>
                                                        
                                                        <th style={{ textAlign: 'center' }}>Group ID</th>
                                                        <th style={{ textAlign: 'center' }}>Group Name</th>
                                                        <th style={{ textAlign: 'center' }}>research Topic</th>
                                                        <th style={{ textAlign: 'center' }}>supervisor Name</th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{ textAlign: 'center' }}>
                                                        {Student.map((Students,key) => (
                                                    <tr key={key}>
                                                        
                                                                               
                                                        <td>
                                                        {Students.groupId}
                                                        </td>
                                                        <td >
                                                        {Students.groupName}
                                                        </td>
                                                        <td>
                                                        {Students.researchTopic}
                                                         </td>                      
                                                      
                                                        <td >
                                                        {Students.supervisorName}
                                                        </td>


                                                    </tr> 
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                      
                                    </div>
                                    <div className="mt-5" align='right'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <center><div className="w-25 p-3" align='center'>
                        <Button
                        className="print__button"
                        variant="contained"
                        color="secondary"
                        endIcon={<GetAppIcon />}
                        style={{ backgroundColor: green[700], color: 'white'}}
                        disableElevation
                        onClick={handlePrint}
                        fullWidth
                    >
                        Download Details 
                    </Button>
                    </div></center>
                </div>
            </div>
        </div> 
        
     
    )
} 