import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import SEARCH from "./Components/SEARCH";
import SHOW from "./Components/SHOW";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar></Navbar>
        <SHOW></SHOW>
        <SEARCH></SEARCH>
      </div>
    );
  }
}
