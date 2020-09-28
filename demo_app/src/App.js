import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home";

const NAVBAR = () => {
  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>Login</li>
        <li>SignIn</li>
        <li>About Us</li>
      </ul>
    </div>
  );
};

const FOOTER = () => {
  return (
    <div className="navbar">
      <ul>
        <li>contact us</li>
        <li>email</li>
        <li>Social</li>
      </ul>
    </div>
  );
};

export default class App extends Component {
  render() {
    const employee = [
      {
        name: "yash",
        des: "developer"
      },
      {
        name: "nikunj",
        des: "designer"
      },
      {
        name: "raj",
        des: "programmer"
      },
      {
        name: "shlok",
        des: "developer"
      },
      {
        name: "devarsh",
        des: "UI/Ux"
      }
    ];

    return (
      <div className="app">
        <NAVBAR></NAVBAR>
        <Home data={employee}></Home>
        <FOOTER></FOOTER>
      </div>
    );
  }
}
