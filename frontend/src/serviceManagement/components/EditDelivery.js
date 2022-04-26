import React, {Component} from 'react';
import axios from 'axios';


export default class EditDelivery extends Component {


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
        const id = this.props.match.params.id;
        const {cartID,location,delivery_Date,customerID} = this.state;

        const data = {
            cartID:cartID,
            location:location,
            delivery_Date:delivery_Date,
            customerID:customerID
        }

        console.log(data)

        axios.put(`/postsSer/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Delivery Updated Successfully!!")
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

    componentDidMount(){

        const id = this.props.match.params.id;
        axios.get(`/postsSer/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    cartID:res.data.post.cartID,
                    location:res.data.post.location,
                    delivery_Date:res.data.post.delivery_Date,
                    customerID:res.data.post.customerID
                });

                console.log(this.state.post);
            }
        });

    }

    render(){

        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal"> Update Delivery</h1>
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
                        &nbsp; Update
                    </button>
                        
                </form>
                
            </div>
        )
    }
}