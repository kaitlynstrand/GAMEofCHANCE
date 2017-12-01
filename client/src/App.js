import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages/Home"
import Group from "./pages/Groups"
import AddTask from "./pages/AddTask"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Leaderboards from "./pages/Leaderboards"
import Tasks from "./pages/Tasks"
import Claim from "./pages/Claim"


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
              <Route exact path="/" component={Home} />
              <Route exact path="/group" component={Group} />
              <Route exact path="/addTask" component={AddTask} />
              <Route exact path="/tasks" component={Tasks} /> 
              <Route exact path="/leaderboards" component={Leaderboards} /> 
              <Route exact path="/claim" component={Claim} /> 
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
