import React, {Component} from 'react';
import axios from 'axios';



const initialState ={
    
        groupID:"",
        Emark1:"",
        Emark2:"",
        Emark3:"",
        Emark4:"",
        Emark5:"",
        TotalEmark:"",
        groupIDerror:"",
        Emark1error:"",
        Emark2error:"",
        Emark3error:"",
        Emark4error:"",
        Emark5error:"",
        TotalEmarkerror:"",
       


}





export default class InsertMarks extends Component{


constructor(props){
    super(props);
    this.state=initialState;
        
    

    
}

    handleInputChange = (e) =>{ 
         const isCheckbox = e.target.type==="checkbox";

         this.setState({
             [e.target.name]:isCheckbox
             ?e.target.Checked
             :e.target.value
        
    });
    };

    validate=()=>{
        let groupIDerror="";
        let Emark1error="";
        let Emark2error="";
        let Emark3error="";
        let Emark4error="";
        let Emark5error="";
        let TotalEmarkerror="";
       
      



        if(!this.state.groupID){
            groupIDerror ='* cannot be Null';
        }
        if(!this.state.Emark1){
            Emark1error ='* cannot be Null';
        }
        if(!this.state.Emark2){
            Emark2error ='*cannot be Null';
        }
        if(!this.state.Emark3){
            Emark3error ='* cannot be Null';
        }
        if(!this.state.Emark4){
            Emark4error ='*cannot be Null';
        }

        
        if(!this.state.Emark5){
            Emark5error ='*cannot be Null';
        }
        if(!this.state.TotalEmark){
            TotalEmarkerror ='*cannot be Null';
        }

        
       

        if ( groupIDerror || Emark1error || Emark2error || Emark3error ||  Emark4error||  Emark5error || TotalEmarkerror   ){
            this.setState({ groupIDerror, Emark1error , Emark2error ,Emark3error ,  Emark4error,  Emark5error ,TotalEmarkerror  });
            return false;
        }

        return true;
    };

    


    calculate =(e)=>{

        this.setState({TotalEmark:parseInt(this.state.Emark1)+parseInt(this.state.Emark2)+parseInt(this.state.Emark3)+
        parseInt(this.state.Emark4)+parseInt(this.state.Emark5)});
        e.preventDefault();
    }
    
    
    
    onSubmit = (e) =>{ 

        e.preventDefault();
        const isValid =this.validate();
         const{groupID,Emark1,Emark2,Emark3,Emark4,Emark5,TotalEmark} = this.state;

         const data = {
             groupID:groupID,
             Emark1:Emark1,
             Emark2:Emark2,
             Emark3:Emark3,
             Emark4:Emark4,
             Emark5:Emark5,
             TotalEmark:TotalEmark,
            
             

         }
         if(isValid){

            console.log(data)
        
            axios.post("/emark/save",data).then((res) =>{ 
                if(res.data.success){ 
                    this.setState( 
                        {
                           groupID:"",
                           Emark1:"",
                           Emark2:"",
                           Emark3:"",
                           Emark4:"",
                           Emark5:"",
                          TotalEmark:""
   
                     }
                 )
             }
         })
         this.setState(initialState);
        }
    };
    
    
    render(){
        return(
            <center>
            <div className="backgrund3" style={{backgroundColor:"#e2e2e2" , width:"40%" , margin:"10px" }}>
            <div class="col-mb-8 mt-4 mx-auto">
            
            <div class="" style={{width:'90%' , }} >
            <div class="" >
            <h1 className="" style={{marginTop:'40px'}}>Insert Evaluated Marks</h1>
            <form className="needs-validation" noValidate>
                        
             <div style={{color:'red',textAlign:'left'}}>{this.state.groupIDerror}</div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'15px'}} class="form-label" ></label>
                            <input type="text" className="form-control"  placeholder="Enter Student's groupID" name="groupID" 
                            value={this.state.groupID} onChange={this.handleInputChange}/>
                        </div>

            <div style={{color:'red',textAlign:'left'}}>{this.state.Emark1error}</div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'15px'}} class="form-label" ></label>
                            <input type="text" className="form-control"  placeholder="Enter Criteria 1 mark" name="Emark1" 
                            value={this.state.Emark1} onChange={this.handleInputChange}/>
                        </div>
                      
            <div style={{color:'red',textAlign:'left'}}>{this.state.Emark2error}</div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Criteria 2 mark" name="Emark2" 
                            value={this.state.Emark2} onChange={this.handleInputChange}/>
                        </div>
                        
            <div style={{color:'red',textAlign:'left'}}>{this.state. Emark3error}</div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Criteria 3 mark" name="Emark3" 
                            value={this.state.Emark3} onChange={this.handleInputChange}/>
                        </div> 


            <div style={{color:'red',textAlign:'left'}}>{this.state.Emark4error}</div>
                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Criteria 4 mark" name="Emark4" 
                            value={this.state.Emark4} onChange={this.handleInputChange}/>
                        </div>
                         
            <div style={{color:'red',textAlign:'left'}}>{this.state.Emark5error}</div>
                         
                         <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Criteria 5 mark" name="Emark5" 
                            value={this.state.Emark5} onChange={this.handleInputChange}/>
                        </div>

                        <div  style={{color:'green',textAlign:'left'}}>
                            <h>Do not keep the fields empty/ if there is no value please enter 0</h>
                            </div>


                         <div>
                       <button className="btn btn-primary"  type="submit" style={{marginTop:'10px',width:'200px',height:'100px',float: 'center'}} onClick={this.calculate}> 
                      
                        &nbsp;Calculate Total Marks
                        <h2>{this.state.TotalEmark}</h2>
                       </button>  
                      
                    
                       </div>
                       <div>
                       <center>
                       <button className="btn btn-success"  type="submit" style={{marginTop:'5px',width:'200px',height:'45px' ,marginBottom:'5px'}} onClick={this.onSubmit}>
                      
                        &nbsp;Save Marks
                       </button>
                      </center>
                      </div>
                    </form>



                   
</div></div>

              
            
                   
                   
                   
                     </div>
                    </div>
                   </center> 
        )
    }
}

