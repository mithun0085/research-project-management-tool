import React,{Component}from 'react';
import { lightBlue,red} from '@material-ui/core/colors';

class AddSup extends Component{
    state={
        supervisors:[]

    }

    addcountry(){
        this.setState({supervisors:[...this.state.supervisors,""]})
    }

    handleChange(e,index){
        this.state.supervisors[index]=e.target.value

        this.setState({supervisors:this.state.supervisors})
    }

    handleRemove(index){
        this.state.supervisors.splice(index,1)

        console.log(this.state.supervisors,"$$$");

        this.setState({supervisors:this.state.supervisors})
    }

    handleSubmit(e){

        console.log(this.state,"$$$");
        alert("added successfully")
    }

   render(){
       return(
           <div className="App" align="center" style={{  color: 'blue'}}>


               <h1>Request Supervisors</h1>

              

               {
                   this.state.supervisors.map((country,index)=>{
                       return(
                           <div key={index}>
                               <input onChange={(e)=>this.handleChange(e,index)}
                               value={country}/>

                               <button onClick={()=>this.handleRemove(index)}  style={{ backgroundColor: red[700], color: 'white'}}>Remove</button>
                               </div>
                       )
                   })

               }
               <hr/>

               <button onClick={(e)=>this.addcountry(e)} style={{ backgroundColor: lightBlue[600], color: 'white'}}>Add Supervisors</button>

               <hr/>

               <button onClick={(e)=>this.handleSubmit(e)}  style={{ backgroundColor: lightBlue[600], color: 'white'}}>Submit List</button>
           </div>


       );
   }
}
export default AddSup; 