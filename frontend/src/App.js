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
        <Body />
      </div>
      <FooterContainer/>

    </Router>
  );
}

export default App;
