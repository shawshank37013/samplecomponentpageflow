import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

class ProcessFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '',};
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect = (e) => {
    console.log("handleSelect called!")
    console.log("e.target.value: "+ e.target.value)

    e.preventDefault();
    this.setState({value: e.target.value});
    this.props.updatePageView(e);
  };

  render() {
    return (
      <>
        <label htmlFor="sel1">Select list:</label>
        <select id="pageView" onChange={this.handleSelect} value={this.state.value}>
          <option></option>
          <option key="Search">Search</option>
          <option key="Checkout">Checkout</option>
          <option key="Shop">Shop</option>
        </select>
      </>
    );
  }
}

export default ProcessFlow;
