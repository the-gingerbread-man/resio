import React from 'react';
import Graphs from './Presenter-Graphs.jsx';
const socket = io();

class Dashboard extends React.Component{

  constructor(props) {
    super(props);
    this.state = {questions: []}

    var self = this;
    socket.on('serverResponse', function(data) {
      var parsedData = JSON.parse(data);
      var choiceMade = parsedData.choice;
      self.state.questions[parsedData.q].choices[0][choiceMade]++;
      self.setState(self.state);
    });
  }

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
