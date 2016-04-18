import React from 'react';
const socket = io();

class Choice extends React.Component {

  submitAnswer(qIdentifier, choice) {
    var response = JSON.stringify({q: qIdentifier, choice: choice});
    console.log(response);
      socket.emit('viewerAnswer', response);
  }

  render () {
    var question = '';
    if(this.props.qType === 'multiple') {
      return (
        <div id="">
          <button className="btn btn-default res-btn" onClick={(event) => this.submitAnswer(this.props.qIdentifier,this.props.qChoice)}>{this.props.qChoice}</button>
        </div>
      );
    }
    else {
      var thumbChoices = Object.keys(this.props.qChoice);
      console.log(thumbChoices);
      return (
        <div id="">
          <div className="row thumb-answers">
            <i className="fa fa-thumbs-up fa-5x" onClick={(event) => this.submitAnswer(this.props.qIdentifier, thumbChoices[0])}></i>
            <i className="fa fa-thumbs-down fa-5x" onClick={(event) => this.submitAnswer(this.props.qIdentifier, thumbChoices[1])}></i>

          </div>
        </div>
      );
    }
  }
}

export default Choice;
