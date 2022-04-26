import React, {Component} from 'react';
import axios from 'axios';

export default class SupplierPaymentDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            payment:{}

        };

    }

    componentDidMount(){ 
        const id = this.props.match.params.id;

        axios.get(`/payment/${id}`).then((res)=>{ 
            if(res.data.success){
                this.setState({
                    payment:res.data.supplier
                });

                console.log(this.state.payment);
            }

        });
    }
    render(){

        const{Suppliername,Supplierid,Price1,Quantity1,Amount1,Price2,Quantity2,Amount2,Price3,Quantity3,Amount3,
            Price4,Quantity4,Amount4,Price5,Quantity5,Amount5,Price6,Quantity6,Amount6,Total} = this.state.payment;
        return(
           
            <div className="backgroud4">
                
         
                 
                 
                 
                 
                 
                 
                
                 
                 
                  <div style={{marginTop:'20px' }}>
                    <h4 className="textcenter" style={{marginTop:'40px' ,backgroundColor:'black' , color:'white', padding:'30px'}}>Supplier Payment Profile</h4>
                
                     <hr/> 

                     


 








        
                     <table className="table table-hover" style={{marginTop:'40px'}}> 
                        <tr>
                            
                    
                          <th scope="col"style={{textAlign:'right', }}>Supplier Name:</th>
                          <th >{Suppliername}</th>
                        </tr>
                        

                        <tr>
                          <th scope="col"style={{textAlign:'right'}}>Registration NO:</th>
                          <th  >{Supplierid}</th>
                        </tr>

                       </table>

                                 

                     <center>
        
        <table class="h" >
            <tr>
                 <th class="th1"></th>
                <th class="th1" >Ithem Price:</th>
                <th class="th1">Item Quantity:</th>
                <th class="th1">Amount:</th>
               
            </tr>
        </table>
        <table class = "gfg">
            <tr>
               < td class="th1"></td>
                <td class = "geeks" class="th1">{Price1}</td>
                <td class="th1">{Quantity1}</td>
                <td class="th1">{Amount1}</td>
               
            </tr>
            <tr>
            < td class="th1"></td>
                <td class = "geeks" class="th1">{Price2}</td>
                <td class="th1">{Quantity2}</td>
                <td class="th1">{Amount2}</td>
            </tr>
            <tr>
            < td class="th1"></td>
                <td class = "geeks" class="th1">{Price3}</td>
                <td class="th1">{Quantity3}</td>
                <td class="th1">{Amount3}</td>
            </tr>
       
            <tr>
            < td class="th1"></td>
                <td class = "geeks" class="th1">{Price4}</td>
                <td class="th1">{Quantity4}</td>
                <td class="th1">{Amount4}</td>
            </tr>
       

            <tr>
            < td class="th1"></td>
                <td class = "geeks" class="th1">{Price5}</td>
                <td class="th1">{Quantity5}</td>
                <td class="th1">{Amount5}</td>
            </tr>

            <tr>
            < td class="th1"></td>
                <td class = "geeks" class="th1">{Price6}</td>
                <td class="th1">{Quantity6}</td>
                <td class="th1">{Amount6}</td>
            </tr>

            <tr>
            < td class="th1"></td>
                <td class = "geeks" class="th1"></td>
                <td  class="h" class="th1" style={{backgroundColor:'lightgray'}} >Total</td>
                <td class="th1"  style={{backgroundColor:'	lightgray'}}>{Total}</td>
            </tr>

           
  </table>
        </center>

                 

</div>


</div>

              
                 )
                     }
                    }