import React from 'react';
import ReactDOM from 'react-dom';
//const socket = io();

class Choice extends React.Component{

  submitAnswer() {
      //socket.emit('viewerAnswer', 'Hello World from client');
  }

  render () {
    return (
      <div id="">
        <p>{this.props.qChoice} onClick={this.submitAnswer}</p>
      </div>
    );
  }
}

export default Choice;
