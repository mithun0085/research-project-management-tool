import './App.css'
import Afterlr from "./components/afterlr/afterlr"
import NavBar from './components/navbar/NavBar';
import Login from "./components/login/login"
import Register from "./components/register/register"
import Header from './Header';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App2() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App2">
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Afterlr setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App2;