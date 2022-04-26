import React, {Component} from 'react';
import axios from 'axios';


export default class CreateSupplier extends Component{


constructor(props){
    super(props);
    this.state={ 
        s_name:"",
        s_id:"",
        nic:"",
        phone:"",
        email:"",
        i_code:""

    

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
         const{s_name,s_id,nic,phone,email,i_code} = this.state;

         const data = {
            s_name:s_name,
            s_id:s_id,
            nic:nic,
            phone:phone,
            email:email,
            i_code:i_code

         }

         console.log(data)
        
         axios.post("/suppliers/save",data).then((res) =>{ 
             if(res.data.success){ 
                 this.setState( 
                     {
                        s_name:"",
                        s_id:"",
                        nic:"",
                        phone:"",
                        email:"",
                        i_code:""
                        
                         
                     }
                 )
             }
         })
    }
    
    render(){
        return(
            
              <div class="col-mb-8 mt-4 mx-auto">
                  <center>
                  <h1 className="h3 mb-3 front-weight-normal">Insert Supplier Details</h1>
                  </center>
                    <form className="needs-validation" noValidate>
            
                        
                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">Supplier-Name</label>
                            <input type="text" className="form-control" name="s_name" 
                            value={this.state.s_name} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">Supplier-Id</label>
                            <input type="text" className="form-control" name="s_id" 
                            value={this.state.s_id} onChange={this.handleInputChange}/>
                        </div> 

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">NIC</label>
                            <input type="text" className="form-control" name="nic" 
                            value={this.state.nic} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">ContactNo</label>
                            <input type="text" className="form-control" name="phone" 
                            value={this.state.phone} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">E-Mail</label>
                            <input type="text" className="form-control" name="email" 
                            value={this.state.email} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">Item-Code</label>
                            <input type="text" className="form-control" name="i_code" 
                            value={this.state.i_code} onChange={this.handleInputChange}/>
                        </div>

                      
                
                       <button className="btn btn-success"  type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                       <i className="far fa-check-square"></i>
                        &nbsp;save
                       </button>

                    </form>
                    </div>
        )
    }
}