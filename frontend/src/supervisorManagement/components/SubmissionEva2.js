import React, {Component} from 'react';
import axios from 'axios';



const initialState ={
    
       Name:"",Nameerror:"",DWeight:"", S1ID:"",S2ID:"",S3ID:"",S4ID:"",
        S1DMark1:"", S1DMark2:"",  S1DMark3:"",S1DMark4:"",S1DMark5:"",S1DTotal:"",S1DAllocatedMarks:"",
        S2DMark1:"", S2DMark2:"",  S2DMark3:"",S2DMark4:"",S2DMark5:"",S2DTotal:"",S2DAllocatedMarks:"",
        S3DMark1:"", S3DMark2:"",  S3DMark3:"",S3DMark4:"",S3DMark5:"",S3DTotal:"", S3DAllocatedMarks:"",
        S4DMark1:"", S4DMark2:"",  S4DMark3:"",S4DMark4:"",S4DMark5:"",S4DTotal:"", S4DAllocatedMarks:"",
     
    


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

    
 S1DTotalcalculate =(e)=>{

  
     
        this.setState({S1DTotal:parseInt(this.state.S1DMark1)+parseInt(this.state.S1DMark2)+parseInt(this.state.S1DMark3)+parseInt(this.state.S1DMark4)+
            parseInt(this.state.S1DMark5)});
        e.preventDefault();
    }

    S1DTotalWcalculate =(e)=>{

  
     
        this.setState({S1DAllocatedMarks:parseInt(this.state.S1DTotal)*parseFloat((this.state.DWeight)/100)});
        e.preventDefault();
    }


    S2DTotalcalculate =(e)=>{

  
     
        this.setState({S2DTotal:parseInt(this.state.S2DMark1)+parseInt(this.state.S2DMark2)+parseInt(this.state.S2DMark3)+parseInt(this.state.S2DMark4)+
            parseInt(this.state.S2DMark5)});
        e.preventDefault();
    }

    S2DTotalWcalculate =(e)=>{

  
     
        this.setState({S2DAllocatedMarks:parseInt(this.state.S2DTotal)*parseFloat((this.state.DWeight)/100)});
        e.preventDefault();
    }


    S3DTotalcalculate =(e)=>{

  
     
        this.setState({S3DTotal:parseInt(this.state.S3DMark1)+parseInt(this.state.S3DMark2)+parseInt(this.state.S3DMark3)+parseInt(this.state.S3DMark4)+
            parseInt(this.state.S3DMark5)});
        e.preventDefault();
    }

    S3DTotalWcalculate =(e)=>{

  
     
        this.setState({S3DAllocatedMarks:parseInt(this.state.S3DTotal)*parseFloat((this.state.DWeight)/100)});
        e.preventDefault();
    }

    S4DTotalcalculate =(e)=>{

  
     
        this.setState({S4DTotal:parseInt(this.state.S4DMark1)+parseInt(this.state.S4DMark2)+parseInt(this.state.S4DMark3)+parseInt(this.state.S4DMark4)+
            parseInt(this.state.S4DMark5)});
        e.preventDefault();
    }

    S4DTotalWcalculate =(e)=>{

  
     
        this.setState({S4DAllocatedMarks:parseInt(this.state.S4DTotal)*parseFloat((this.state.DWeight)/100)});
        e.preventDefault();
    }




 onSubmit = (e) =>{ 

        e.preventDefault();
        const isValid =this.validate();
 
         const{S1DMark1,S1DMark2,S1DMark3,S1DMark4,S1DMark5,S1DTotal,S1DAllocatedMarks,S2DMark1,S2DMark2,S2DMark3,S2DMark4,S2DMark5,S2DTotal,S2DAllocatedMarks,
            S3DMark1,S3DMark2,S3DMark3,S3DMark4,S3DMark5,S3DTotal,S3DAllocatedMarks,  S4DMark1,S4DMark2,S4DMark3,S4DMark4,S4DMark5,S4DTotal,S4DAllocatedMarks, 
           Name ,DWeight,S1ID,S2ID,S3ID,S4ID } = this.state;

         const data = {
           
             S1DMark1:S1DMark1,
             S1DMark2:S1DMark2,
             S1DMark3:S1DMark3,
             S1DMark4:S1DMark4,
             S1DMark5:S1DMark5,
             S1DTotal:S1DTotal,
             S1DAllocatedMarks:S1DAllocatedMarks,


             S2DMark1:S2DMark1,
             S2DMark2:S2DMark2,
             S2DMark3:S2DMark3,
             S2DMark4:S2DMark4,
             S2DMark5:S2DMark5,
             S2DTotal:S2DTotal,
             S2DAllocatedMarks:S2DAllocatedMarks,

             S3DMark1:S3DMark1,
             S3DMark2:S3DMark2,
             S3DMark3:S3DMark3,
             S3DMark4:S3DMark4,
             S3DMark5:S3DMark5,
             S3DTotal:S3DTotal,
             S3DAllocatedMarks:S3DAllocatedMarks,


             S4DMark1:S4DMark1,
             S4DMark2:S4DMark2,
             S4DMark3:S4DMark3,
             S4DMark4:S4DMark4,
             S4DMark5:S4DMark5,
             S4DTotal:S4DTotal,
             S4DAllocatedMarks:S4DAllocatedMarks,
             
             
             
             Name:Name,
             DWeight:DWeight,
              S1ID:S1ID,
              S2ID:S2ID,
             S3ID:S3ID,
              S4ID:S4ID


         }
        
         if(isValid){
            console.log(data)
        
            axios.post("/dmark2/save",data).then((res) =>{ 
                if(res.data.success){ 
                    alert("Calculated Marks Inserted Successfully")
                    this.setState( 
                        {
                         
                            S1DMark1:"",
                            S1DMark2:"",
                            S1DMark3:"",
                            S1DMark4:"",
                            S1DMark5:"",
                            S1DTotal:"",
                            S1DAllocatedMarks:"",

                            S2DMark1:"",
                            S2DMark2:"",
                            S2DMark3:"",
                            S2DMark4:"",
                            S2DMark5:"",
                            S2DTotal:"",
                            S2DAllocatedMarks:"",

                            S3DMark1:"",
                            S3DMark2:"",
                            S3DMark3:"",
                            S3DMark4:"",
                            S3DMark5:"",
                            S3DTotal:"",
                            S3DAllocatedMarks:"",

                            S4DMark1:"",
                            S4DMark2:"",
                            S4DMark3:"",
                            S4DMark4:"",
                            S4DMark5:"",
                            S4DTotal:"",
                            S4DAllocatedMarks:"",



                            DWeight:"",
                            Name:"",
                            S1ID:"",
                            S2ID:"",
                            S3ID:"",
                            S4ID:"",

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
            <div style={{color:'red',textAlign:'center'}}>{this.state.Nameerror}</div>
              <div className="form-group" style={{marginBottom:'15px',maxlength:"3"}}>
                           <label style={{marginBottom:'15px'}} class="form-label" ></label>
                            <input style={{width:'400px',height:'40px'}} type="text" className="form-control"  placeholder="Enter Group ID" name="Name" 
                            value={this.state.Name} onChange={this.handleInputChange}/>
                      </div>
                      </center>
              <center>
                 
                <div class="w3-card-4 w3-margin w3-white"style={{width:'305px',height:'1000px',float:'left'}} >

                    <h1 className="textcenter" style={{marginTop:'20px'}}>Student 1</h1>
                      <form className="needs-validation" noValidate>



               
              <center>

            
              <div className="form-group" style={{marginBottom:'15px',maxlength:"3"}}>
                           <label style={{marginBottom:'15px'}} class="form-label" ></label>
                            <input type="text" className="form-control"  placeholder="Enter Student ID" name="S1ID" 
                            value={this.state.S1ID} onChange={this.handleInputChange}/>
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
                     <div >
                         <br></br>
                          <h>Criteria 1</h>
                      </div>
                  </td>  

                   <td>
                      <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label"></label>
                            <input type="text" className="form-control" placeholder="Enter Mark (1)" name="S1DMark1" 
                            value={this.state.S1DMark1} onChange={this.handleInputChange}/>
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
                            <input type="text" className="form-control" placeholder="Enter Mark (2)" name="S1DMark2" 
                            value={this.state.S1DMark2} onChange={this.handleInputChange}/>
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
                            <input type="text" className="form-control" placeholder="Enter Mark (3)" name="S1DMark3" 
                            value={this.state.S1DMark3} onChange={this.handleInputChange}/>
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
                            <input type="text" className="form-control" placeholder="Enter Mark (4)" name="S1DMark4" 
                            value={this.state.S1DMark4} onChange={this.handleInputChange}/>
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
                            <input type="text" className="form-control" placeholder="Enter Mark (5)" name="S1DMark5" 
                            value={this.state.S1DMark5} onChange={this.handleInputChange}/>
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
                           <button class="w3-button w3-deep-purple" type="submit" style={{marginTop:'10px',width:'140px',height:'80px',float: 'left'}} onClick={this.S1DTotalcalculate}> 
                      
                                &nbsp;Calculate Total
                                <h2>{this.state.S1DTotal}</h2>
                      

                            </button>  
                        
                        <center>

                           <div className="form-group" style={{marginBottom:'15px'}}>
                               <label style={{marginBottom:'5px'}} class="form-label"></label>
                               
                                <input type="text" className="form-control" placeholder="Enter Weight of the Document" name="DWeight" 
                                 value={this.state.DWeight} onChange={this.handleInputChange}/>
                            </div>
                         </center>

                         <button class="w3-button w3-purple w3-round-xxlarge"  type="submit"  style={{marginTop:'20px',width:'160px',height:'90px',float: 'left',fontSize:'14px'}} onClick={this.S1DTotalWcalculate}> 
                      
                      &nbsp;Calculate <br></br>Alloacated Marks
                      <h2>{this.state.S1DAllocatedMarks}</h2>
            

                  </button>
                    
                    </div>
 </form>
      </div>








     
     
     
     
     
                 
                 <div class="w3-card-4 w3-margin w3-white"style={{width:'305px',height:'1000px',float:'left'}} >
 
                     <h1 className="textcenter" style={{marginTop:'20px'}}>Student 2</h1>
                       <form className="needs-validation" noValidate>
 
 
 
                
               <center>


<div className="form-group" style={{marginBottom:'15px',maxlength:"3"}}>
       <label style={{marginBottom:'15px'}} class="form-label" ></label>
        <input type="text" className="form-control"  placeholder="Enter Student ID" name="S2ID" 
        value={this.state.S2ID} onChange={this.handleInputChange}/>
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
 <div >
     <br></br>
      <h>Criteria 1</h>
  </div>
</td>  

<td>
  <div className="form-group" style={{marginBottom:'15px'}}>
       <label style={{marginBottom:'5px'}} class="form-label"></label>
        <input type="text" className="form-control" placeholder="Enter Mark (1)" name="S2DMark1" 
        value={this.state.S2DMark1} onChange={this.handleInputChange}/>
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
        <input type="text" className="form-control" placeholder="Enter Mark (2)" name="S2DMark2" 
        value={this.state.S2DMark2} onChange={this.handleInputChange}/>
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
        <input type="text" className="form-control" placeholder="Enter Mark (3)" name="S2DMark3" 
        value={this.state.S2DMark3} onChange={this.handleInputChange}/>
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
        <input type="text" className="form-control" placeholder="Enter Mark (4)" name="S2DMark4" 
        value={this.state.S2DMark4} onChange={this.handleInputChange}/>
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
        <input type="text" className="form-control" placeholder="Enter Mark (5)" name="S2DMark5" 
        value={this.state.S2DMark5} onChange={this.handleInputChange}/>
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
       <button class="w3-button w3-deep-purple"  type="submit" style={{marginTop:'10px',width:'140px',height:'80px',float: 'left'}} onClick={this.S2DTotalcalculate}> 
  
            &nbsp;Calculate Total
            <h2>{this.state.S2DTotal}</h2>
  

        </button>  
    
    <center>

       <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}} class="form-label"></label>
           
            <input type="text" className="form-control" placeholder="Enter Weight of the Document" name="DWeight" 
             value={this.state.DWeight} onChange={this.handleInputChange}/>
        </div>
     </center>

     <button class="w3-button w3-purple w3-round-xxlarge"  type="submit"  style={{marginTop:'20px',width:'160px',height:'90px',float: 'left',fontSize:'14px'}} onClick={this.S2DTotalWcalculate}> 
  
  &nbsp;Calculate<br></br> Alloacated Marks
  <h2>{this.state.S2DAllocatedMarks}</h2>


</button>

</div>
</form>
</div>















<div class="w3-card-4 w3-margin w3-white"style={{width:'305px',height:'1000px',float:'left'}} >
 
 <h1 className="textcenter" style={{marginTop:'20px'}}>Student 3</h1>
   <form className="needs-validation" noValidate>




<center>

<div className="form-group" style={{marginBottom:'15px',maxlength:"3"}}>
       <label style={{marginBottom:'15px'}} class="form-label" ></label>
        <input type="text" className="form-control"  placeholder="Enter Student ID" name="S3ID" 
        value={this.state.S3ID} onChange={this.handleInputChange}/>
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
 <div >
     <br></br>
      <h>Criteria 1</h>
  </div>
</td>  

<td>
  <div className="form-group" style={{marginBottom:'15px'}}>
       <label style={{marginBottom:'5px'}} class="form-label"></label>
        <input type="text" className="form-control" placeholder="Enter Mark (1)" name="S3DMark1" 
        value={this.state.S3DMark1} onChange={this.handleInputChange}/>
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
        <input type="text" className="form-control" placeholder="Enter Mark (2)" name="S3DMark2" 
        value={this.state.S3DMark2} onChange={this.handleInputChange}/>
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
        <input type="text" className="form-control" placeholder="Enter Mark (3)" name="S3DMark3" 
        value={this.state.S3DMark3} onChange={this.handleInputChange}/>
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
        <input type="text" className="form-control" placeholder="Enter Mark (4)" name="S3DMark4" 
        value={this.state.S3DMark4} onChange={this.handleInputChange}/>
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
        <input type="text" className="form-control" placeholder="Enter Mark (5)" name="S3DMark5" 
        value={this.state.S3DMark5} onChange={this.handleInputChange}/>
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
       <button class="w3-button w3-deep-purple"  type="submit" style={{marginTop:'10px',width:'140px',height:'80px',float: 'left'}} onClick={this.S3DTotalcalculate}> 
  
            &nbsp;Calculate Total
            <h2>{this.state.S3DTotal}</h2>
  

        </button>  
    
    <center>

       <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}} class="form-label"></label>
           
            <input type="text" className="form-control" placeholder="Enter Weight of the Document" name="DWeight" 
             value={this.state.DWeight} onChange={this.handleInputChange}/>
        </div>
     </center>

     <button class="w3-button w3-purple w3-round-xxlarge"   type="submit"  style={{marginTop:'20px',width:'160px',height:'90px',float: 'left',fontSize:'14px'}}  onClick={this.S3DTotalWcalculate}> 
  
  &nbsp;Calculate<br></br> Alloacated Marks
  <h2>{this.state.S3DAllocatedMarks}</h2>


</button>

</div>
</form>
</div>


















<div class="w3-card-4 w3-margin w3-white"style={{width:'305px',height:'1000px',float:'left'}} >
 
 <h1 className="textcenter" style={{marginTop:'20px'}}>Student 4</h1>
   <form className="needs-validation" noValidate>




<center>

<div className="form-group" style={{marginBottom:'15px',maxlength:"3"}}>
       <label style={{marginBottom:'15px'}} class="form-label" ></label>
        <input type="text" className="form-control"  placeholder="Enter Student ID" name="S4ID" 
        value={this.state.S4ID} onChange={this.handleInputChange}/>
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
 <div >
     <br></br>
      <h>Criteria 1</h>
  </div>
</td>  

<td>
  <div className="form-group" style={{marginBottom:'15px'}}>
       <label style={{marginBottom:'5px'}} class="form-label"></label>
        <input type="text" className="form-control" placeholder="Enter Mark (1)" name="S4DMark1" 
        value={this.state.S4DMark1} onChange={this.handleInputChange}/>
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
        <input type="text" className="form-control" placeholder="Enter Mark (2)" name="S4DMark2" 
        value={this.state.S4DMark2} onChange={this.handleInputChange}/>
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
        <input type="text" className="form-control" placeholder="Enter Mark (3)" name="S4DMark3" 
        value={this.state.S4DMark3} onChange={this.handleInputChange}/>
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
        <input type="text" className="form-control" placeholder="Enter Mark (4)" name="S4DMark4" 
        value={this.state.S4DMark4} onChange={this.handleInputChange}/>
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
        <input type="text" className="form-control" placeholder="Enter Mark (5)" name="S4DMark5" 
        value={this.state.S4DMark5} onChange={this.handleInputChange}/>
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
       <button class="w3-button w3-deep-purple"  type="submit" style={{marginTop:'10px',width:'140px',height:'80px',float: 'left'}} onClick={this.S4DTotalcalculate}> 
  
            &nbsp;Calculate Total
            <h2>{this.state.S4DTotal}</h2>
  

        </button>  
    
    <center>

       <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}} class="form-label"></label>
           
            <input type="text" className="form-control" placeholder="Enter Weight of the Document" name="DWeight" 
             value={this.state.DWeight} onChange={this.handleInputChange}/>
        </div>
     </center>

     <button class="w3-button w3-purple w3-round-xxlarge"  type="submit" style={{marginTop:'20px',width:'160px',height:'90px',float: 'left',fontSize:'14px'}} onClick={this.S4DTotalWcalculate}> 
  
  &nbsp;Calculate <br></br>Alloacated Marks
  <h2>{this.state.S4DAllocatedMarks}</h2>


</button>

</div>
</form>
</div>






























    </center>  



              
                    <div>
                       <center>
                             <button class="w3-button w3-black"  type="submit" style={{marginTop:'100px',width:'150px',height:'50px'}} onClick={this.onSubmit}>
                                 &nbsp;Save All
                             </button>
                        </center>
                    </div>
                 
   </div>
 
  </div>













                   
        )
    }
}

