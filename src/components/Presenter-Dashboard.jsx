import React from 'react';
import Graphs from './Presenter-Graphs.jsx';
const socket = io();

class Dashboard extends React.Component{

  constructor(props) {
  super(props);
    this.state = {questions:

      [
        {
          qType: 'bar',
          question: 'Who has the coolest scratch project?',
          choices: [
                    {
                      Alex: 0,
                      Daniel: 0,
                      Dave: 0,
                      Carlos: 0
                    }
                   ]
        },
        {
          qType: 'pie',
          question: 'What is your favorite beer?',
          choices: [
                    {
                      'Stone IPA': 0,
                      'Corona Light': 0,
                      'Guiness': 0,
                      'Sierra Nevada': 0,
                      'Blue Moon': 0,
                      "I don't drink beer, I drink bourbon": 0
                    }
                   ]
        },
        {
          qType: 'bar',
          question: 'What was your favorite company that came to hiring day?',
          choices: [
                    {
                      'Dog Vacay': 0,
                      'Dollar Shave Club': 0,
                      'LA Body Points': 0,
                      Whisper: 0,
                      Procore: 0,
                      ESPN: 0,
                      Ticketmaster: 0
                    }
                   ]
        },
        {
          qType: 'pie',
          question: 'Thumbs Up or Thumbs Down on drinks last Thursday?',
          choices: [
                    {
                      Up: 0,
                      Down: 0
                    }
                   ]
        }
      ]
   };

    var self = this;
    socket.on('serverResponse', function(data) {
      var parsedData = JSON.parse(data);
      var choiceMade = parsedData.choice;
      self.state.questions[parsedData.q].choices[0][choiceMade]++;
      self.setState(self.state);
    });
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
