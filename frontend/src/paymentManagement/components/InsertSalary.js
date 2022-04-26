import React, {Component} from 'react';
import axios from 'axios';


export default class InsertSalary extends Component{


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
        
         axios.post("/salary/save",data).then((res) =>{ 
             if(res.data.success){ 
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
    
    render(){
        return(



            <div className="backgrund3">
              <div class="col-mb-8 mt-4 mx-auto">
                  <h1 className="textcenter" style={{marginTop:'40px'}}>Insert Salary</h1>
                    
                      




    <form className="needs-validation" noValidate>
                        



                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">Payment ID</label>
                            <input type="text" className="form-control" name="Paymentid" 
                            value={this.state.Paymentid} onChange={this.handleInputChange}/>
                        </div>


                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">Basic Salary</label>
                            <input type="text" className="form-control" name="Basicsalary" 
                            value={this.state.Basicsalary} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">OT Hours</label>
                            <input type="text" className="form-control" name="OT" 
                            value={this.state.OT} onChange={this.handleInputChange}/>
                        </div> 

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">Vehicle Allowane</label>
                            <input type="text" className="form-control" name="Vehicleallowance" 
                            value={this.state.Vehicleallowance} onChange={this.handleInputChange}/>
                        </div>
                         
                         
                         
                         <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">Bonus</label>
                            <input type="text" className="form-control" name="Bonus" 
                            value={this.state.Bonus} onChange={this.handleInputChange}/>
                        </div>


                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">Insurance</label>
                            <input type="text" className="form-control" name="Insurance" 
                            value={this.state.Insurance} onChange={this.handleInputChange}/>
                        </div>
                        

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">Transport</label>
                            <input type="text" className="form-control" name="Transport" 
                            value={this.state.Transport} onChange={this.handleInputChange}/>
                        </div>

                        
                       <div>
                       <button className="btn btn-success"  type="submit" style={{marginTop:'15px'}} onClick={this.calculate}> 
                       <i className="far fa-check-square"></i>
                        &nbsp;Calculate Netsalary
                       </button>  
                      
                       <h>{this.state.Netsalary}</h>
                       </div>
                       <div>
                       <center>
                       <button className="btn btn-success"  type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                       <i className="far fa-check-square"></i>
                        &nbsp;save
                       </button>
                      </center>
                      </div>
                    </form>
                    </div>
                    </div>
                   
        )
    }
}
