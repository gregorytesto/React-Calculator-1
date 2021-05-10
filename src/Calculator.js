import React, { Component } from "react";
import "./Calculator.css";
import Buttons from "./Buttons";
import Display from "./Display";

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      input: "", 
      prevInput: "", 
      operator: "", 
      result: "", 
      addNum: true,
      dot: false

    };
    this.numbers = "1234567890"
    this.operands = "-+*/"

   
  }

  handleClick = (e) => {
    let value = e.target.value;
    if (value === "sign") {
      this.changeSign();
    } else if (value === "reset") {
      this.reset();
    } else if (value === ".") {
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


  dot = () => {
    console.log("dot")
    if(!this.state.dot) {
      this.setState({
        input: this.state.input + ".",
        dot: true
      })
    }
    
    console.log(this.state.input)
    console.log(this.state.dot)
    
  };



  handleNumber = (value) => {
    console.log("handle number");

    if (this.state.addNum) {
      this.setState({
        input: value, 
        addNum: false
      })
    } else {
      this.setState({
        input: this.state.input + value
      })
    }

    // if (this.state.display === 0) {
    //   this.setState({
    //     display: value,
    //     memory: value,
    //   });
    // } else {
    //   this.setState({
    //     display: this.state.display + value,
    //     memory: this.state.memory + value,
    //   });
    // }
  };



  handleOperator = (value) => {
    console.log("handle operator");
    console.log(value);


    if(this.state.prevInput === "") {
       this.setState({
      prevInput: this.state.input,
      operator: value,
      addNum: true,
      dot: false,

    })
    }
    if (this.state.prevInput && this.state.input) {
      this.calculate()

    }
   
  
  };

  calculate = () => {
    console.log("calculateeeee");
    const { input, prevInput, operator } = this.state
  if (operator === "+") {
    this.setState({
      result: parseFloat(prevInput) + parseFloat(input), 
      addNum: true,
      input: "",
      
    })
   
  } else if (operator === "-") {
    this.setState({
      result: parseFloat(prevInput) - parseFloat(input),
      addNum: true,
      input: ""
    });
   
  } else if (operator === "*") {
    this.setState({
      result: parseFloat(prevInput) * parseFloat(input),
      addNum: true,
      input: "",
    });
   
  } else if (operator === "/") {
    this.setState({
      result: parseFloat(prevInput) / parseFloat(input),
      addNum: true,
    });
  }

  this.setState({
    prevInput: this.state.result
  })
  };


  


  reset = () => {
    console.log("reset");
    this.setState({
      input: "", 
      prevInput: "", 
      operator: "", 
      result: "",
      addNum: true, 
      dot: false
    });
  };


  backspace = () => {
    console.log("backspace");
    console.log(this.state.input)
    if (this.state.input) {
      this.setState({
      input: this.state.input.toString().slice(0, -1),
     
    });
    }
    
  };



  changeSign = () => {
    console.log("change sign");

if (this.state.input) {
  this.setState({
    input: parseFloat(this.state.input) * -1
  })
}
  
  };



  percent = () => {
    console.log("percent");
    this.setState({
      input: parseFloat(this.state.input) / 100,
    });
  };




  render() {
    return (
      <div className="wrapper">
      <div className="calculator">
        <Display
         input={this.state.input || "0"}
         prevInput={this.state.prevInput}
         result={this.state.result}

        />

        <Buttons handleClick={this.handleClick} />
      </div>
      </div>
    );
  }
}
