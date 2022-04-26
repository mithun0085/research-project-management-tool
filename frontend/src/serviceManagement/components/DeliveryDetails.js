import React, {Component} from 'react';
import axios from 'axios';

export default class DeliveryDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;
        axios.get(`/postsSer/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });

    }
    
    render(){

        const {cartID,location,delivery_Date,customerID} = this.state.post;
        return (
            <div style={{marginTop:'20px'}}>
               <hr/>

        <d1 className="row">
            <dt className="col-sm-3">cartID</dt>
            <dd className="col-sm-9">{cartID}</dd>

            <dt className="col-sm-3">location</dt>
            <dd className="col-sm-9">{location}</dd>

            <dt className="col-sm-3">delivery_Date</dt>
            <dd className="col-sm-9">{delivery_Date}</dd>

            <dt className="col-sm-3">customerID</dt>
            <dd className="col-sm-9">{customerID}</dd>

            </d1>
            </div>
        )
    }
}