import React from 'react';
const socket = io();

//This is the lowest component for our viewer views and is where we render the choices.
class Choice extends React.Component {

//This method takes in the question ID (qIdentifier) and choice (choice) that the user selected
//and prepares the data that'll be sent over the socket back to the server.
  submitAnswer(qIdentifier, choice) {
    let response = JSON.stringify({q: qIdentifier, choice: choice});
      socket.emit('viewerAnswer', response);
  }
  //In our render function, we check the question type. If thumbs, we populate with the Fontawesome thumb icon.
  //Otherwise, we just populate the question container with a button for each choice option.
  //Additionally, we have an onClick event that pushes the question ID and choice text to our
  //submitAnswer function, which handles the communication of the selection through our socket.
  render () {
    let question = '';
    if(this.props.qType === 'multiple') {
      return (
        <div>
          <button className="btn btn-default res-btn" onClick={(event) => this.submitAnswer(this.props.qIdentifier,this.props.qChoice)}>{this.props.qChoice}</button>
        </div>
      );
    }
    else {
      let thumbChoices = Object.keys(this.props.qChoice);
      return (
        <div>
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
