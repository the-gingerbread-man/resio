import React from 'react';
import ReactDOM from 'react-dom';
const socket = io();

class Choice extends React.Component{

  submitAnswer(qIdentifier,cIdentifier) {
    var response = ('Carlos.'+'MyPoll.'+qIdentifier+'.'+cIdentifier).toString();
    console.log(response);
      //socket.emit('viewerAnswer', response);
      socket.emit('viewerAnswer', response);
  }

  render () {
    var question = '';
    if(this.props.qType === 'multipleChoice') {
      return (
        <div id="">
          <button className="btn btn-default res-btn" onClick={(event) => this.submitAnswer(this.props.qIdentifier,this.props.cIdentifier)}>{this.props.qChoice.choiceText}</button>
        </div>
      );
    }
    else {
      return (
        <div id="">
          <div className="row thumb-answers">
            <i className="fa fa-thumbs-up fa-5x"></i>
            <i className="fa fa-thumbs-down fa-5x"></i>
          </div>
        </div>
      );
    }
  }
}

export default Choice;
