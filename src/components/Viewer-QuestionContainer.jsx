import React from 'react';
import ReactDOM from 'react-dom';
import Choice from './Viewer-Choice.jsx';

class QuestionContainer extends React.Component{

  render () {
    const choices = this.props.questionState.choices.map((choice, i) => {
      return <Choice key={i} qChoice={choice} />
    });
    return (
      <div id="">
        <h5>{this.props.questionState.question}</h5>
        {choices}
        <button onClick={this.props.updateQuestion}></button>
      </div>
    );
  }
}

export default QuestionContainer;
