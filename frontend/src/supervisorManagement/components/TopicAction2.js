import React,{Component} from 'react';
import axios from 'axios';







export default class TopicAction2 extends Component{
    constructor(props){
        super(props);


      


        this.state={
          
           
           
            Action2:"",
            Reason2:""
           
           
        };
    }



   /* constructor2(props){
        super(props);
        this.state=initialState;
            
        
    
        
    }

    */
    
        handleInputChange = (e) =>{ 
            const {name,value} = e.target; 
    
             this.setState({
                 ...this.state,
            [name]:value
            
        })
        };
    

        
    
    
      
        
        
        
        onSubmit = (e) =>{ 
    
            e.preventDefault();
            const id = this.props.match.params.id;
        
             const{Action2,Reason2} = this.state;
    
             const data = {
                
                 Action2:Action2,
                 Reason2:Reason2,
               
                
    
             }
          
            
             console.log(data)
            
             axios.put(`/topic/update/${id}`,data).then((res) =>{ 
                 if(res.data.success){ 
                     alert("Feedback Inserted Successfully")
                     this.setState( 
                            {
                              
                              Action2:"",
                              Reason2:""
                            
    
    
             
    
            
                             
                         }
                     )
                 }
             })
       
          
        }
        componentDidMount(){ 
            const id = this.props.match.params.id;
    
            axios.get(`/topic/${id}`).then((res)=>{ 
                if(res.data.success){
                    this.setState({
                 
                       Action2:res.data.topic.Action2,
                       Reason2:res.data.topic.Reason2,
                    

                      
                    });
    
                    console.log(this.state.salary);
                }
    
            });
        }














render(){

    
  return(



      <div className="backgrund3" >
        <div class="col-mb-8 mt-4 mx-auto">
          
              
                


            <center>
        

<div  >
<div class="w3-card-4 w3-margin "style={{width:'700px',height:'580px'}} >
<h1 className="textcenter" style={{marginTop:'40px',fontFamily: 'Fantasy'}}>Accept/Reject Topics</h1>
<form className="needs-validation" noValidate>
                  

<br></br>

<div class="w3-container w3-teal" >

</div>
<br></br><br></br>






<div style={{textAlign:'left',fontFamily:'Times New Roman'}}>
<label class="container1" >Accept the topic
  <input type="radio"   value="Accept" name="Action2"   onChange={(rbvalue)=>{this.setState({Action2:rbvalue.target.value})}}/>
  <span class="checkmark"></span>
</label>
</div>


<div style={{textAlign:'left',fontFamily:'Times New Roman'}}>
<label class="container1">Reject the topic
  <input type="radio"  value="Reject" name="Action2"   onChange={(rbvalue)=>{this.setState({Action2:rbvalue.target.value})}}/>
  <span class="checkmark"></span>
</label>
</div>



<br></br><br></br>
<div style={{color:'red',textAlign:'left'}}>
<h>If accept the topic submited by the student, skip this feild</h>
</div>

                  <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'15px'}} class="form-label" ></label>
                      <input type="text" className="form-control"  placeholder="Enter the reason to reject topic" name="Reason2" 
                      value={this.state.Reason2} onChange={this.handleInputChange}/>
                  </div>
                
                 
            
               
               <div>
                 <center>
                 <button className="btn btn-primary"  type="submit" style={{marginTop:'80px',width:'150px',height:'100px',float: 'center'}} onClick={this.onSubmit}>
               &nbsp;save
                 </button>
                </center>
                </div>
              </form>



             
</div></div>

        
</center>             
             
             
             
               </div>
              </div>
             
  )
}
}
       


 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  