import React, {Component} from 'react';
import axios from 'axios';



const initialState ={
    
       Name:"",Nameerror:"",DWeight:"",
        S1DMark1:"", S1DMark2:"",  S1DMark3:"",S1DMark4:"",S1DMark5:"",S1DTotal:"",S1DAllocatedMarks:"",
       
     
    


}





export default class SubmissionEva2 extends Component{


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
        let Nameerror="";
       
      



        if(!this.state.Name){
            Nameerror ='*Group ID cannot be null';
        }
 

       

        if ( Nameerror  ){
            this.setState({ Nameerror  });
            return false;
        }

        return true;
    };

 

    


 onSubmit = (e) =>{ 

        e.preventDefault();
        const isValid =this.validate();
 
         const{S1DMark1,S1DMark2,S1DMark3,S1DMark4,S1DMark5,S1DTotal,S1DAllocatedMarks } = this.state;

         const data = {
           
             S1DMark1:S1DMark1,
             S1DMark2:S1DMark2,
             S1DMark3:S1DMark3,
             S1DMark4:S1DMark4,
             S1DMark5:S1DMark5,
             S1DTotal:S1DTotal,
             S1DAllocatedMarks:S1DAllocatedMarks


           


         }
        
         if(isValid){
            console.log(data)
        
            axios.post("/dmark2/save",data).then((res) =>{ 
                if(res.data.success){ 
                    this.setState( 
                        {
                         
                            S1DMark1:"",
                            S1DMark2:"",
                            S1DMark3:"",
                            S1DMark4:"",
                            S1DMark5:"",
                            S1DTotal:"",
                            S1DAllocatedMarks:"",

                            

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
                 
          

                    <h1 className="textcenter" style={{marginTop:'40px'}}>Assignment Evaluation</h1>
                      <form className="needs-validation" noValidate>



               
              <center>

             

           
       
         <table id="customers" className="table table-hover" style={{marginTop:'40px',backgroundColor:'white'}} > 
          <thead>
             <tr >
                 
            
              <th scope="col">Criteria</th>
              <th scope="col">Marking destribution</th>
              <th></th>
             
             
            </tr>
          </thead>

          <tbody>
            
                <tr >
                  <td>
                     <div >
                         <br></br>
                          <h>Criteria 1</h>
                      </div>
                  </td>  

                   <td>
                      <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Mark (1)" name="DMark1" 
                            value={this.state.DMark1} onChange={this.handleInputChange}/>
                      </div> 
                   </td>
                </tr>
                
                <tr>

                    <td>
                    <div >
                         <br></br>
                          <h>Criteria 2</h>
                      </div> 

                   </td>

                    <td>
                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Mark (2)" name="DMark2" 
                            value={this.state.DMark2} onChange={this.handleInputChange}/>
                        </div>
                    </td>
                </tr>

                 <tr>

                     <td>
                         
                     <div >
                         <br></br>
                          <h>Criteria 3</h>
                      </div> 

                    </td>

                     <td>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Mark (3)" name="DMark3" 
                            value={this.state.DMark3} onChange={this.handleInputChange}/>
                        </div>
                     </td>

                </tr>

                <tr>

                     <td>   
                        
                     <div >
                         <br></br>
                          <h>Criteria 4</h>
                      </div> 


                    </td>

                     <td>

                        
                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Mark (4)" name="DMark4" 
                            value={this.state.DMark4} onChange={this.handleInputChange}/>
                        </div>
                        
                    </td>

                </tr>

                <tr>

                    <td>
                    <div >
                         <br></br>
                          <h>Criteria 5</h>
                      </div> 


                    </td>
                    <td>
                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Mark (5)" name="DMark5" 
                            value={this.state.DMark5} onChange={this.handleInputChange}/>
                        </div>
                        
                    </td>    

                </tr>
                      
                  
             </tbody>
         </table>
       </center>
                        
                  


                 
 </form>
     




    </center>  



              
                 
                 
   </div>
 
  </div>













                   
        )
    }
}

