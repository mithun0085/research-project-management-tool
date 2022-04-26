import React, {Component} from 'react';//
import {BrowserRouter, Route} from 'react-router-dom';//
import EditSale from './performanceManagement/components/EditSale';//
import SaleDetails from './performanceManagement/components/SaleDetails';//
import CreateSale from './performanceManagement/components/CreateSale';
import AllSales from './performanceManagement/components/AllSales';//
import Admin from './performanceManagement/components/Admin';
import Feedback from './performanceManagement/components/Feedback';
import FeedbackDetails from './performanceManagement/components/FeedbackDetails';
import CreateFeedback from './performanceManagement/components/CreateFeedback';
import EditFeedback from './performanceManagement/components/EditFeedback';



export default class AppPerformance extends Component{//
  render(){//
    return(//
      <BrowserRouter>
            
           
            <Route path="/performance" exact component={Admin}></Route>
            <Route path="/feedback" exact component={Feedback}></Route>
            <Route path="/feedback/emp/:id" exact component={FeedbackDetails}></Route>
            <Route path="/feedback/create" exact component={CreateFeedback}></Route>
            <Route path="/feedback/edit/:id" exact component={EditFeedback}></Route>
            <Route path="/sale" exact component={AllSales}></Route>
            <Route path="/sale/add" component={CreateSale}></Route>
            <Route path="/sale/edit/:id" component={EditSale}></Route>
            <Route path="/sale/post/:id" component={SaleDetails}></Route>
            
            
           
      </BrowserRouter>//
    )
  }
}

//all ok