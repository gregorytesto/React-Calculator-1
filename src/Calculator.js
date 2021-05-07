import React, { Component } from "react";
import "./Calculator.css";
import Buttons from "./Buttons";
import Display from "./Display";

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: 0,
      memory: "",
      result: "",
    };

    this.numbers = "1234567890";
    this.operands = "+-*/";
  }

  handleClick = (e) => {
    let value = e.target.value;
    if (value === "sign") {
      this.changeSign();
    } else if (value === "reset") {
      this.reset();
    } else if (value === "dot") {
     
      this.dot();
    } else if (value === "=") {
      this.calculate();
    } else if (value === "backspace") {
      this.backspace();
    } else if (value === "percent") {
      this.percent();
    } else if (this.numbers.includes(value)) {
      this.handleNumber(value);
    } else if (this.operands.includes(value)) {
      this.handleOperator(value);
      console.log(value);
    }
  };
  dot = (value) => {
    // if (!this.state.memory.includes(".")) {
    //   this.setState({
    //     memory: [...this.state.memory, "."],
    //   });
    // } else {
    //   return;
    // }
  };
  handleNumber = (value) => {
    console.log("handle number");
    if (this.state.display === 0) {
      this.setState({
        display: value,
        memory: value,
      });
    } else {
      this.setState({
        display: this.state.display + value,
        memory: this.state.memory + value,
      });
    }
  };



  handleOperator = (value) => {
    console.log("handle operator");
    console.log(value);
    this.setState({
      display: this.state.display,
      memory: this.state.memory + value,
    });
  };


  calculate = () => {
    console.log("calculateeeee");
    const input = this.state.display;
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
      memory: "",
    });
  };
  backspace = () => {
    console.log("backspace");
    this.setState({
      display: this.state.display.slice(0, -1),
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

  percent = () => {
    console.log("percent");
    this.setState({
      display: this.state.display / 100,
    });
  };

  render() {
    return (
      <div className="calculator">
        <Display
          display={this.state.display}
          result={this.state.result}
          memory={this.state.memory}
        />

        <Buttons handleClick={this.handleClick} />
      </div>
    );
  }
}
