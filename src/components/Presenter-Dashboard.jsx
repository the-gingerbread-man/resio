import React from 'react';
import Graphs from './Presenter-Graphs.jsx';
const socket = io();

class Dashboard extends React.Component{

  constructor(props) {
    super(props);
    this.state = {questions: []}

    //needed to retain the value of 'this' because it's within the socket callback
    //we change a value in the 'choices' array based on an event called 'serverResponse'
    //'serverResponse' is being emitted from the server
    //need to JSON parse the data coming from the socket
    //then use that data to traverse the data structure and change the state
    //see server.js for the structure of the data
    var self = this;
    socket.on('serverResponse', function(data) {
      var parsedData = JSON.parse(data);
      var choiceMade = parsedData.choice;
      self.state.questions[parsedData.q].choices[0][choiceMade]++;
      self.setState(self.state);
    });
  }
  
  //make a call to the server to grab the questions
  //set those questions as the state and send them down to the next component
  componentWillMount() {
    $.ajax('/api/questions').done( data => {
      this.setState(data);
    })
  }

  render () {

    return (
      <div>
      <h5>Showing Responses</h5>
      <Graphs questions={this.state.questions} />
      </div>
    );
  }
}

export default Dashboard;
