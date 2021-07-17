import React, {Component} from 'react';
import KeyPadComponent from './components/KeyPadComponent';
import ResultsComponent from './components/ResultsComponent';

import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
        result: ""
    }
}


  calculate = () => {
    var checkResult = ''
    checkResult = this.state.result

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "Error"
      })
  }
};

  onClick = button => {

    if(button === "="){
      this.calculate()
    }
    else{
      this.setState({result: this.state.result + button})
    }
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Simple calculator</h1>
          <div className="result"> 
            <ResultsComponent result={this.state.result} />
          </div>
            <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}


export default App;
