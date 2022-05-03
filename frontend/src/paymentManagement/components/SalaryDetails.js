import React, {Component} from 'react';
import axios from 'axios';

export default class SalaryDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            salary:{}

        };

    }

    componentDidMount(){ 
        const id = this.props.match.params.id;

        axios.get(`/salary/${id}`).then((res)=>{ 
            if(res.data.success){
                this.setState({
                    salary:res.data.employee
                });

                console.log(this.state.salary);
            }

        });
    }
    render(){

        const {Paymentid,Basicsalary,OT,Vehicleallowance,Bonus,Insurance,Transport,Netsalary} = this.state.salary;
        return(

            <div className="backgroun3">

 <div style={{marginTop:'20px' }}>
                    <h4 className="textcenter" >Employee Payment Profile</h4>
                
                     <hr/>

                     <img height="300px" width="300px" style={{borderRadius:'50px' , display:'block',marginLeft:'auto', marginRight:'auto'}} src={'/static/images/user.jpg'}/>

                      <p style={{textAlign:'center'}}>Payment ID:  {Paymentid}</p>

                <center>
      
                  
      <table class = "gfg">
          
          <tr>
             < td class="th1">Basic Salary</td>
              <td class = "geeks" class="th1">{Basicsalary}</td>
          </tr>
          
          
          <tr>
             < td class="th1">OT</td>
              <td class = "geeks" class="th1">{OT}</td>
          </tr>
         
         
         
          <tr>
             < td class="th1">Vehicle Allowance</td>
              <td class = "geeks" class="th1">{Vehicleallowance}</td>
          </tr>
         
         
         
          <tr>
             < td class="th1">Bonus</td>
              <td class = "geeks" class="th1">{Bonus}</td>
          </tr>
         
         
         
          <tr>
             < td class="th1">Insurance</td>
              <td class = "geeks" class="th1">{Insurance}</td>
          </tr>
         
         
         
          <tr>
             < td class="th1">Transport</td>
              <td class = "geeks" class="th1">{Transport}</td>
          </tr>
         
         
         
         <tr>
             < td class="th1" style={{backgroundColor:' 	silver'}}>Net Salary</td>
              <td class = "geeks" class="th1" style={{backgroundColor:' 	silver'}}>{Netsalary}</td>
          </tr>
         
         
         </table>
        </center>
     
        </div></div>

                     
)
    }
   }
     
     





















