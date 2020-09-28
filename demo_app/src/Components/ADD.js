import React, { Component } from "react";
import "./add.css";

export default class ADD extends Component {
  initialState = {
    name: "",
    des: ""
  };

  state = this.initialState;

  //handlechange
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  //handleSubmit
  handleAdd = () => {
    this.props.add(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, des } = this.state;
    return (
      <div className="add">
        <form>
          <h3>Name</h3>
          <input name="name" value={name} onChange={this.handleChange}></input>
          <h3>Designation</h3>
          <input name="des" value={des} onChange={this.handleChange}></input>

          <button type="button" value="Submit" onClick={this.handleAdd}>
            ADD
          </button>
        </form>
      </div>
    );
  }
}
