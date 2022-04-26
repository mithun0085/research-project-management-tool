import React, {Component} from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import CreateDelivery from './serviceManagement/components/CreateDelivery';
import EditDelivery from './serviceManagement/components/EditDelivery';
import Home from './serviceManagement/components/Home';

import DeliveryDetails from './serviceManagement/components/DeliveryDetails';



export default class AppService extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
      
      <Route path="/service"  component={Home}></Route>
      <Route path="/addService" component={CreateDelivery}></Route>
      <Route path="/editService/:id" component={EditDelivery}></Route>
      <Route path="/postService/:id" component={DeliveryDetails}></Route>
      </div>
      </BrowserRouter>
    )
  }
}
