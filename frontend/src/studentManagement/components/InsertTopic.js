import React, {Component} from 'react';
import axios from 'axios';



const initialState ={
    
  GroupId:"",
       Topic1:""
       

}





export default class InsertTopic extends Component{


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
        let Iderror="";
        let Topicerror="";
        
      



        if(!this.state.GroupId){
            Iderror ='*Group ID cannot be Null';
        }
        if(!this.state.Topic1){
            Topicerror ='*Research Topic cannot be Null';
        }
        

       

        if ( Iderror || Topicerror ){
            this.setState({ Iderror , Topicerror });
            return false;
        }

        return true;
    };

    


  
    
    
    
    onSubmit = (e) =>{ 

        e.preventDefault();
        const isValid =this.validate();
         const{GroupId,Topic1} = this.state;

         const data = {
            GroupId:GroupId,
             Topic1:Topic1
            

         }
         if(isValid){

            console.log(data)
        
            axios.post("/topic/save",data).then((res) =>{ 
                if(res.data.success){ 
                    alert("Topic Registered Successfully")
                    this.setState( 
                        {
                          GroupId:"",
                          Topic1:""
                          

         

        
                         
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
                 
  
                  <div class="w3-card-4 w3-margin w3-white"style={{width:'700px'}} >

  <h1 className="textcenter" style={{marginTop:'40px',fontFamily: 'Fantasy'}}>Topic Registration</h1>  

<br></br>
  <div class="card"  >
  
  <div class="w3-container w3-red" >


 
     
   <h1>Group Leader</h1>
    <h>Research topic shold be submitted by group leader. Once you submitted the topic, it wil be sent to the relevant supervisor. 
        A feedback will be send by the supervisor</h>
  </div>
</div>


<br></br><br></br>

    <form className="needs-validation" noValidate>
                        


                       <div style={{color:'red',textAlign:'left'}}>{this.state.Iderror}</div>


                        <div className="form-group" style={{marginBottom:'15px',maxlength:"4"}}>
                           <label style={{marginBottom:'15px'}} class="form-label" ></label>
                            <input type="text" className="form-control"  placeholder="Enter Group Id" name="GroupId" //name also important.
                            value={this.state.GroupId} onChange={this.handleInputChange}/>
                        </div>
                      
                        <div style={{color:'red',textAlign:'left'}}>{this.state.Topicerror}</div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Research Topic" name="Topic1" 
                            value={this.state.Topic1} onChange={this.handleInputChange}/>
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



            
                   
</div>

              
</center>             
                   
                
                   
                     </div>
                    </div>
                   
        )
    }
}

