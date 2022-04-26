import React, {Component} from 'react';
import EditSupplier from './supplierManagement/components/EditSupplier'; 
import SupplierDetails from './supplierManagement/components/SupplierDetails';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './supplierManagement/components/Home';

import CreateSupplier from './supplierManagement/components/CreateSupplier';
import about from './supplierManagement/components/about';

import option from './supplierManagement/components/option';




export default class AppSuppliers extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className ="container">
        
        <Route path="/supplier" exact component={Home}></Route> 
        <Route path="/addSupplier" component ={CreateSupplier}></Route>
        <Route path="/editSupplier/:id" component ={EditSupplier}></Route>
        <Route path="/supplier/:id" component ={SupplierDetails}></Route>
        <Route path="/about" component={about}></Route>
        
        <Route path="/option" component ={option}></Route>
      
      </div>
      </BrowserRouter>
    )
  }
}
