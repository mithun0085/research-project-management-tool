import React, {Component} from 'react';
import axios from 'axios';


export default class CreateStaff extends Component{


constructor(props){
    super(props);
    this.state={ 
        name:"",
        role:"",
        age:"",
        gender:"",
        email:"",
        address:"",
        contactNo:"",
        password:"",
        emailError:"",
        nameError:""
    }
}

    handleInputChange = (e) =>{ 
         const {name,value} = e.target; 

         this.setState({
             ...this.state,
        [name]:value
        
    })
    }
    
    validate = ()=>{
        let emailError="";
        let nameError="";
        
        if (this.state.name.includes('@', "1", "2", "3", "4", "5", "6", "7", "8","9","0")){
            nameError='Invalid name. Please use words only, Do not use symbols and numbers';
            }
        if (!this.state.email.includes('@')){
                emailError='Invalid email. Valid email must have @ symbol';
        }
        if (emailError || nameError){
            this.setState({emailError, nameError});
            return false;
        }
        return true;
    }
    onSubmit = (e) =>{ 

        e.preventDefault();
         const isValid = this.validate();
        const{name,role,age,gender,email,address,contactNo,password} = this.state;

         const data = {
            name:name,
            role:role,
            age:age,
            gender:gender,
            email:email,
            address:address,
            contactNo:contactNo,
            password:password

         }
         if (isValid) {
         console.log(data)
        
         axios.post("/staffs/save",data).then((res) =>{ 
             if(res.data.success){ 
                 this.setState( 
                     {
                        name:"",
                        role:"",
                        age:"",
                        gender:"",
                        email:"",
                        address:"",
                        contactNo:"",
                        password:""
                        
                         
                     }
                 )
             }
         })
        }
    }
    
    render(){
        return(
            
              <div class="col-mb-8 mt-4 mx-auto">
                  <h1 className="h3 mb-3 front-weight-normal">Insert New Staff Member Details</h1>
                    <form style={{textDecoration:'none',backgroundColor:'#EEEEEE',borderBlockColor:'black',float: 'center',
  paddingLeft: '20rem',
  paddingRight:'20rem',
  marginTop: '8px',
  marginRight: '16px',
  background: '#F8F9F9 ',
  fontSize: '17px',
  border: 'none',
  cursor: 'pointer',}}  className="needs-validation" noValidate>
                        
                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"><b>Name</b></label>
                            <input type="text" className="form-control" name="name" 
                            value={this.state.name} onChange={this.handleInputChange}/>
                         <div style={{ fontSize:12, color:"red"}}>
                               {this.state.nameError}
                                
                                </div>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <b>User</b><label style={{marginBottom:'5px'}} class="form-label"><b>Role</b></label>
                            <input type="text" className="form-control" name="role" 
                            value={this.state.role} onChange={this.handleInputChange}/>
                        </div> 

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"><b>Age</b></label>
                            <input type="text" className="form-control" name="age" 
                            value={this.state.age} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"><b>Gender</b></label>
                            <input type="text" className="form-control" name="gender" 
                            value={this.state.gender} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"><b>Email</b></label>
                            <input type="text" className="form-control" name="email" 
                            value={this.state.email} onChange={this.handleInputChange}/>

                         
                           <div style={{ fontSize:12, color:"red"}}>
                               {this.state.emailError}
                                
                                </div>
                                  
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"><b>Address</b></label>
                            <input type="text" className="form-control" name="address" 
                            value={this.state.address} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"><b>ContactNo</b></label>
                            <input type="text" className="form-control" name="contactNo" 
                            value={this.state.contactNo} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"><b>Admin Declared Password</b></label>
                            <input type="text" className="form-control" name="password" 
                            value={this.state.password} onChange={this.handleInputChange}/>
                        </div>
                
                       <button className="btn btn-success"  type="submit" style={{fontSize:'1.25rem' ,float: 'center' ,paddingLeft: '1.4rem',paddingRight: '2rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white',}} onClick={this.onSubmit}>
                       <i className="far fa-check-square"></i>
                        &nbsp;save
                       </button>

                    </form>
                    </div>
        )
    }
}