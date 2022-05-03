import React, {Component} from 'react';
import EditSalary from './paymentManagement/components/EditSalary'; 
import SalaryDetails from './paymentManagement/components/SalaryDetails';
import {BrowserRouter,Route} from 'react-router-dom';
import EmployeePayment from './paymentManagement/components/EmployeePayment';
import NavBar from './paymentManagement/components/NavBar';
import InsertSalary from './paymentManagement/components/InsertSalary';
import about from './paymentManagement/components/about';
import Payment from './paymentManagement/components/Payment';
import InsertSupplierPayment from './paymentManagement/components/InsertSupplierPayment';
import EditSupplierPayment from './paymentManagement/components/EditSupplierPayment';
import SupplierPaymentDetails from './paymentManagement/components/SupplierPaymentDetails';
import SupplierPayment from './paymentManagement/components/SupplierPayment';
import CustomerPayment from './paymentManagement/components/CustomerPayment';
import EmployeePaymentCalculation from './paymentManagement/components/EmployeePaymentCalculation';
import SupplierPaymentCalculation from './paymentManagement/components/SupplierPaymentCalculation';



export default class AppPayment extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className ="container">
        
        <Route path="/payment" component={Payment}></Route> 
        <Route path="/employeepayment"  component={EmployeePayment}></Route> 
        <Route path="/addSalary" component ={InsertSalary}></Route>
        <Route path="/editSalary/:id" component ={EditSalary}></Route>
        <Route path="/salary/:id" component ={SalaryDetails}></Route>
        <Route path="/employeepaymentcalculation" component={EmployeePaymentCalculation}></Route>
        <Route path="/about" component={about}></Route>
        <Route path="/insertsupplierpayment" component={InsertSupplierPayment}></Route>
        <Route path="/editsupplierpayment/:id" component={EditSupplierPayment}></Route>
        <Route path="/supplierpaymentdetails/:id" component={SupplierPaymentDetails}></Route>
        <Route path="/supplierpayment" component={SupplierPayment}></Route>
        <Route path="/supplierpaymentcalculation" component={SupplierPaymentCalculation}></Route>
        <Route path="/customerpayment" component={CustomerPayment}></Route>
        

      </div>
      </BrowserRouter>
    )
  }
}