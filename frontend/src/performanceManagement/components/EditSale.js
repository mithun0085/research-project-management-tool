import React, {Component} from 'react'
import axios from 'axios';

export default class EditPost extends Component{

   

    constructor(props){
        super(props);
        this.state ={
                year:"",
                Jan:"",
                Feb:"",
                Mar:"",
                Apr:"",
                May:"",
                Jun:"",
                Jul:"",
                Aug:"",
                Sep:"",
                Oct:"",
                Nov:"",
                Dec:""
        }
    }

    handleInputChange =(e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{

        e.preventDefault();
        const id = this.props.match.params.id;

        const {year,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec} = this.state;

        const data ={
            year:year,
            Jan:Jan,
            Feb:Feb,
            Mar:Mar,
            Apr:Apr,
            May:May,
            Jun:Jun,
            Jul:Jul,
            Aug:Aug,
            Sep:Sep,
            Oct:Oct,
            Nov:Nov,
            Dec:Dec

        }

        console.log(data)

        axios.put(`/post/update/${id}`, data).then((res) =>{
            if(res.data.success){
                alert("Post Updated Successfull")
                this.setState(
                    {
                    year:"",
                    Jan:"",
                    Feb:"",
                    Mar:"",
                    Apr:"",
                    May:"",
                    Jun:"",
                    Jul:"",
                    Aug:"",
                    Sep:"",
                    Oct:"",
                    Nov:"",
                    Dec:""
                
            }
            )
            }
        })

    }



    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    year:res.data.post.year,
                    Jan:res.data.post.Jan,
                    Feb:res.data.post.Feb,
                    Mar:res.data.post.Mar,
                    Apr:res.data.post.Apr,
                    May:res.data.post.May,
                    Jun:res.data.post.Jun,
                    Jul:res.data.post.Jul,
                    Aug:res.data.post.Aug,
                    Sep:res.data.post.Sep,
                    Oct:res.data.post.Oct,
                    Nov:res.data.post.Nov,
                    Dec:res.data.post.Dec
                });

                    console.log(this.state.post);
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
                
                <form className="needs-validation" noValidate className="Header">
                <div >
                <h1 className="formstyle">Update Sales Details</h1>
                </div><br></br>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}> <b>Year</b></label>
                        <input type="text"
                        className="form-control"
                        name="year"
                        placeholder="Enter year"
                        value={this.state.year}
                        onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>January</b></label>
                        <input type="text"
                        className="form-control"
                        name="Jan"
                        placeholder="Enter January Value"
                        value={this.state.Jan}
                        onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>February</b></label>
                        <input type="text"
                        className="form-control"
                        name="Feb"
                        placeholder="Enter February Value"
                        value={this.state.Feb}
                        onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>March</b></label>
                        <input type="text"
                        className="form-control"
                        name="Mar"
                        placeholder="Enter March Value"
                        value={this.state.Mar}
                        onChange={this.handleInputChange}/>
            </div>


            <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>April</b></label>
                        <input type="text"
                        className="form-control"
                        name="Apr"
                        placeholder="Enter April Value"
                        value={this.state.Apr}
                        onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>May</b></label>
                        <input type="text"
                        className="form-control"
                        name="May"
                        placeholder="Enter May Value"
                        value={this.state.May}
                        onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>June</b></label>
                        <input type="text"
                        className="form-control"
                        name="Jun"
                        placeholder="Enter June Value"
                        value={this.state.Jun}
                        onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>July</b></label>
                        <input type="text"
                        className="form-control"
                        name="Jul"
                        placeholder="Enter July Value"
                        value={this.state.Jul}
                        onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>August</b></label>
                        <input type="text"
                        className="form-control"
                        name="Aug"
                        placeholder="Enter August Value"
                        value={this.state.Aug}
                        onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>September</b></label>
                        <input type="text"
                        className="form-control"
                        name="Sep"
                        placeholder="Enter September Value"
                        value={this.state.Sep}
                        onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>October</b></label>
                        <input type="text"
                        className="form-control"
                        name="Oct"
                        placeholder="Enter October Value"
                        value={this.state.Oct}
                        onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>November</b></label>
                        <input type="text"
                        className="form-control"
                        name="Nov"
                        placeholder="Enter November Value"
                        value={this.state.Nov}
                        onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>December</b></label>
                        <input type="text"
                        className="form-control"
                        name="Dec"
                        placeholder="Enter December Value"
                        value={this.state.Dec}
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