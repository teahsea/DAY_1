import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home";

//FUNCTION BASED
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
//------------------------------------------------------------------------------------

//CLASS BASED -------------------------------------------------------------------------
export default class App extends Component {
  state = {
    name: "demo",
    employee: [
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
    ]
  };

  //REMOVE DATA
  removeData = index => {
    // const emp = this.state.employee;
    const { employee } = this.state;

    this.setState({
      employee: employee.filter((data, i) => i != index)
    });
  };

  render() {
    return (
      <div className="app">
        <NAVBAR></NAVBAR>
        <Home
          data={this.state.employee}
          name={this.state.name}
          rmdata={this.removeData}
        ></Home>
        <FOOTER></FOOTER>
      </div>
    );
  }
}
