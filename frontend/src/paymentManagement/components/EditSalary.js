import React, {Component} from 'react';
import axios from 'axios';



export default class EditSalary extends Component{



    constructor(props){
        super(props);
        this.state={ 
            Paymentid:"",
            Basicsalary:"",
            OT:"",
            Vehicleallowance:"",
            Bonus:"",
            Insurance:"",
            Transport:"",
            Netsalary:""
        
    
        }
    }
    
        handleInputChange = (e) =>{ 
             const {name,value} = e.target; 
    
             this.setState({
                 ...this.state,
            [name]:value
            
        })
        }


        
    calculate =(e)=>{

        this.setState({Netsalary:parseInt(this.state.Basicsalary)+parseInt(this.state.OT)+parseInt(this.state.Vehicleallowance)+
        parseInt(this.state.Bonus)-parseInt(this.state.Insurance)-parseInt(this.state.Transport)});
        e.preventDefault();
    }
        
        onSubmit = (e) =>{ 
            
            e.preventDefault();
            const id = this.props.match.params.id;

            const{Paymentid,Basicsalary,OT,Vehicleallowance,Bonus,Insurance,Transport,Netsalary} = this.state;

         const data = {
             Paymentid:Paymentid,
             Basicsalary:Basicsalary,
             OT:OT,
             Vehicleallowance:Vehicleallowance,
             Bonus:Bonus,
             Insurance:Insurance,
             Transport:Transport,
             Netsalary:Netsalary
    
             }
    
             console.log(data)
            
             axios.put(`/salary/update/${id}`,data).then((res) =>{ 
                 if(res.data.success){ 
                     alert("Payment Updated Successfully")
                     this.setState( 
                         {
                            Paymentid:"",
                            Basicsalary:"",
                            OT:"",
                            Vehicleallowance:"",
                            Bonus:"",
                            Insurance:"",
                            Transport:"",
                            Netsalary:""
                           
                             
                         }
                     )
                 }
             })
        }


    componentDidMount(){ 
        const id = this.props.match.params.id;

        axios.get(`/salary/${id}`).then((res)=>{ 
            if(res.data.success){
                this.setState({
                  Paymentid:res.data.employee.Paymentid,
                   Basicsalary:res.data.employee.Basicsalary,
                   OT:res.data.employee.OT,
                   Vehicleallowance:res.data.employee.Vehicleallowance,
                   Bonus:res.data.employee.Bonus,
                   Insurance:res.data.employee.Insurance,
                   Transport:res.data.employee.Transport,
                  Netsalary:res.data.employee.Netsalary
                });

                console.log(this.state.salary);
            }

        });
    }


    render(){
        return(



            <div className="backgrund3">
              <div class="col-mb-8 mt-4 mx-auto">
                
                    
                      


                  <center>
                  <div class="card"  >
  
  <div class="container" >

  <h1 className="textcenter" style={{marginTop:'40px'}}>Insert Salary</h1>
    <form className="needs-validation" noValidate>
                        



                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'15px'}} class="form-label" ></label>
                            <input type="text" className="form-control"  placeholder="Enter Payment ID (eg:EP01892389)" name="Paymentid" 
                            value={this.state.Paymentid} onChange={this.handleInputChange}/>
                        </div>


                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Basic Salary" name="Basicsalary" 
                            value={this.state.Basicsalary} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter OT Hour Charges" name="OT" 
                            value={this.state.OT} onChange={this.handleInputChange}/>
                        </div> 

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Vehicle Allowance" name="Vehicleallowance" 
                            value={this.state.Vehicleallowance} onChange={this.handleInputChange}/>
                        </div>
                         
                         
                         
                         <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Bonus Charges" name="Bonus" 
                            value={this.state.Bonus} onChange={this.handleInputChange}/>
                        </div>


                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Insurance charges" name="Insurance" 
                            value={this.state.Insurance} onChange={this.handleInputChange}/>
                        </div>
                        

                        <div className="mb-3" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Transport Charges" name="Transport" 
                            value={this.state.Transport} onChange={this.handleInputChange}/>
                        </div>


                         <div>
                       <button className="btn btn-primary"  type="submit" style={{marginTop:'10px',width:'100px',height:'100px',float: 'left'}} onClick={this.calculate}> 
                      
                        &nbsp;Calculate Netsalary
                       </button>  
                      
                       <h1>{this.state.Netsalary}</h1>
                       </div>
                       <div>
                       <center>
                       <button className="btn btn-success"  type="submit" style={{marginTop:'150px',width:'200px',height:'45px'}} onClick={this.onSubmit}>
                      
                        &nbsp;save
                       </button>
                      </center>
                      </div>
                    </form>



                   
</div></div>

              
</center>             
                   
                   
                   
                     </div>
                    </div>
                   
        )
    }
}