import React, {Component} from 'react';
import axios from 'axios';


export default class EditStaff extends Component{



    constructor(props){
        super(props);
        this.state={ 
        name:"",
        role:"",
        age:"",
        gender:"",
        email:"",
        address:"",
        contactNo:""
        
    
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
            const id = this.props.match.params.id;

             const{name,role,age,gender,email,address,contactNo} = this.state;
    
             const data = {
                name:name,
                role:role,
                age:age,
                gender:gender,
                email:email,
                address:address,
                contactNo:contactNo
    
             }
    
             console.log(data)
            
             axios.put(`/staffs/update/${id}`,data).then((res) =>{ 
                 if(res.data.success){ //success 
                     alert("Staffs Updated Successfully")
                     this.setState( 
                         {
                        name:"",
                        role:"",
                        age:"",
                        gender:"",
                        email:"",
                        address:"",
                        contactNo:""
                             
                         }
                     )
                 }
             })
        }


    componentDidMount(){ 
        const id = this.props.match.params.id;

        axios.get(`/staffs/${id}`).then((res)=>{ 
            if(res.data.success){
                this.setState({
                   
                    name:res.data.staff.name,
                    role:res.data.staff.role,
                    age:res.data.staff.age,
                    gender:res.data.staff.gender,
                    email:res.data.staff.email,
                    address:res.data.staff.address,
                    contactNo:res.data.staff.contactNo
                });

                console.log(this.state.staff);
            }

        });
    }


    render(){
        return(
            
            <div class="col-mb-8 mt-4 mx-auto">
                  <h1 className="h3 mb-3 front-weight-normal">Update User Details</h1>
                    <form style={{textDecoration:'none',backgroundColor:'#EEEEEE',borderBlockColor:'black',float: 'center',
  paddingLeft: '20rem',
  paddingRight:'20rem',
  marginTop: '8px',
  marginRight: '16px',
  background: '#F8F9F9 ',
  fontSize: '17px',
  border: 'none',
  cursor: 'pointer',}} className="needs-validation" noValidate>
                        
                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"><b>Name</b></label>
                            <input type="text" className="form-control" name="name" 
                            value={this.state.name} onChange={this.handleInputChange}/>
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
                
                       <button className="btn btn-success"  type="submit" style={{fontSize:'1.25rem' ,float: 'center' ,paddingLeft: '1.4rem',paddingRight: '2rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white',}} onClick={this.onSubmit}>
                       <i className="far fa-check-square"></i>
                        &nbsp;save
                       </button>

                    </form>
                    </div>
        )
    }
}