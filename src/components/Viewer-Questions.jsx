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
        <div className="text-center col-md-4 col-md-offset-4">
          <a href="/#/thanks"><button className="btn start">Finish Poll</button></a>
        </div>
      </div>
    );
  }
}

export default Questions;
