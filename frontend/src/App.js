import React, {Component} from 'react';
import EditStaff from './components/EditStaff'; 
import StaffDetails from './components/StaffDetails';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/navbar/NavBar';
import CreateStaff from './components/CreateStaff';
import Afterlr from './components/afterlr/afterlr';
import Login from './components/login/login';
import Register from './components/register/register';
import App2 from './App2';
import loginCustomer from './components/login/loginCustomer';
import loginItem from './components/login/loginItem';
import loginPayment from './components/login/loginPayment';
import loginPerformance from './components/login/loginPerformance';
import loginQuality from './components/login/loginQuality';
import loginService from './components/login/loginService';
import loginSupplier from './components/login/loginSupplier';
import Rmanagers from './components/Rmanagers';
import Header from './Header';
import test from './components/test';
import staffPay from './components/staffPay';
import EmployeePaymentCalculation from './paymentManagement/components/EmployeePaymentCalculation';

export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
      
      <div className ="container">
      <Route path="/employeepaymentcalculation" component={EmployeePaymentCalculation}></Route> 
      <Route path="/test" component={test}></Route> 
      <Route path="/staffPay" component={staffPay}></Route> 
        <Route path="/home" component={Home}></Route> 
        <Route path="/add" component ={CreateStaff}></Route>
        <Route path="/edit/:id" component ={EditStaff}></Route>
        <Route path="/staff/:id" component ={StaffDetails}></Route>
        <Route path="/customer_manager_login" component ={loginCustomer}></Route>
        <Route path="/item_manager_login" component ={loginItem}></Route>
        <Route path="/payment_manager_login" component ={loginPayment}></Route>
        <Route path="/performance_manager_login" component ={loginPerformance}></Route>
        <Route path="/quality_manager_login" component ={loginQuality}></Route>
        <Route path="/service_manager_login" component ={loginService}></Route>
        <Route path="/supplier_manager_login" component ={loginSupplier}></Route>
        <Route path="/redirect_manager" component={Rmanagers}></Route>
      </div>
      </BrowserRouter>
    )
  }
}
