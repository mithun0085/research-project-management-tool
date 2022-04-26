import React, {Component} from 'react'
import axios from 'axios';

const initialState ={
    
    date:"",
    name:"",
    jobPosition:"",
    mobile:"",
    feedback:"",
    dateError:"",
    nameError:"",
    jobError:"",
    mobileError:"",

}
export default class EditFeedback extends Component{

    constructor(props){
        super(props);
        this.state = initialState;
        
    }

    handleInputChange =(e) =>{
        const isCheckbox = e.target.type ==="checkbox";
        this.setState({
                [e.target.name]: isCheckbox
                ? e.target.checked
                : e.target.value
        });
};

validate = () =>{

let dateError="";
let nameError="";
let jobError="";
let mobileError="";

if(!this.state.date){
    dateError ='*date cannot be blank';
}
if(!this.state.name){
    nameError ='*name cannot be blank';
}
if(!this.state.jobPosition){
    jobError ='*job position cannot be blank';
}
if(!this.state.mobile){
    mobileError ='*Mobile number cannot be blank';
}

if (dateError || nameError || jobError || mobileError){
    this.setState({dateError,nameError,jobError,mobileError});
    return false;
}

return true;
};

    onSubmit = (e) =>{

        e.preventDefault();
        const isValid = this.validate();

        const id = this.props.match.params.id;

        const {date,name,jobPosition,mobile,feedback} = this.state;

        const data ={
            date:date,
            name:name,
            jobPosition:jobPosition,
            mobile:mobile,
            feedback:feedback
        }

        if (isValid){
        console.log(data)

        axios.put(`/emp/update/${id}`, data).then((res) =>{
            if(res.data.success){
                alert("Post Updated Successfull")
                this.setState(
                    {
                        date:"",
                        name:"",
                        jobPosition:"",
                        mobile:"",
                        feedback:""
                
            }
            )
            }
        })

        this.setState(initialState);
        }

    }



    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/emp/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    date:res.data.post.date,
                    name:res.data.post.name,
                    jobPosition:res.data.post.jobPosition,
                    mobile:res.data.post.mobile,
                    feedback:res.data.post.feedback
                });

                    console.log(this.state.emp);
            }
        });
    }


    render(){//
        return(//
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




            
            <div className="col-md-8 mt-4 mx-auto">
            
            <form className="Header" >
                <div>
                <h1 className="formstyle">Update Feedback</h1><br></br>
                </div>

                <div style={{color:"red"}}>{this.state.dateError}
            </div> 
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}> <b>Date </b></label>
                    <input type="text"
                    className="emptxt"
                    name="date"                        
                    placeholder="Enter Date (DD/MM/YYYY)"
                    value={this.state.date}
                    onChange={this.handleInputChange}/>
        </div>

        <div style={{color:"red"}}>{this.state.nameError}
            </div> 
        <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}><b> Name </b></label>
                    <input type="text"
                    className="emptxt"
                    name="name"
                    placeholder="Enter Name"
                    value={this.state.name}
                    onChange={this.handleInputChange}/>
        </div>

        <div style={{color:"red"}}>{this.state.jobError}
            </div> 
        <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}><b> Job Position </b></label>
                    <input type="text"
                    className="emptxt"
                    name="jobPosition"
                    placeholder="Enter Job Position"
                    value={this.state.jobPosition}
                    onChange={this.handleInputChange}/>
        </div>

        <div style={{color:"red"}}>{this.state.mobileError}
            </div> 

            <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b> Mobile Number </b></label>
                        <input type="text"
                        className="emptxt"
                        name="mobile"
                        placeholder="Enter A Valid Mobile Number"
                        value={this.state.mobile}
                        onChange={this.handleInputChange}/>
            </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}><b> Feedback </b></label>
                    <textarea type="text"
                    className="emptxtarea"
                    name="feedback"
                    placeholder="Enter your suggestions/ Ideas/ Allegations/ requirements."
                    value={this.state.feedback}
                    onChange={this.handleInputChange}/>
        </div>


            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp; Update
            </button>

            </form>
            </div>
            </div>
            
        );
    }
}

//all ok