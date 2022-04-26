import React, {Component} from 'react';
import axios from 'axios';

export default class FeedbackDetails extends Component{
    constructor(props){
        super(props);

        this.state={
            emp:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/emp/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    emp:res.data.post
                });

                    console.log(this.state.post);
            }
        });
    }
    render(){

            const{date,name,jobPosition,feedback}= this.state.emp

        return(
<div>
<table width="100%">
<thead >
<nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#2B547E'}}>
                <div class="container-fluid">
                <button class="navbar-toggler" type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="navbarNav" aria-controls="navbarNav" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" area-current="page" href="/performance" style={{color:'white'}}>Description</a>
                        </li>

                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" area-current="page" href="/sale" style={{color:'white'}}>All Sales</a>
                        </li>

                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" area-current="page" href="/feedback" style={{color:'white'}}>Feedback</a>
                        </li>

                    </ul>
                </div>


                </div>
            </nav>
</thead>

</table>

        
           
<div className="container">
            <div style={{margin:'20px'}}>
                <h4>{date}</h4>

                <hr/>

                <dl className="row">
                    <dt className="col-sm-3">name</dt>
                    <dd className="col-sm-9">{name}</dd>

                    <dt className="col-sm-3">jobPosition</dt>
                    <dd className="col-sm-9">{jobPosition}</dd>

                    <dt className="col-sm-3">feedback</dt>
                    <dd className="col-sm-9">{feedback}</dd>


                </dl>
                
            </div>
</div>
            </div>
        )
    }
}

//all ok