import React, { Component } from "react";
import "./Calculator.css";
import Buttons from "./Buttons";
import Display from "./Display";

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: 0,
      result: "",
      waitingForOperand: false,
    };
  }

  //   leadingZero = (string) => {
  //     let arr = string.split(" ");
  //     let lastOperand = arr.pop();
  //     if (lastOperand.charAt(0) === "0") {
  //       return true;
  //     }
  //     return false;
  //   };

  handleClick = (e) => {
    let value = e.target.value;
    if (value === "sign") {
      this.changeSign();
    } else if (value === "reset") {
      this.reset();
    } else if (value === "=") {
      this.calculate();
    } else if (value === "backspace") {
      this.backspace();
    } else {
      //   this.setState({
      //     display: (this.state.result + value).toLocaleString("en"),
      //   });
    }
  };
  //   inputDigit(digit) {
  //     const { displayValue, waitingForOperand } = this.state

  //     if (waitingForOperand) {
  //       this.setState({
  //         displayValue: String(digit),
  //         waitingForOperand: false
  //       })
  //     } else {
  //       this.setState({
  //         displayValue: displayValue === '0' ? String(digit) : displayValue + digit
  //       })
  //     }
  //   }

  calculate = () => {
    console.log("calculate");
    let checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }
    try {
      this.setState({
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };
  clearDisplay = () => {
    console.log("clear display");
    this.setState({
      display: 0,
    });
  };
  reset = () => {
    console.log("reset");
    this.setState({
      display: 0,
      result: "",
    });
  };
  backspace = () => {
    console.log("backspace");
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  changeSign = () => {
    console.log("change sign");
    let newSign = this.state.display;
    if (newSign === 0) {
      return;
    } else {
      newSign *= -1;
      this.setState({
        display: newSign,
      });
    }
  };

  clearBtn = () => {};
  render() {
    // npm
    return (
      <div className="calculator">
        <Display display={this.state.display} />
        <div className="calculator-buttons">
          <Buttons handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
