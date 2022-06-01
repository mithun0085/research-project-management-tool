import React, {Component} from 'react';
import axios from 'axios';



const initialState ={
    
     DocName:"",
      Action:"",
      Reason:""
     
       

}





export default class EvaluateTopics extends Component{


constructor(props){
    super(props);
    this.state=initialState;
        
    

    
}

    handleInputChange = (e) =>{ 
         const isCheckbox = e.target.type==="checkbox";

         this.setState({
             [e.target.name]:isCheckbox  //name is name=" " in css code in inputfeilds
             ?e.target.Checked
             :e.target.value
        
    });
    };

    validate=()=>{
        let DocNameerror="";
       
        
      



        if(!this.state.DocName){
            DocNameerror ='*Document Name cannot be Null';
        }
       

       

        if ( DocNameerror ){
            this.setState({DocNameerror });
            return false;
        }

        return true;
    };

    


  
    
    
    
    onSubmit = (e) =>{ 

        e.preventDefault();
        const isValid =this.validate();
         const{DocName,Action,Reason} = this.state;

         const data = {
            DocName:DocName,
             Action:Action,
             Reason:Reason
            

         }
         if(isValid){

            console.log(data)
        
            axios.post("/topicDOC/save",data).then((res) =>{ 
                if(res.data.success){ 
                    this.setState( 
                        {
                          DocName:"",
                          Action:"",
                          Reason:""

         

        
                         
                     }
                 )
             }
         })
         this.setState(initialState);
        }
    };
    
    
    render(){
        return(



            <div className="backgrund3">
              <div class="col-mb-8 mt-4 mx-auto">
                
                    
                      


                  <center>
                 
  
              

  <h1 className="textcenter" style={{marginTop:'40px',fontFamily: 'Fantasy'}}>Topic Registration</h1>  

<br></br>
  <div class="card"  >
  
  <div class="w3-container w3-red" >


 
     
   
  </div>
</div>


<br></br><br></br>

    <form className="needs-validation" noValidate>
                        


                       <div style={{color:'red',textAlign:'left'}}>{this.state.DocNameerror}</div>


                        <div className="form-group" style={{marginBottom:'15px',maxlength:"4"}}>
                           <label style={{marginBottom:'15px'}} class="form-label" ></label>
                            <input type="text" className="form-control"  placeholder="Enter Document Name" name="DocName" //name also important.
                            value={this.state.DocName} onChange={this.handleInputChange}/>
                        </div>
                      
                     

                        <div style={{textAlign:'left',fontFamily:'Times New Roman'}}>
<label class="container1" >Accept the topic
  <input type="radio"   value="Accept" name="Action"   onChange={(rbvalue)=>{this.setState({Action:rbvalue.target.value})}}/>
  <span class="checkmark"></span>
</label>
</div>


<div style={{textAlign:'left',fontFamily:'Times New Roman'}}>
<label class="container1">Reject the topic
  <input type="radio"  value="Reject" name="Action"   onChange={(rbvalue)=>{this.setState({Action:rbvalue.target.value})}}/>
  <span class="checkmark"></span>
</label>
</div>

                      
                      
                      
                      
                      
                      
                      
                      
                      
                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter the reason to reject" name="Reason" 
                            value={this.state.Reason} onChange={this.handleInputChange}/>
                        </div>
                        
                 

<h style={{color:'red'}} >once the topic is submitted, it will not be able to change again until you get a feedback.Your are able to register maximum 3 topics only</h>
                
                       <div>
                       <center>
                       <button className="btn btn-success"  type="submit" style={{marginTop:'120px',width:'150px',height:'100px',float: 'center'}} onClick={this.onSubmit}>
                      
                        &nbsp;save
                       </button>
                      </center>
                      
                      </div>
                    </form>



            
                   


              
</center>             
                   
                
                   
                     </div>
                    </div>
                   
        )
    }
}

