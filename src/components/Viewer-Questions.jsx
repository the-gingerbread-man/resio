import React from 'react';
import ReactDOM from 'react-dom';
import QuestionContainer from './Viewer-QuestionContainer.jsx';

class Questions extends React.Component{
  render () {
    const questions = this.props.questionState.map((question, i) => {
      return <QuestionContainer key= {i} qIdentifier={i} question={question} />
    });
    return (
      <div id="">
        {questions}
      </div>
    );
  }
}

export default Questions;
