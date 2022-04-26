import React,{Component} from 'react';


export default class Admin extends Component{//

 
  render(){
    return(
<div>
<table width="100%">
<thead >
<nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#2B547E'}}>
                <div class="container-fluid">
                <button class="navbar-toggler" type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="navbarNav" aria-controls="navbarNav" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" area-current="page" href="/" style={{color:'white'}}>Description</a>
                        </li>

                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" area-current="page" href="/sale" style={{color:'white'}}>All Sales</a>
                        </li>

                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" area-current="page" href="/feedback" style={{color:'white'}}>Feedback</a>
                        </li>

                    </ul>
                </div>


                </div>
            </nav>
</thead>

</table>






        <div ClassName="main" style={{ backgroundColor:"#045F5F" }} width='800' height="1000" >
<table >
<div className="middle">
  <tr><td >
          
         
          
  </td></tr>
  <tr><td>
<h1 style={{color:'black'}}><em>How To Check Our Performance ?</em></h1>

<h5 style={{color:'#8C001A'}}> Financial Performance</h5>
<p >The financial performance identifies how well a company 
  generates revenues and manages its assets, liabilities, 
  and the financial interests of its stake- and stockholders. ... 
  Line items, such as revenue from operations, operating income, 
  or cash flow from operations can be used, as well as total unit sales.</p>
 
  <h5 style={{color:'#8C001A'}}>Employee Performance</h5>
  <p >Employee performance is defined as how an employee fulfills 
    their job duties and executes their required tasks. It refers 
    to the effectiveness, quality, and efficiency of their output. ... 
    A high-performing employee is extremely valuable to a company. 
    In fact, there is no greater asset than top talent</p>
    <h5 style={{color:'#8C001A'}}>All Sales</h5>
    <p>
      By clicking 'All sales' button in the sub navigation bar, you 
      can see all selling details of our super market. Begining of 
      a year you must create a new selling details by clicking 'create
      new sale' button. To enter new selling detail to existing sales, 
      you can go through the update button and you can see the summary 
      and download summary detail as a pdf.
    </p>
      <h5 style={{color:'#8C001A'}}>Feedback</h5>
    <p>
      By clicking 'Feedback' button you can see all feedbacks of employees.
      It's mean their Suggessions, Ideas, Allegations or their Requirements.

    </p>

  </td></tr>
  </div>


</table>

</div>
      </div>

    )
  }
};

/*
style={{alignContent:"center"}}
import React from 'react';
import a from '../a.jpg';  // Tell Webpack this JS file uses this image
console.log(a); // /logo.84287d09.png

function Admin() {   // Import result is the URL of your image  
  return (
  <div ClassName="admin" >
    
    <table align='center'>
      <td>
      <img src={a} alt="A"/>
      </td>

    </table>
  

  </div>
  )
}

export default Admin;*/