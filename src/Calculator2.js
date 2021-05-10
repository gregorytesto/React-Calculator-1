import React, { Component } from "react";
import "./Calculator.css";
import Buttons from "./Buttons";
import Display from "./Display";

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      // display: 0,
      // memory: "",
      // result: "",
    };

   
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

    // if (this.clearDisplay) {
    //   if (this.state.display !== "0" && value === "0") {
    //     this.setState({
    //       display: "0",
    //       memory: "",
    //     });
    //   }
    //   if (value !== "0") {
    //     this.setState({
    //       memory: value,
    //       display: value,
    //     });
    //   }
    //   if (this.waitingInput) {
    //     this.secondNumber = this.state.memory;
    //   } else if (!this.waitingInput && !this.completed) {
    //     this.firstNumber = this.state.memory;
    //   } else if (!this.waitingInput && this.completed && this.equalSign) {
    //     this.firstNumber = this.state.memory;
    //   } else {
    //     this.secondNumber = this.state.memory;
    //   }
    // } else {
    //   this.setState({
    //     memory: [...this.state.memory, value],
    //     display: this.state.memory,
    //   });
    //   if (this.waitingInput) {
    //     this.secondNumber = this.state.memory;
    //   } else {
    //     this.firstNumber = this.state.memory;
    //   }
    // }

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
      memory: this.state.memory + value,
    })

    // this.waitingInput = true;
    // this.operator = value;
    // this.completed = false;
    // this.equalSign = false;
    // this.clearDisplay = true;

    // if (this.firstNumber === 0) {
    //   this.firstNumber = this.state.memory
    // } else if (this.firstNumber && this.secondNumber) {
    //   this.waitingInput = true;
    //   this.calculate()
    // }
  };

  calculate = () => {
    console.log("calculateeeee");
   const input = this.state.memory
   if (input.includes("+")) {
     const arr = input.trim().split("+")
     const firstNum = Number(arr[0])
     const secondNum = Number(arr[1])
     const sum = Number(firstNum + secondNum)
     console.log(sum)
     this.setState({
       result: sum
     })
   } else if (input.includes("-")) {
    const arr = input.trim().split("+")
    const firstNum = Number(arr[0])
    const secondNum = Number(arr[1])
    const sum = Number(firstNum - secondNum)
    console.log(sum)
    this.setState({
      result: sum
    })
  }  else if (input.includes("*")) {
    const arr = input.trim().split("+")
    const firstNum = Number(arr[0])
    const secondNum = Number(arr[1])
    const sum = firstNum * secondNum
    console.log(sum)
    this.setState({
      result: sum
    })
  } else if (input.includes("/")) {
    const arr = input.trim().split("+")
    const firstNum = Number(arr[0])
    const secondNum = Number(arr[1])
    const sum = Number(firstNum / secondNum)
    console.log(sum)
    this.setState({
      result: sum
    })
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
      memory: "",
    });
  };
  backspace = () => {
    console.log("backspace");
    this.setState({
      display: this.state.display.slice(0, -1),
      memory: this.state.memory.slice(0, -1),
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
