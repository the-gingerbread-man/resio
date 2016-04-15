import React from 'react';
import ReactDOM from 'react-dom';

class Graphs extends React.Component{

  render () {
    return (
      <div id="">
        <p>{this.props.answerState[0][1]}</p>
        <p>{this.props.answerState[1][2]}</p>
        <p>{this.props.answerState[2][3]}</p>
        <p>{this.props.answerState[3][4]}</p>
      </div>
    );
  }
}

export default Graphs;
