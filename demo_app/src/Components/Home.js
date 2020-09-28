import React, { Component } from "react";
import "./home.css";

export default class Home extends Component {
  render() {
    //OBJECT DES....
    const { data, name, rmdata } = this.props;

    return (
      <div className="home">
        <h1>{name}</h1>
        {data.map((item, index) => (
          <ul key={index}>
            <li>{item.name}</li>
            <li>{item.des}</li>
            <li>
              <button onClick={() => rmdata(index)}>Remove</button>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
