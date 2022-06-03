import React, {Component} from 'react';
import axios from 'axios';



export default class EditMS extends Component{


  



    constructor(props){
        super(props);
        this.state={ 
            DDescription1:"",  DDescription2:"", DDescription3:"", DDescription4:"",DDescription5:"", Name:"",Nameerror:"",
            DMark1:"", DMark2:"",  DMark3:"",DMark4:"",DMark5:"",DTotal:"", DWeight:"",DAllocatedMarks:""
       
    
        }
    }
    
        handleInputChange = (e) =>{ 
             const {name,value} = e.target; 
    
             this.setState({
                 ...this.state,
            [name]:value
            
        })
        }



        
    validate=()=>{
        let Nameerror="";
       
      



        if(!this.state.Name){
            Nameerror ='*Marking Schem Name cannot be Null';
        }
 

       

        if ( Nameerror  ){
            this.setState({ Nameerror  });
            return false;
        }

        return true;
    };


        
        DTotalcalculate =(e)=>{

  
     
            this.setState({DTotal:parseInt(this.state.DMark1)+parseInt(this.state.DMark2)+parseInt(this.state.DMark3)+parseInt(this.state.DMark4)+
                parseInt(this.state.DMark5)});
            e.preventDefault();
        }
    
        DTotalWcalculate =(e)=>{
    
      
         
            this.setState({DAllocatedMarks:parseInt(this.state.DTotal)*parseFloat((this.state.DWeight)/100)});
            e.preventDefault();
        } 
        onSubmit = (e) =>{ 
            
      


             e.preventDefault();
             const id = this.props.match.params.id;
             const isValid =this.validate();
      
              const{DDescription1,DMark1,DDescription2,DMark2,DDescription3,DMark3,DDescription4,DMark4,DDescription5,DMark5,DTotal,DWeight,DAllocatedMarks
               ,Name  } = this.state;
     
              const data = {
                  DDescription1:DDescription1,
                  DMark1:DMark1,
                  DDescription2:DDescription2,
                  DMark2:DMark2,
                  DDescription3:DDescription3,
                  DMark3:DMark3,
                  DDescription4:DDescription4,
                 DMark4:DMark4,
                 DDescription5:DDescription5,
                 DMark5:DMark5,
                 DTotal:DTotal,
                 DWeight:DWeight,
             DAllocatedMarks:DAllocatedMarks,
             Name:Name
     

 }
                if(isValid){
             console.log(data)
            
             axios.put(`/dmark/update/${id}`,data).then((res) =>{ 
                 if(res.data.success){ 
                     alert("Marking Schem Updated Successfully")
                     this.setState( 
                         {
                            DDescription1:"",
                            DMark1:"",
                            DDescription2:"",
                            DMark2:"",
                            DDescription3:"",
                            DMark3:"",
                            DDescription4:"",
                            DMark4:"",
                            DDescription5:"",
                            DMark5:"",
                            DTotal:"",
                            DWeight:"",
                            DAllocatedMarks:"",
                             
                         }
                     )
                 }
             })
            }
        }



    componentDidMount(){ 
        const id = this.props.match.params.id;

        axios.get(`/dmark/${id}`).then((res)=>{ 
            if(res.data.success){
                this.setState({
                 Name:res.data.dmark.Name,
                   DDescription1:res.data.dmark.DDescription1,
                   DMark1:res.data.dmark.DMark1,
                   DDescription2:res.data.dmark.DDescription2,
                   DMark2:res.data.dmark.DMark2,
                   DDescription3:res.data.dmark.DDescription3,
                  DMark3:res.data.dmark.DMark3,
                  DDescription4:res.data.dmark.DDescription4,
                  DMark4:res.data.dmark.DMark4,
                   DDescription5:res.data.dmark.DDescription5,
                  DMark5:res.data.dmark.DMark5,
                  DTotal:res.data.dmark.DTotal,
                   DWeight:res.data.dmark.DWeight,
                  DAllocatedMarks:res.data.dmark.DAllocatedMarks
                

                });

                console.log(this.state.mark);
            }

        });
    }


    render(){
        return(


         <div className="backgrund3">
            <div class="col-mb-8 mt-4 mx-auto">


          
                  
              <center>
                 
                <div class="w3-card-4 w3-margin w3-white"style={{width:'800px'}} >

                    <h1 className="textcenter" style={{marginTop:'40px'}}>Update Marking Scheme</h1>
                      <form className="needs-validation" noValidate>



               
              <center>

              <div style={{color:'red',textAlign:'left'}}>{this.state.Nameerror}</div>
              <div className="form-group" style={{marginBottom:'15px',maxlength:"3"}}>
                           <label style={{marginBottom:'15px'}} class="form-label" ></label>
                            <input type="text" className="form-control"  placeholder="Enter Marking Schema Name" name="Name" 
                            value={this.state.Name} onChange={this.handleInputChange}/>
                      </div>

           
       
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
                     <div className="form-group" style={{marginBottom:'15px',maxlength:"4"}}>
                           <label style={{marginBottom:'15px'}} class="form-label" ></label>
                            <input type="text" className="form-control"  placeholder="Enter Critera (1)" name="DDescription1" 
                            value={this.state.DDescription1} onChange={this.handleInputChange}/>
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
                       <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Critera (2)" name="DDescription2" 
                            value={this.state.DDescription2} onChange={this.handleInputChange}/>
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
                         
                         <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Critera (3)" name="DDescription3" 
                            value={this.state.DDescription3} onChange={this.handleInputChange}/>
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
                        
                        <div className="mb-3" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Critera (4)" name="DDescription4" 
                            value={this.state.DDescription4} onChange={this.handleInputChange}/>
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
                         <div className="mb-3" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Critera (5)" name="DDescription5" 
                            value={this.state.DDescription5} onChange={this.handleInputChange}/>
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
                        
                        
                    <div  style={{color:'red',textAlign:'left'}}>
                            <h>Do not keep the fields Marking Distribution fiels empty/ if there is no value please enter 0 to calculate total</h>
                    </div>


                    <div>
                           <button className="btn btn-success"  type="submit" style={{marginTop:'10px',width:'140px',height:'100px',float: 'left'}} onClick={this.DTotalcalculate}> 
                      
                                &nbsp;Calculate Total
                                <h2>{this.state.DTotal}</h2>
                      

                            </button>  
                        
                        <center>

                           <div className="form-group" style={{marginBottom:'15px'}}>
                               <label style={{marginBottom:'5px'}} class="form-label"></label>
                               
                                <input type="text" className="form-control" placeholder="Enter Weight of the Document" name="DWeight" 
                                 value={this.state.DWeight} onChange={this.handleInputChange}/>
                            </div>
                         </center>

                         <button className="btn btn-success"  type="submit" style={{marginTop:'20px',width:'140px',height:'100px',float: 'left'}} onClick={this.DTotalWcalculate}> 
                      
                      &nbsp;Calculate Alloacated Marks
                      <h2>{this.state.DAllocatedMarks}</h2>
            

                  </button>
                    
                    </div>

                       
                    <div>
                       <center>
                             <button className="btn btn-primary"  type="submit" style={{marginTop:'150px',width:'150px',height:'50px'}} onClick={this.onSubmit}>
                                 &nbsp;Save All
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

