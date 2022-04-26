import React, {Component} from 'react';
import axios from 'axios';

export default class SupplierDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            supplieres:{}

        };

    }


    componentDidMount(){ 
        const id = this.props.match.params.id;

        axios.get(`/suppliers/${id}`).then((res)=>{ 
            if(res.data.success){
                this.setState({
                    supplieres:res.data.supplier
                });

                console.log(this.state.supplieres);
            }

        });
    }
    render(){

        const {s_name,s_id,nic,phone,email,i_code} = this.state.supplieres;
        return(
            
            <div style={{marginTop:'20px'}}>
                <h4>Your Supplier Details</h4>
                
                <hr/>
                <dl className="row">
                    <dt className="col-sm-3">Supplier Name</dt>
                    <dd className="col-sm-9">{s_name}</dd>
                    <dt className="col-sm-3">Supplier Id</dt>
                    <dd className="col-sm-9">{s_id}</dd>
                    <dt className="col-sm-3">NIC</dt>
                    <dd className="col-sm-9">{nic}</dd>
                    <dt className="col-sm-3">ContactNo</dt>
                    <dd className="col-sm-9">{phone}</dd>
                    <dt className="col-sm-3">E-Mail</dt>
                    <dd className="col-sm-9">{email}</dd>
                    <dt className="col-sm-3">Item Code</dt>
                    <dd className="col-sm-9">{i_code}</dd>
                    
                    
               </dl>
             </div>
            
        )
    }
}
