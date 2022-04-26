import React, {Component} from 'react';
import axios from 'axios';

export default class StaffDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            staffes:{}

        };

    }

    componentDidMount(){ 
        const id = this.props.match.params.id;

        axios.get(`/staffs/${id}`).then((res)=>{ 
            if(res.data.success){
                this.setState({
                    staffes:res.data.staff
                });

                console.log(this.state.staffes);
            }

        });
    }
    render(){

        const {name,role,age,gender,email,address,contactNo} = this.state.staffes;
        return(
            
            <div style={{marginTop:'20px'}}>
                <h4>Staff Profile Details</h4>
                
                <hr/>
                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9">{name}</dd>
                    <dt className="col-sm-3">Role</dt>
                    <dd className="col-sm-9">{role}</dd>
                    <dt className="col-sm-3">Age</dt>
                    <dd className="col-sm-9">{age}</dd>
                    <dt className="col-sm-3">Gender</dt>
                    <dd className="col-sm-9">{gender}</dd>
                    <dt className="col-sm-3">Email</dt>
                    <dd className="col-sm-9">{email}</dd>
                    <dt className="col-sm-3">Address</dt>
                    <dd className="col-sm-9">{address}</dd>
                    <dt className="col-sm-3">Contact No</dt>
                    <dd className="col-sm-9">{contactNo}</dd>
                    
                    
               </dl>
             </div>
            
        )
    }
}
