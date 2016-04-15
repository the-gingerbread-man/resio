import React from 'react';
import ReactDOM from 'react-dom';

class Graphs extends React.Component{

  render () {
    return (
      <div id="">
        <p>{this.props.answerState[0].count}</p>
        <p>{this.props.answerState[1].count}</p>
        <p>{this.props.answerState[2].count}</p>
        <p>{this.props.answerState[3].count}</p>
      </div>
    );
  }
}

export default Graphs;
