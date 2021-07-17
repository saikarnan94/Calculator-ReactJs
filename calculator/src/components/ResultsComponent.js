import React, {Component} from 'react';
import '../App.css';

class ResultsComponent extends Component {
  render() {
    let {result} = this.props;
    return (
      <div className="Results-section">
        <h1>{result}</h1>


      </div>
    );
  }
}

export default ResultsComponent;
