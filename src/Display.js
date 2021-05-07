
import "./Display.css";




import React, { Component } from 'react'

export default class Display extends Component {
    constructor(props) {
        super(props)

    }
    formatNumber = (string) => {
        if (string.length === 0) {
          return "0";
        } else {
            let newString = Intl.NumberFormat().format(string);
            return newString
        }
      };
    render() {
        return (
            
                 <div className="display">
      <p>{this.formatNumber(this.props.display)}</p>
      <p>{this.props.result}</p>
      <p>memory: {this.props.memory}</p>
    </div>
            
        )
    }
}
