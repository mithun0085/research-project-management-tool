import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import InsertTopic from './studentManagement/components/InsertTopic';







export default class AppStudent extends Component{
  render(){

    return(
      <BrowserRouter>
      <div className ="container">
        
  
        <Route path="/insertTopic" component={InsertTopic}></Route> 

 
        
       
       
     </div>
      </BrowserRouter>
    )
  }
}