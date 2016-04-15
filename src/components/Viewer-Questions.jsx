import React from 'react';
import ReactDOM from 'react-dom';
import QuestionContainer from './Viewer-QuestionContainer.jsx';

class Questions extends React.Component{

  getInitialState() {
    return {sampleData: [
      {
        question: 'Who has the coolest scratch project?',
        choices: [ {choice: 'Daniel', bool: false}, {choice: 'Dave', bool: false},
                   {choice: 'Alex', bool: false}, {choice: 'Carlos', bool: false} ]
      },

      {
        question: 'Who is the coolest Codesmith staff member?',
        choices: [ {choice: 'Victoria', bool: false}, {choice: 'Hira', bool: false},
                   {choice: 'Andy', bool: false}, {choice: 'David', bool: false} ]
      }
    ]};
  }

  upDateQuestion() {

  }

  render () {
    return (
      <div id="">
        <QuestionContainer questionState={this.state} upDateQuestion= {this.upDateQuestion}/>
      </div>
    );
  }
}

export default Questions;
