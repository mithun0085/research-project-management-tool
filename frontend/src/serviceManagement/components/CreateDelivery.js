import React, {Component} from 'react';
import axios from 'axios'
import './create.css'

export default class CreateDelivery extends Component {

    constructor(props) {
        super(props);
        this.state={
            cartID:"",
            location:"",
            delivery_Date:"",
            customerID:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit=(e) =>{

        e.preventDefault();

        const {cartID,location,delivery_Date,customerID} = this.state;

        const data = {
            cartID:cartID,
            location:location,
            delivery_Date:delivery_Date,
            customerID:customerID
        }

        console.log(data)

        axios.post("/postsSer/save",data).then((res) =>{
            if(res.data.success){
                alert("Delivery Information Inserted Successfully!!")
                this.setState(
                    {
                        cartID:"",
                        location:"",
                        delivery_Date:"",
                        customerID:""
                    }
                )
            }
        })
    }

    render(){
        return (
            <div className="col-md-8 mt-4 mx-auto">
                
                <h3 className="ab1"><b> Place Your Delivery </b></h3>
               <div className="az"> <img height="50%" width="50%" src={'/static/images/w.jpg'}></img> </div>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px"}}>Cart ID Number</label>
                        <input type="text"
                        className="form-control"
                        name="cartID"
                        placeholder="Enter cartID Number"
                        value={this.state.cartID}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px"}}>Delivery Location</label>
                        <input type="text"
                        className="form-control"
                        name="location"
                        placeholder="Enter Delivery Address"
                        value={this.state.location}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px"}}>Delivery Date</label>
                        <input type="text"
                        className="form-control"
                        name="delivery_Date"
                        placeholder="Enter Delivery Date"
                        value={this.state.delivery_Date}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px"}}>Customer ID Number</label>
                        <input type="text"
                        className="form-control"
                        name="customerID"
                        placeholder="Enter Customer ID Number"
                        value={this.state.customerID}
                        onChange={this.handleInputChange}/>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginBottom:"15px"}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
                        
                </form>
                
            </div>
            
        )
    }
}