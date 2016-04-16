import React from 'react';
const socket = io();

class Choice extends React.Component {

  submitAnswer(qIdentifier, cIdentifier) {
    const response = `Carlos.MyPoll.${qIdentifier}.${cIdentifier}`;
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
