import React,{Component} from 'react';
import axios from 'axios';







export default class InsertRejTopic2 extends Component{
    constructor(props){
        super(props);


      


        this.state={
           
            Topic3:""
    
         
     
           
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
        
             const{Topic3} = this.state;
    
             const data = {
                
                 Topic3:Topic3,
                 
                
                
    
             }
          
            
             console.log(data)
            
             axios.put(`/topic/update/${id}`,data).then((res) =>{ 
                 if(res.data.success){ 
                     alert("3rd Topic Registered Succefully")
                     this.setState( 
                            {
                          
                              Topic3:""
                           
                        
                             
    
             
    
            
                             
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
                      
                       Topic3:res.data.topic.Topic3
                      
                      

                      
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
        

<div >
<div class="w3-card-4 w3-margin "style={{width:'700px',height:'600px'}} >
<h1 className="textcenter" style={{marginTop:'40px',fontFamily: 'Fantasy'}}>Insert Topic</h1>
<form className="needs-validation" noValidate>
                  

<br></br>

<div class="w3-container w3-teal" >

</div>
<br></br><br></br>











<br></br><br></br>
<div style={{color:'red',textAlign:'left'}}>
<h>If the previous topic is accepted, skip this feild</h>
</div>

                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'15px'}} class="form-label" ></label>
                      <input type="text" className="form-control"  placeholder="Enter the reason to reject topic" name="Topic3" 
                      value={this.state.Topic3} onChange={this.handleInputChange}/>
                  </div>
              
                
            
               
               <div>
                 <center>
                 <button className="w3-button w3-indigo" type="submit" style={{marginTop:'80px',width:'150px',height:'100px',float: 'center'}} onClick={this.onSubmit}>
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
       


 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  