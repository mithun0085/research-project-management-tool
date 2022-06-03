import React, {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {dispatchLogin, fetchUser, dispatchGetUser} from './redux/actions/authAction'
import { FooterContainer } from './containers/footer'
import { Route } from "react-router-dom";
import VideoConference from "./Pages/VideoConference";
import AppChat from "./Pages/AppChat";
import Header from './components/header/Header'
import Body from './components/body/Body'
import axios from 'axios';



import CreateDocMSch from './adminManagement/components/CreateDocMSch';
import ViewMSch from './adminManagement/components/ViewMSch';
import ViewMSchems from './adminManagement/components/ViewMSchems';
import ViewMSchems2 from './adminManagement/components/ViewMSchems2';
import EditMS from './adminManagement/components/EditMS';
import AdminHome from './adminManagement/components/AdminHome';

import PanelHome from './panelManagement/components/PanelHome';
import Home from './panelManagement/components/Home';
import EvaluateTopics from './panelManagement/components/EvaluateTopics';
import InsertMarks from './panelManagement/components/InsertMarks';

import InsertTopic from './studentManagement/components/InsertTopic';
import StudentHome from './studentManagement/components/StudentHome';
import TopicSummaryS1 from './studentManagement/components/TopicSummaryS1';
import InsertRejTopic from './studentManagement/components/InsertRejTopic';
import InsertRejTopic2 from './studentManagement/components/InsertRejTopic2';
import TopicDeRej from './studentManagement/components/TopicDeRej';
import SubmissionRej from './studentManagement/components/SubmissionRej';
import TopicDocS from './studentManagement/components/TopicDocS';
import CreateGroup from './studentManagement/components/CreateGroup';
import View from './studentManagement/components/View';
import AddSup from './studentManagement/components/AddSup';
import StudentReport from './studentManagement/components/StudentReport';
import CreateRequest from './studentManagement/components/CreateRequest';
import UpdateGroup from './studentManagement/components/UpdateGroup';
import DisplayGroup from './studentManagement/components/DisplayGroup';


import TopicAccept from './supervisorManagement/components/TopicAccept';
import TopicAction from './supervisorManagement/components/TopicAction';
import TopicAction2 from './supervisorManagement/components/TopicAction2';
import TopicAction3 from './supervisorManagement/components/TopicAction3';
import TopicSummary from './supervisorManagement/components/TopicSummary';
import SupervisorHome from './supervisorManagement/components/SupervisorHome';
import SubmissionEva from './supervisorManagement/components/SubmissionEva';
import SubmissionEva2 from './supervisorManagement/components/SubmissionEva2';

import VideoHome from "./Pages/VideoHome";
import AddVideoc from "./Pages/AddVideoc";
import presentationEva from './panelManagement/components/presentationEva';
import UploadDocAdd from "./studentManagement/components/UploadDocAdd";
import UploadDocS from './supervisorManagement/components/UploadDocS';
import VideoHome1 from './panelManagement/components/viewVideo';
import DMarksView from './studentManagement/components/DMarksView';

function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('/user/refresh_token', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatchLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token, dispatch])


  return (
    <Router>
              <Header />

      <div className="App">
        <Route path="/video" component={VideoConference} />
        <Route path="/chat" component={AppChat} />

        <Route path="/createDocMSch" component={CreateDocMSch}></Route> 
        <Route path="/viewMSch/:id" component={ViewMSch}></Route> 
        <Route path="/viewMSchems" component={ViewMSchems}></Route> 
        <Route path="/viewMSchems2" component={ViewMSchems2}></Route> 
        <Route path="/editMS/:id" component={EditMS}></Route>
        <Route path="/adminHome" component={AdminHome}></Route>

        <Route path="/panelHome" component={PanelHome}></Route> 
        <Route path="/home" component={Home}></Route> 
        <Route path="/evaluateTopics" component={EvaluateTopics}></Route>  

        <Route path="/studentHome"  component={StudentHome}></Route> 
        <Route path="/insertTopic" component={InsertTopic}></Route> 
        <Route path="/topicSummaryS1" component={TopicSummaryS1}></Route> 
        <Route path="/insertRejTopic/:id" component={InsertRejTopic}></Route> 
        <Route path="/insertRejTopic2/:id" component={InsertRejTopic2}></Route> 
        <Route path="/topicDeRej" component={TopicDeRej}></Route>
        <Route path="/topicDocS" component={TopicDocS}></Route>
         <Route path="/dMarksView" component={DMarksView}></Route>

        <Route path="/topicAccept" component={TopicAccept}></Route> 
        <Route path="/topicAction/:id" component={TopicAction}></Route> 
        <Route path="/topicAction2/:id" component={TopicAction2}></Route>
        <Route path="/topicAction3/:id" component={TopicAction3}></Route>
        <Route path="/topicSummary" component={TopicSummary}></Route> 
        <Route path="/supervisorHome" component={SupervisorHome}></Route> 
        <Route path="/submissionEva" component={SubmissionEva}></Route> 
        <Route path="/submissionEva2" component={SubmissionEva2}></Route> 

        <Route path="/addvideoc" component={AddVideoc} />
        <Route path="/videohome" component={VideoHome} />

        <Route path="/insertEMarks" component={InsertMarks} />

        <Route path="/Student/create" exact component={CreateGroup} />
        <Route path="/Student/get" exact component={DisplayGroup} />
        <Route path="/students/update/:id" exact component={UpdateGroup} />
        <Route path="/student/request" exact component={CreateRequest} />
        <Route path="/student/view" exact component={View} />
        <Route path="/student/add" exact component={AddSup} />
        <Route path="/student/submissionRej" component={SubmissionRej}></Route>
        <Route path="/student/report" exact component={StudentReport} />

        


         <Route path="/presentationEva" component={presentationEva} />
         <Route path="/viewVideo" component={VideoHome1} />
        <Route path="/uploadDocAdd" component={UploadDocAdd} />
        <Route path="/uploadDocs" component={UploadDocS} />

        <Body />
      </div>
      <FooterContainer/>

    </Router>
  );
}

export default App;
