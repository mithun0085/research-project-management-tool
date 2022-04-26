import React, {Component} from 'react';
import axios from 'axios';


export default class InsertSupplierPayment extends Component{


constructor(props){
    super(props);
    this.state={ 
        Suppliername:"",
        Supplierid:"",
       
         
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
}

    handleInputChange = (e) =>{ 
         const {name,value} = e.target; 

         this.setState({
             ...this.state,
        [name]:value
        
    })
    }
    
    onSubmit = (e) =>{ 

        e.preventDefault();
         const{Suppliername,Supplierid,Price1,Quantity1,Amount1,Price2,Quantity2,Amount2,Price3,Quantity3,Amount3,
            Price4,Quantity4,Amount4,Price5,Quantity5,Amount5,Price6,Quantity6,Amount6,Total} = this.state;

         const data = {
            
             Suppliername:Suppliername,
             Supplierid:Supplierid,
             
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

         console.log(data)
        
         axios.post("/supplier/save",data).then((res) =>{ 
             if(res.data.success){
                 this.setState( 
                     {
                         Suppliername:"",
                        Supplierid:"",
                     
                        
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
    }
    
    
    render(){
        return(
            <div className="background4">
              <div class="col-mb-8 mt-4 mx-auto">
                  <h1 className="textcenter" style={{marginTop:'40px' ,backgroundColor:'black' , color:'white', padding:'30px'}}>Insert Supplier Payment</h1>
                    <form className="needs-validation" noValidate>

                    <div class="input-group mb-3">
                         <span class="input-group-text" id="basic-addon1"  style={{backgroundColor:'dodgerblue'}}>Supplier Name</span>
                         <input type="text" class="form-control"  aria-label="Suppliername" aria-describedby="basic-addon1" name="Suppliername"  value={this.state.Suppliername} onChange={this.handleInputChange}/>
                        </div>


                      <div class="input-group mb-3">
                         <span class="input-group-text" id="basic-addon1" style={{backgroundColor:'dodgerblue'}}>Supplier ID</span>
                         <input type="text" class="form-control"  aria-label="Supplierid" aria-describedby="basic-addon1" name="Supplierid"  value={this.state.Supplierid} onChange={this.handleInputChange}/>
                        </div>
                      

                        
                      



                       <div class="input-group mb-3">
                       <input type="text" class="form-control"   placeholder="Price"aria-label="Price1" name="Price1"  value={this.state.Price1} onChange={this.handleInputChange}/>
                        <span class="input-group-text">&</span>
                       <input type="text" class="form-control" placeholder="Quantity" aria-label="Quantity1"  name="Quantity1"  value={this.state.Quantity1} onChange={this.handleInputChange}/>
                        <span class="input-group-text"></span>
                       </div>

                       <div class="input-group mb-3">
                       <input type="text" class="form-control"   placeholder="Price"aria-label="Price2" name="Price2"  value={this.state.Price2} onChange={this.handleInputChange}/>
                        <span class="input-group-text">&</span>
                       <input type="text" class="form-control" placeholder="Quantity" aria-label="Quantity2"  name="Quantity2"  value={this.state.Quantity2} onChange={this.handleInputChange}/>
                        <span class="input-group-text"></span>
                       </div>

                       <div class="input-group mb-3">
                       <input type="text" class="form-control"   placeholder="Price"aria-label="Price3" name="Price3"  value={this.state.Price3} onChange={this.handleInputChange}/>
                        <span class="input-group-text">&</span>
                       <input type="text" class="form-control" placeholder="Quantity" aria-label="Quantity3"  name="Quantity3"  value={this.state.Quantity3} onChange={this.handleInputChange}/>
                        <span class="input-group-text"></span>
                       </div>

                       <div class="input-group mb-3">
                       <input type="text" class="form-control"   placeholder="Price"aria-label="Price4" name="Price4"  value={this.state.Price4} onChange={this.handleInputChange}/>
                        <span class="input-group-text">&</span>
                       <input type="text" class="form-control" placeholder="Quantity" aria-label="Quantity4"  name="Quantity4"  value={this.state.Quantity4} onChange={this.handleInputChange}/>
                        <span class="input-group-text"></span>
                       </div>

                       <div class="input-group mb-3">
                       <input type="text" class="form-control"   placeholder="Price"aria-label="Price5" name="Price5"  value={this.state.Price5} onChange={this.handleInputChange}/>
                        <span class="input-group-text">&</span>
                       <input type="text" class="form-control" placeholder="Quantity" aria-label="Quantity5"  name="Quantity5"  value={this.state.Quantity5} onChange={this.handleInputChange}/>
                        <span class="input-group-text"></span>
                       </div>

                       <div class="input-group mb-3">
                       <input type="text" class="form-control"   placeholder="Price"aria-label="Price6" name="Price6"  value={this.state.Price6} onChange={this.handleInputChange}/>
                        <span class="input-group-text">&</span>
                       <input type="text" class="form-control" placeholder="Quantity" aria-label="Quantity6"  name="Quantity6"  value={this.state.Quantity6} onChange={this.handleInputChange}/>
                        <span class="input-group-text"></span>
                       </div>
                        <center>
                       <button className="btn btn-primary"  type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                       <i className="far fa-check-square"></i>
                        &nbsp;save
                       </button>
                       </center>
                    </form>
                    </div>
                    </div>
        )
    }
}