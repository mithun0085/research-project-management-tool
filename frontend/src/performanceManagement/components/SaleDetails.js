import React,{Component} from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Line } from "react-chartjs-2";
import jsPDF from "jspdf";




export default class Summary extends Component{
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

 GeneratePDF =()=>{
     var doc = new jsPDF("p", "pt", "a4", "pdf");
     doc.html(document.querySelector('#content'),{
            callback: function(pdf){
                pdf.save("mypdf.pdf");
            }
     });
 };

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                    console.log(this.state.post);
            }
        });
    }
    render(){



            const{year,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec}= this.state.post

        return(
<div>
<table width="100%">
<thead >
<nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#2B547E'}}>
                <div class="container-fluid">
                <button class="navbar-toggler" type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="navbarNav" aria-controls="navbarNav" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" area-current="page" href="/performance" style={{color:'white'}}>Description</a>
                        </li>

                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" area-current="page" href="/sale" style={{color:'white'}}>All Sales</a>
                        </li>

                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" area-current="page" href="/feedback" style={{color:'white'}}>Feedback</a>
                        </li>

                    </ul>
                </div>


                </div>
            </nav>
</thead>

</table>




        <div className="container" style={{alignContent:"center"}} >


            <table id="content" width="300">
                <thead>
                     <h1 >{year} Summary</h1>
                     
                </thead>
                <tbody >
                    
                    <tr>
                        <td>
                        <div style={{margin:'20px'}}>
                        

                <hr/>

                <dl className="row">
                    <dt className="col-sm-3">Jan</dt>
                    <dd className="col-sm-9">{Jan}</dd>

                    <dt className="col-sm-3">Feb</dt>
                    <dd className="col-sm-9">{Feb}</dd>

                    <dt className="col-sm-3">Mar</dt>
                    <dd className="col-sm-9">{Mar}</dd>

                    <dt className="col-sm-3">Apr</dt>
                    <dd className="col-sm-9">{Apr}</dd>

                    <dt className="col-sm-3">May</dt>
                    <dd className="col-sm-9">{May}</dd>

                    <dt className="col-sm-3">Jun</dt>
                    <dd className="col-sm-9">{Jun}</dd>

                    <dt className="col-sm-3">Jul</dt>
                    <dd className="col-sm-9">{Jul}</dd>

                    <dt className="col-sm-3">Aug</dt>
                    <dd className="col-sm-9">{Aug}</dd>

                    <dt className="col-sm-3">Sep</dt>
                    <dd className="col-sm-9">{Sep}</dd>

                    <dt className="col-sm-3">Oct</dt>
                    <dd className="col-sm-9">{Oct}</dd>

                    <dt className="col-sm-3">Nov</dt>
                    <dd className="col-sm-9">{Nov}</dd>

                    <dt className="col-sm-3">Dec</dt>
                    <dd className="col-sm-9">{Dec}</dd>


                </dl>
                
            </div> </td>

                    </tr>
                    
                    <tr>
                    <td>
                        
                        <hr/>
                        <h4><i>This is the summry of the sales of over all Year</i></h4>
                        <p>In this page - number format</p>
                        <p>Next page - Bar Chart & Line Chart </p>
                        <h4><i>By Clicking 'Create pdf Button'</i></h4>
                        <p>this is the summry of the sales of over all Year</p>
                        <p>this is the summry of the sales of over all Year</p>
                        <p>this is the summry of the sales of over all Year</p>
                        <p>this is the summry of the sales of over all Year</p>

                        <hr/>
                    </td></tr>
                    
                    <tr> <td>
                    <h3>{year} sale summary (Bar chart) </h3>
                   
                <div>
               
<Bar
          data={{
              labels:[],
              datasets:[
              
              {
                  label:"Monthly Sales",
                  data:{Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec},
                  backgroundColor:['green']
              },
          ],
          }}
          height={300}
          width={300}
          options={{

              maintainAspectRatio: false,
          }}
      />

  </div>
                </td></tr>

                <tr>
                    <td>
                    <hr/>
                    <h3>{year} sale summary (Line chart)</h3>

                    <div>

               
<Line
          data={{
              labels:[],
              datasets:[
              
              {
                  label:"Monthly Sales",
                  data:{Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec},
                  backgroundColor:'green',
                  borderWidth: '2',
                  borderColor:'green'
        

              },
          ],
          }}
          height={300}
          width={600}
          options={{

              maintainAspectRatio: false,
          }}
      />

  </div>

                    </td>
                </tr>
                <tr>

                    <td>
                    
                    </td>

                </tr>
                </tbody>

            </table>

            <button className="btn3 button3" onClick={this.GeneratePDF} type="primary">Create pdf</button>
            
            </div>

</div>


        )
    }
}

