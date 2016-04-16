import React from 'react';
import ReactDOM from 'react-dom';
//const socket = io();

class Choice extends React.Component{

  submitAnswer(qIdentifier,cIdentifier) {
    var response = ('Carlos.'+'MyPoll.'+qIdentifier+'.'+cIdentifier).toString();
    console.log(response);
      //socket.emit('viewerAnswer', response);
  }

  render () {
    return (
      <div id="">
        <button onClick={(event) => this.submitAnswer(this.props.qIdentifier,this.props.cIdentifier)}>{this.props.qChoice.choiceText}</button>
      </div>
    );
  }
}

export default Choice;
