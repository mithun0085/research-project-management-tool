import React, {Component} from 'react';
import axios from 'axios';
import jsPDF from "jspdf";


export default class ViewMSch extends Component{
    constructor(props){
        super(props);
        this.state={
            mark:{}

        };

    }


    
GeneratePDF =()=>{
    var doc = new jsPDF("p", "pt", "a2", "pdf");
    doc.html(document.querySelector('#content'),{
           callback: function(pdf){
               pdf.save("mypdf.pdf");
           }
    });
  };

    componentDidMount(){ 
        const id = this.props.match.params.id;

        axios.get(`/dmark/${id}`).then((res)=>{ 
            if(res.data.success){
                this.setState({
                    mark:res.data.dmark
                });

                console.log(this.state.mark);
            }

        });
    }
    render(){

        const{DDescription1,DMark1,DDescription2,DMark2,DDescription3,DMark3,DDescription4,DMark4,DDescription5,DMark5,DTotal,DWeight,DAllocatedMarks
            ,Name  }  = this.state.mark;
        return(
           
            <div className="backgroud4" >
                
         
                  <div id="content" style={{marginTop:'20px' }}>
                    <h4 className="textcenter" > {Name}</h4>
                  
                     <hr/> 

  <center>
        
                     <table style={{  border:' 1px solid #ddd',textAlign: 'left',  borderCollapse: 'collapse',
  width: '100%'}}>
  <tr>
    <th style={{   backgroundColor: '#04AA6D',color: 'white',   textalign: 'left',padding: '15px',border:' 1px solid #ddd'}}>Criteria</th>
    <th style={{   backgroundColor: '#04AA6D',color: 'white',   textalign: 'left',padding: '15px',border:' 1px solid #ddd'}}>Marking Distribution</th>
    <th style={{   backgroundColor: '#04AA6D',color: 'white',  textalign: 'left',padding: '15px',border:' 1px solid #ddd'}}></th>
  </tr>
  <tr>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>{DDescription1}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>{DMark1}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}></td>

  </tr>
  <tr>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>{DDescription2}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>{DMark2}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}></td>
   
  </tr>
  <tr>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>{DDescription3}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>{DMark3}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}></td>

  </tr>
  <tr>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>{DDescription4}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>{DMark4}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}></td>
   
</tr>
<tr>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>{DDescription5}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>{DMark5}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}></td>
   
</tr>
<tr>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>Total Marks</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>{DTotal}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}></td>
   
</tr>


</table>
        </center>

                 

</div>
<br></br><br></br>

<button className="btn3 button3" onClick={this.GeneratePDF} type="primary">Print the Marking Scheme</button>
</div>


              
                 )
                     }
                    }