import React, { Component } from "react";
import "./home.css";

export default class Home extends Component {
  render() {
    const pdata = this.props.data;
    return (
      <div className="home">
        {pdata.map((item, index) => (
          <ul key={index}>
            <li>{item.name}</li>
            <li>{item.des}</li>
          </ul>
        ))}
      </div>
    );
  }
}
