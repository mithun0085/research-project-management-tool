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
                  <center>
                    <h4 className="textcenter" style={{marginTop:'40px' ,fontFamily: 'Fantasy',fontSize:'30px',width:'400px' }} > {Name}</h4>
                    </center>
                     <hr/> 
                   
  <center>
        
                     <table class='ta1' style={{  border:' 1px solid #ddd',textAlign: 'left',  borderCollapse: 'collapse',
  width: '70%'}}>
  <tr class='tr3'>
    <th  class='th3'style={{     textalign: 'left',padding: '15px',border:' 1px solid #ddd'}}>Criteria</th>
    <th  class='th3'style={{   textalign: 'left',padding: '15px',border:' 1px solid #ddd'}}>Marking Distribution</th>
    <th  class='th3'style={{    textalign: 'left',padding: '15px',border:' 1px solid #ddd'}}></th>
  </tr>
  <tr class='tr3'>
    <td class='td3'style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left', backgroundColor:'#f2f2f2'}}>{DDescription1}</td>
    <td  class='td3'style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>{DMark1}</td>
    <td  class='td3'style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}></td>

  </tr>
  <tr>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left'}}>{DDescription2}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left'}}>{DMark2}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left'}}></td>
   
  </tr>
  <tr>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>{DDescription3}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>{DMark3}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}></td>

  </tr>
  <tr>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left'}}>{DDescription4}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left'}}>{DMark4}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left'}}></td>
   
</tr>
<tr>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>{DDescription5}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>{DMark5}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}></td>
   
</tr>
<tr>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left'}}>Total Marks</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left'}}>{DTotal}</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left'}}></td>
   
</tr>
<tr>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>Weight</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}>{DWeight}%</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left',backgroundColor:'#f2f2f2'}}></td>
   
</tr>
<tr>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left'}}>Allocated Marks</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left'}}>{DTotal}  *  {DWeight}%</td>
    <td style={{padding: '15px',border:' 1px solid #ddd',textAlign: 'left'}}>{DAllocatedMarks}</td>
    
   
</tr>
</table>
        </center>

                 

</div>
<br></br><br></br>

<button className="fa fa-download" style={{fontSize:'20px',color:'black',marginLeft:'250px'}}onClick={this.GeneratePDF} type="primary">Print the Marking Scheme</button>
</div>


              
                 )
                     }
                    }