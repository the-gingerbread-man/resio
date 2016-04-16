import React from 'react';
import Graphs from './Presenter-Graphs.jsx';
import rd3 from 'react-d3';
const socket = io();

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    const self = this;
    this.state = {
      'Carlos.MyPoll.0.0': 0,
      'Carlos.MyPoll.0.1': 0,
      'Carlos.MyPoll.0.2': 0,
      'Carlos.MyPoll.0.3': 0,
      'Carlos.MyPoll.1.0': 0,
      'Carlos.MyPoll.1.1': 0,
      'Carlos.MyPoll.1.2': 0,
      'Carlos.MyPoll.1.3': 0,
        // questions:
        // [ { qID: 0,
        //      questionText: 'Who has the coolest scratch project?',
        //      choices: [  {answered: '', choiceText: 'Daniel', selected: false},
        //                  {answered: '', choiceText: 'Dave', selected: false},
        //                  {answered: '', choiceText: 'Alex', selected: false},
        //                  {answered: '', choiceText: 'Carlos', selected: false}
        //                ],
        //     },
        //   { qID: 1,
        //       questionText: 'Who is the coolest Codesmith staff member?',
        //       choices: [ {answered: '', choiceText: 'Victoria', selected: false},
        //                  {answered: '', choiceText: 'Hira', selected: false},
        //                  {answered: '', choiceText: 'Andy', selected: false},
        //                  {answered: '', choiceText: 'DavcID', selected: false}
        //                  ],
        //     }
        // ],
    };

    socket.on('serverResponse', data => {
      const answerIncrease = { data: self.state[data]++ };
      self.setState(answerIncrease);
    });
  }

  render() {
    return (
      <div id="">
      <h5>Showing Responses</h5>
        Daniel: {this.state['Carlos.MyPoll.0.0']}
        Dave: {this.state['Carlos.MyPoll.0.1']}
        Alex: {this.state['Carlos.MyPoll.0.2']}
        Carlos: {this.state['Carlos.MyPoll.0.3']}
      </div>
    );
  }
}

export default Dashboard;
