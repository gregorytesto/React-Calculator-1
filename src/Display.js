import "./Display.css";

import React, { Component } from "react";

export default class Display extends Component {
  constructor(props) {
    super(props);
  }

  formatNumber = (string) => {
    if (string.length === 0) {
      return;
    } else {
     //let newString = Intl.NumberFormat().format(parseFloat(string));
    let newString = parseFloat(string).toLocaleString("en-US")
      return newString;
    }
  };
  render() {
    return (
      <div className="display">
        <p>{this.props.result ? "" : this.formatNumber(this.props.input)}</p>
        <p>{this.props.result ? this.formatNumber(this.props.result) : "result"}</p>
        {/* <p>input no f {this.props.input}</p>
        <p>prevInput {this.formatNumber(this.props.prevInput)}</p> */}
        
      </div>
    );
  }
}
