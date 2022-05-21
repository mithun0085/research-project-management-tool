import React,{Component} from 'react';
import axios from 'axios';







export default class InsertRejTopic extends Component{
    constructor(props){
        super(props);


      


        this.state={
           
            Topic2:""
    
         
     
           
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
        
             const{Topic2} = this.state;
    
             const data = {
                
                 Topic2:Topic2,
                 
                
                
    
             }
          
            
             console.log(data)
            
             axios.put(`/topic/update/${id}`,data).then((res) =>{ 
                 if(res.data.success){ 
                     alert("Payment Updated Successfully")
                     this.setState( 
                            {
                          
                              Topic2:""
                           
                        
                             
    
             
    
            
                             
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
                      
                       Topic2:res.data.topic.Topic2
                      
                      

                      
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
        

<div class="container" >
<div class="w3-card-4 w3-margin "style={{width:'700px'}} >
<h1 className="textcenter" style={{marginTop:'40px',fontFamily: 'Fantasy'}}>Insert Topic</h1>
<form className="needs-validation" noValidate>
                  

<br></br>

<div class="w3-container w3-teal" >

</div>
<br></br><br></br>











<br></br><br></br>
<div style={{color:'red',textAlign:'left'}}>
<h>If accept the topic submited by the student, skip this feild</h>
</div>

                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'15px'}} class="form-label" ></label>
                      <input type="text" className="form-control"  placeholder="Enter the reason to reject topic" name="Topic2" 
                      value={this.state.Topic2} onChange={this.handleInputChange}/>
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
       


 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  