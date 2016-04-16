import React from 'react';
const socket = io();

class Choice extends React.Component {

  submitAnswer(qIdentifier, cIdentifier) {
    const response = `Carlos.MyPoll.${qIdentifier}.${cIdentifier}`;
    socket.emit('viewerAnswer', response);
  }

  render() {
    return (
      <div id="">
        <button onClick={ this.submitAnswer.call(this,
                          this.props.qIdentifier,
                          this.props.cIdentifier)
                        }
        >
        { this.props.qChoice.choiceText }
        </button>
      </div>
    );
  }
}

export default Choice;
