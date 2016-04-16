import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './Viewer-Questions.jsx';

class QuestionApp extends React.Component{

  constructor(props) {
    super(props);
    this.state = { questions:
        [ { qID: '',
             questionText: 'Who has the coolest scratch project?',
             choices: [ {cID: '', choiceText: 'Daniel', selected: false}, {cID: '', choiceText: 'Dave', selected: false},
                         {cID: '', choiceText: 'Alex', selected: false}, {cID: '', choiceText: 'Carlos', selected: false} ]
            },

          { qID: '',
              questionText: 'Who is the coolest Codesmith staff member?',
              choices: [ {cID: '', choiceText: 'Victoria', selected: false}, {cID: '', choiceText: 'Hira', selected: false},
                         {cID: '', choiceText: 'Andy', selected: false}, {cID: '', choiceText: 'DavcID', selected: false} ]
            } ]
      };
  }

  getInitialState() {
  //   return {
  //
  // }
  return { question: answer};
}

  updateQuestion() {

  }


  render () {
    return (
      <div id="">
        <Questions questionState={this.state.questions} updateQuestion= {this.updateQuestion}/>
      </div>
    );
  }
}

export default QuestionApp;
