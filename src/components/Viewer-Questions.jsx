import React from 'react';
import ReactDOM from 'react-dom';
import QuestionContainer from './Viewer-QuestionContainer.jsx';

class Questions extends React.Component{

  getInitialState() {
    return {
      0: { qID: '',
        questionText: 'Who has the coolest scratch project?',
        choices: [ {cID: '', choiceText: 'Daniel', selected: false}, {cID: '', choiceText: 'Dave', selected: false},
                   {cID: '', choiceText: 'Alex', selected: false}, {cID: '', choiceText: 'Carlos', selected: false} ]
      },

      1: { qID: '',
        questionText: 'Who is the coolest Codesmith staff member?',
        choices: [ {cID: '', choiceText: 'Victoria', selected: false}, {cID: '', choiceText: 'Hira', selected: false},
                   {cID: '', choiceText: 'Andy', selected: false}, {cID: '', choiceText: 'DavcID', selected: false} ]
      }
    };
  }

  updateQuestion() {

  }

  render () {
    return (
      <div id="">
        <QuestionContainer questionState={this.state} updateQuestion= {this.updateQuestion}/>
      </div>
    );
  }
}

export default Questions;
