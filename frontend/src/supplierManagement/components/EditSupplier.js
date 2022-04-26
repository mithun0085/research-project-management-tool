import React, {Component} from 'react';
import axios from 'axios';


export default class EditSupplier extends Component{



    constructor(props){
        super(props);
        this.state={ //methana thiyana nam thama pahala values walata dnnth oni
            s_name:"",
            s_id:"",
            nic:"",
            phone:"",
            email:"",
            i_code:""
        
    
        }
    }
    
        handleInputChange = (e) =>{ //pahala action walata adla method body eka , meken wenne ape basic salary wage ekaka change ekak krpu gaman state eka update kr gannwa aluthen tyna value ekata
             const {name,value} = e.target; //form control eke dena variables thama name ekai value ekai
    
             this.setState({
                 ...this.state,
            [name]:value
            
        })
        }
        
        onSubmit = (e) =>{ //onsubmit button eka click krth wena eka enam table ekata(db)aluth values add wenn oni
            
            e.preventDefault();
            const id = this.props.match.params.id;//api specific post ekak edit kr ganna hnda id ekak oni

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
            
             axios.put(`/suppliers/update/${id}`,data).then((res) =>{ //salary update wena eke path eka dila ape data ekata pass krnwa,backticks walin liya ganne $ekath ekka id ekak deddi
                 if(res.data.success){ //success nam
                     alert("Suppliers Updated Successfully")
                     this.setState( //ape data tika default values widihata initialize kr ganwa
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


    componentDidMount(){ //predifined method
        const id = this.props.match.params.id;//salary eke id eka id kiyana variable ekata assign kr gannwa

        axios.get(`/suppliers/${id}`).then((res)=>{ //id eka pass una nam,methana localhost gaga liya liya inna one na proxy ekak hadagena inna nisa,backend url ekata samanai
            if(res.data.success){
                this.setState({
                   //employee arn tynne js eke get method eken
                    s_name:res.data.supplier.s_name,
                    s_id:res.data.supplier.s_id,
                    nic:res.data.supplier.nic,
                    phone:res.data.supplier.phone,
                    email:res.data.supplier.email,
                    i_code:res.data.supplier.i_code
                });

                console.log(this.state.supplier);
            }

        });
    }


    render(){
        return(
            
            <div class="col-mb-8 mt-4 mx-auto">
                <center>
                  <h1 className="h3 mb-3 front-weight-normal">Edit Supplier Details</h1>
                  </center>
                    <form className="needs-validation" noValidate>
                        
                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">Supplier Name</label>
                            <input type="text" className="form-control" name="s_name" 
                            value={this.state.s_name} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">Supplier Id</label>
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