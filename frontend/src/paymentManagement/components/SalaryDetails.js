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

        const {Name,Basicsalary,OT,Vehicleallowance,Totaladdition,Transport,Personaltel,Totaldeduction,Netsalary} = this.state.salary;
        return(

            <div className="background3">
                
                  <div style={{marginTop:'20px' }}>
                    <h4 className="textcenter" style={{marginTop:'40px' ,backgroundColor:'black' , color:'white', padding:'30px'}}>Employee Payment Profile</h4>
                
                     <hr/>
                      <table className="table table-hover" style={{marginTop:'40px'}}> 
                        <tr>
                            
                    
                          <th scope="col"style={{textAlign:'right'}}>Employee Name :</th>
                          <th>{Name}</th>
                        </tr>
                      </table>

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
             < td class="th1" style={{backgroundColor:'	gainsboro'}}>Total Addition</td>
              <td class = "geeks" class="th1"  style={{backgroundColor:'	gainsboro'}}>{Totaladdition}</td>
          </tr>
         
         
         
          <tr>
             < td class="th1">Transport Charges</td>
              <td class = "geeks" class="th1">{Transport}</td>
          </tr>
         
         
         
          <tr>
             < td class="th1">Telephone Charges</td>
              <td class = "geeks" class="th1">{Personaltel}</td>
          </tr>
         
         
         
          <tr>
             < td class="th1"  style={{backgroundColor:'	gainsboro'}}>Total Deduction</td>
              <td class = "geeks" class="th1"  style={{backgroundColor:'	gainsboro'}}>{Totaldeduction}</td>
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
     
     
     







































