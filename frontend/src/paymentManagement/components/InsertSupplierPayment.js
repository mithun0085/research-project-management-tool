import React, {Component} from 'react';
import axios from 'axios';



const initialState ={


    Paymentid:"",
       
         
    Price1:"",
    Quantity1:"",
    Amount1:"",
    
    Price2:"",
    Quantity2:"",
    Amount2:"",
    
    Price3:"",
    Quantity3:"",
    Amount3:"",
   
    Price4:"",
    Quantity4:"",
    Amount4:"",
    
    Price5:"",
    Quantity5:"",
    Amount5:"",
    
    Price6:"",
    Quantity6:"",
    Amount6:"",
    
    Total:"",
    paymentidError:""


}
export default class InsertSupplierPayment extends Component{



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
        let paymentidError="";


        if(!this.state.Paymentid){
            paymentidError ='*Payment ID cannot be Null';
        }


        if ( paymentidError){
            this.setState({ paymentidError });
            return false;
        }

        return true;
    };



    calculate =(e)=>{

        this.setState({Total:(parseInt(this.state.Price1)*parseInt(this.state.Quantity1))+(parseInt(this.state.Price2)*
        parseInt(this.state.Quantity2))+(parseInt(this.state.Price3)*parseInt(this.state.Quantity3))+(parseInt(this.state.Price4)*parseInt(this.state.Quantity4))+
        +(parseInt(this.state.Price5)*parseInt(this.state.Quantity5))+(parseInt(this.state.Price6)*parseInt(this.state.Quantity6))
    });
        e.preventDefault();
    }


    
    calculate1 =(e)=>{

        this.setState({Amount1:parseInt(this.state.Price1)*parseInt(this.state.Quantity1)
    });
        e.preventDefault();
    }



    calculate2 =(e)=>{

        this.setState({Amount2:parseInt(this.state.Price2)*parseInt(this.state.Quantity2)
    });
        e.preventDefault();
    }



    calculate3 =(e)=>{

        this.setState({Amount3:parseInt(this.state.Price3)*parseInt(this.state.Quantity3)
    });
        e.preventDefault();
    }



    calculate4 =(e)=>{

        this.setState({Amount4:parseInt(this.state.Price4)*parseInt(this.state.Quantity4)
    });
        e.preventDefault();
    }


    calculate5 =(e)=>{

        this.setState({Amount5:parseInt(this.state.Price5)*parseInt(this.state.Quantity5)
    });
        e.preventDefault();
    }


    calculate6 =(e)=>{

        this.setState({Amount6:parseInt(this.state.Price6)*parseInt(this.state.Quantity6)
    });
        e.preventDefault();
    }



    
   
   
    onSubmit = (e) =>{ 

        e.preventDefault();
        const isValid =this.validate();
         const{Paymentid,Price1,Quantity1,Amount1,Price2,Quantity2,Amount2,Price3,Quantity3,Amount3,
            Price4,Quantity4,Amount4,Price5,Quantity5,Amount5,Price6,Quantity6,Amount6,Total} = this.state;

         const data = {
            
           
            Paymentid:Paymentid,
             
             Price1:Price1,
             Quantity1:Quantity1,
             Amount1:Amount1,
            
             Price2:Price2,
             Quantity2:Quantity2,
             Amount2:Amount2,
             
             Price3:Price3,
             Quantity3:Quantity3,
             Amount3:Amount3,
            
             Price4:Price4,
             Quantity4:Quantity4,
             Amount4:Amount4,
            
             Price5:Price5,
             Quantity5:Quantity5,
             Amount5:Amount5,
            
             Price6:Price6,
             Quantity6:Quantity6,
             Amount6:Amount6,
            
             Total:Total

         }
         if(isValid){

         console.log(data)
        
         axios.post("/supplier/save",data).then((res) =>{ 
             if(res.data.success){
                 this.setState( 
                     {
                         
                        Paymentid:"",
                     
                        
                        Price1:"",
                        Quantity1:"",
                         Amount1:"",
         
                         Price2:"",
                         Quantity2:"",
                         Amount2:"",
         
                         Price3:"",
                         Quantity3:"",
                         Amount3:"",
        
                        Price4:"",
                        Quantity4:"",
                        Amount4:"",
         
                        Price5:"",
                        Quantity5:"",
                        Amount5:"",
         
                        Price6:"",
                        Quantity6:"",
                        Amount6:"",
         
                        Total:""
        
                        
                        
                    }
                    )
                }
            })
            this.setState(initialState);
           }
       };
    
    
    render(){
        return(
            <div >
              <div class="col-mb-8 mt-4 mx-auto">
                  <center>

              <div class="card"  >
  
  <div class="container" >
                  <h1 className="textcenter" >Insert Supplier Payment</h1>


                  
  <center>
                    <form className="needs-validation" noValidate>

                   

                      <table>
                      <div style={{color:'red',textAlign:'left'}}>{this.state.paymentidError}</div>     
                      <div class="input-group mb-3">
                         <span class="input-group-text" id="basic-addon1" style={{backgroundColor:'Cyanblue'}}>Payment ID</span>
                         <input type="text" class="form-control"  aria-label="Paymentid" aria-describedby="basic-addon1" name="Paymentid"  value={this.state.Paymentid} onChange={this.handleInputChange}/>
                        </div>
                      
                       
                        
                      

                    
                       <div class="input-group mb-3">
                       <input type="text" class="form-control"   placeholder="Price"aria-label="Price1" name="Price1"  value={this.state.Price1} onChange={this.handleInputChange}/>
                        <span class="input-group-text"></span>
                       <input type="text" class="form-control" placeholder="Quantity" aria-label="Quantity1"  name="Quantity1"  value={this.state.Quantity1} onChange={this.handleInputChange}/>
                       <span class="input-group-text"></span>
                       <div>
                       <button className="btn3 button3"  type="submit" style={{marginTop:'15px'}} onClick={this.calculate1}> 
                     
                        &nbsp;Calculate Amount1
                        <h3>{this.state.Amount1}</h3>
                       </button>  
                       
                      
                    
                      
                       </div>
                       </div>
                     
                       
                 
                    
                       <div class="input-group mb-3">
                       <input type="text" class="form-control"   placeholder="Price"aria-label="Price2" name="Price2"  value={this.state.Price2} onChange={this.handleInputChange}/>
                        <span class="input-group-text"></span>
                       <input type="text" class="form-control" placeholder="Quantity" aria-label="Quantity2"  name="Quantity2"  value={this.state.Quantity2} onChange={this.handleInputChange}/>
                        <span class="input-group-text"></span>
                       <div>
                       <button className="btn3 button3"  type="submit" style={{marginTop:'15px'}} onClick={this.calculate2}> 
                      
                        &nbsp;Calculate Amount2
                        <h3 >{this.state.Amount2}</h3>
                       </button>  
                     
                        
                      
                      
                      </div>
                    
                       </div>


                    

                       <div class="input-group mb-3">
                       <input type="text" class="form-control"   placeholder="Price"aria-label="Price3" name="Price3"  value={this.state.Price3} onChange={this.handleInputChange}/>
                        <span class="input-group-text"></span>
                       <input type="text" class="form-control" placeholder="Quantity" aria-label="Quantity3"  name="Quantity3"  value={this.state.Quantity3} onChange={this.handleInputChange}/>
                        <span class="input-group-text"></span>
                        <div>
                       <button className="btn3 button3"  type="submit" style={{marginTop:'15px'}} onClick={this.calculate3}> 
                     
                        &nbsp;Calculate Amount3
                          <h3>{this.state.Amount3}</h3>
                       </button>  
                      
                      
                       </div>
                       </div>

                       <div class="input-group mb-3">
                       <input type="text" class="form-control"   placeholder="Price"aria-label="Price4" name="Price4"  value={this.state.Price4} onChange={this.handleInputChange}/>
                        <span class="input-group-text"></span>
                       <input type="text" class="form-control" placeholder="Quantity" aria-label="Quantity4"  name="Quantity4"  value={this.state.Quantity4} onChange={this.handleInputChange}/>
                        <span class="input-group-text"></span>
                        <div>
                       <button className="btn3 button3"  type="submit" style={{marginTop:'15px'}} onClick={this.calculate4}> 
                  
                        &nbsp;Calculate Amount4
                        <h3>{this.state.Amount4}</h3>
                       </button>  
                      
                      
                       </div>
                       </div>

                       <div class="input-group mb-3">
                       <input type="text" class="form-control"   placeholder="Price"aria-label="Price5" name="Price5"  value={this.state.Price5} onChange={this.handleInputChange}/>
                        <span class="input-group-text"></span>
                       <input type="text" class="form-control" placeholder="Quantity" aria-label="Quantity5"  name="Quantity5"  value={this.state.Quantity5} onChange={this.handleInputChange}/>
                        <span class="input-group-text"></span>
                        <div>
                       <button className="btn3 button3"  type="submit" style={{marginTop:'15px'}} onClick={this.calculate5}> 
                       
                        &nbsp;Calculate Amount5
                       <h3>{this.state.Amount5}</h3>
                       </button>  
                      
                  
                       </div>
                       </div>

                       <div class="input-group mb-3">
                       <input type="text" class="form-control"   placeholder="Price"aria-label="Price6" name="Price6"  value={this.state.Price6} onChange={this.handleInputChange}/>
                        <span class="input-group-text"></span>
                       <input type="text" class="form-control" placeholder="Quantity" aria-label="Quantity6"  name="Quantity6"  value={this.state.Quantity6} onChange={this.handleInputChange}/>
                        <span class="input-group-text"></span>
                        <div>
                       <button className="btn3 button3"  type="submit" style={{marginTop:'15px'}} onClick={this.calculate6}> 
                       
                        &nbsp;Calculate Amount6
                        <h3>{this.state.Amount6}</h3>
                       </button>  

                      
  
                       </div>
                       </div>
                     
                      

                       </table>

                       <div  style={{color:'green',textAlign:'left'}}>
                            <h>Do not keep the fields empty/ if there is no value please enter 0</h>
                            </div>

                       <div>
                       <button className="btn btn-primary"  type="submit" style={{marginTop:'15px',width:'200px',height:'100px',float: 'left'}} onClick={this.calculate}> 
                    
                        &nbsp;Calculate Total
                        <h2>{this.state.Total}</h2>
                       </button>  
                      
                      
                       </div>
                       
                        <center>
                       <button className="btn btn-success"  type="submit" style={{marginTop:'150px',width:'150px'}} onClick={this.onSubmit}>
                           
                       <i className="far fa-check-square"></i>
                        &nbsp;save
                       </button>
                       </center>
                    </form>
                    </center>
                    </div>
                    </div>
                    </center>
                    </div>
                    </div>
                    
        )
    }
}