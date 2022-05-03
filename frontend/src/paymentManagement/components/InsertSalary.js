import React, {Component} from 'react';
import axios from 'axios';



const initialState ={
    
    Paymentid:"",
        Basicsalary:"",
        OT:"",
        Vehicleallowance:"",
        Bonus:"",
        Insurance:"",
        Transport:"",
        Netsalary:"",
        Iderror:"",
        Basicerror:"",
        Oterror:"",
        Vehierror:"",
        Bonuserro:"",
        Inserror:"",
        Transerror:""


}





export default class InsertSalary extends Component{


constructor(props){
    super(props);
    this.state=initialState;
        
    

    
}

    handleInputChange = (e) =>{ 
         const isCheckbox = e.target.type==="checkbox";

         this.setState({
             [e.target.name]:isCheckbox
             ?e.target.Checked
             :e.target.value
        
    });
    };

    validate=()=>{
        let Iderror="";
        let Basicerror="";
        let Oterror="";
        let Vehierror="";
        let Bonuserror="";
        let Inserror="";
        let Transerror="";
      



        if(!this.state.Paymentid){
            Iderror ='*Payment ID cannot be Null';
        }
        if(!this.state.Basicsalary){
            Basicerror ='*Basic Salary cannot be Null';
        }
        if(!this.state.OT){
            Oterror ='*OT charges cannot be Null';
        }
        if(!this.state.Vehicleallowance){
            Vehierror ='*Vehicle Allowance cannot be Null';
        }

        
        if(!this.state.Bonus){
            Bonuserror ='*Bonus Charges cannot be Null';
        }
        if(!this.state.Insurance){
            Inserror ='*Insurance Charges cannot be Null';
        }

        if(!this.state.Transport){
            Transerror ='*Transport Charges cannot be Null';
        }

       

        if ( Iderror || Basicerror || Oterror ||  Vehierror||  Bonuserror || Inserror||Transerror   ){
            this.setState({ Iderror , Basicerror ,Oterror ,  Vehierror,  Bonuserror ,Inserror, Transerror  });
            return false;
        }

        return true;
    };

    


    calculate =(e)=>{

        this.setState({Netsalary:parseInt(this.state.Basicsalary)+parseInt(this.state.OT)+parseInt(this.state.Vehicleallowance)+
        parseInt(this.state.Bonus)-parseInt(this.state.Insurance)-parseInt(this.state.Transport)});
        e.preventDefault();
    }
    
    
    
    onSubmit = (e) =>{ 

        e.preventDefault();
        const isValid =this.validate();
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
         if(isValid){

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
         this.setState(initialState);
        }
    };
    
    
    render(){
        return(



            <div className="backgrund3">
              <div class="col-mb-8 mt-4 mx-auto">
                
                    
                      


                  <center>
                  <div class="card"  >
  
  <div class="container" >

  <h1 className="textcenter" style={{marginTop:'40px'}}>Insert Salary</h1>
    <form className="needs-validation" noValidate>
                        


<div style={{color:'red',textAlign:'left'}}>{this.state.Iderror}</div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'15px'}} class="form-label" ></label>
                            <input type="text" className="form-control"  placeholder="Enter Payment ID (eg:EP01892389)" name="Paymentid" 
                            value={this.state.Paymentid} onChange={this.handleInputChange}/>
                        </div>
                      
                        <div style={{color:'red',textAlign:'left'}}>{this.state.Basicerror}</div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Basic Salary" name="Basicsalary" 
                            value={this.state.Basicsalary} onChange={this.handleInputChange}/>
                        </div>
                        
                        <div style={{color:'red',textAlign:'left'}}>{this.state. Oterror}</div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter OT Hour Charges" name="OT" 
                            value={this.state.OT} onChange={this.handleInputChange}/>
                        </div> 


                        <div style={{color:'red',textAlign:'left'}}>{this.state.Vehierror}</div>
                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Vehicle Allowance" name="Vehicleallowance" 
                            value={this.state.Vehicleallowance} onChange={this.handleInputChange}/>
                        </div>
                         
                        <div style={{color:'red',textAlign:'left'}}>{this.state.Bonuserror}</div>
                         
                         <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Bonus Charges" name="Bonus" 
                            value={this.state.Bonus} onChange={this.handleInputChange}/>
                        </div>
                        <div style={{color:'red',textAlign:'left'}}>{this.state. Inserror}</div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Insurance charges" name="Insurance" 
                            value={this.state.Insurance} onChange={this.handleInputChange}/>
                        </div>
                        
                        <div style={{color:'red',textAlign:'left'}}>{this.state.  Transerror }</div>
                        <div className="mb-3" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Transport Charges" name="Transport" 
                            value={this.state.Transport} onChange={this.handleInputChange}/>
                        </div>

                        <div  style={{color:'green',textAlign:'left'}}>
                            <h>Do not keep the fields empty/ if there is no value please enter 0</h>
                            </div>


                         <div>
                       <button className="btn btn-primary"  type="submit" style={{marginTop:'10px',width:'150px',height:'100px',float: 'left'}} onClick={this.calculate}> 
                      
                        &nbsp;Calculate Netsalary
                        <h2>{this.state.Netsalary}</h2>
                       </button>  
                      
                    
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

