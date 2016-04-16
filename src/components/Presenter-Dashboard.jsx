import React from 'react';
import ReactDOM from 'react-dom';
import Graphs from './Presenter-Graphs.jsx';
const socket = io();


class Dashboard extends React.Component{

constructor(props) {
  super(props);
  socket.on('serverResponse', function(data) {
    data.split('.').map(el => console.log(el));
  });
    this.state = { questions:
        [ { qID: 0,
             questionText: 'Who has the coolest scratch project?',
             choices: [ {answered: '', choiceText: 'Daniel', selected: false}, {answered: '', choiceText: 'Dave', selected: false},
                         {answered: '', choiceText: 'Alex', selected: false}, {answered: '', choiceText: 'Carlos', selected: false} ]
            },
          { qID: 1,
              questionText: 'Who is the coolest Codesmith staff member?',
              choices: [ {answered: '', choiceText: 'Victoria', selected: false}, {answered: '', choiceText: 'Hira', selected: false},
                         {answered: '', choiceText: 'Andy', selected: false}, {answered: '', choiceText: 'DavcID', selected: false} ]
            } ]
      };
    }

  updateState() {
    // socket.on('serverResponse', function(data) {
    //   console.log('Server Response: ' + data);
    // });
  }

  render () {
    return (
      <div id="">
      <h5>Showing Responses</h5>
        <Graphs answerState={this.state.questions} />
      </div>
    );
  }
}

export default Dashboard;
