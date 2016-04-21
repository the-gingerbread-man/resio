import React from 'react';
import ReactDOM from 'react-dom';
import QuestionContainer from './Viewer-QuestionContainer.jsx';

//This component maps over all of the questions in the data returned from the server.
class Questions extends React.Component{
  render () {
    const questions = this.props.questionState.map((question, i) => {

//as we are mapping, the qIdentifier will be the index of the questions array, whereas the
//question prop will be the object in the array we are mapping over.
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
