import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import SEARCH from "./Components/SEARCH";
import SHOW from "./Components/SHOW";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/aboutus">
              <Navbar></Navbar>
              <h1>About us</h1>
            </Route>
            <Route path="/">
              <Navbar></Navbar>
              <SHOW></SHOW>
              <SEARCH></SEARCH>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
