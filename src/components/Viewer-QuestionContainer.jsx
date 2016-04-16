import React from 'react';
import Choice from './Viewer-Choice.jsx';

class QuestionContainer extends React.Component {
  render() {
    const choices = this.props.question.choices.map((choice, i) => {
      return (<Choice key={ i }
                qIdentifier= { this.props.qIdentifier } 
                cIdentifier={ i } 
                qChoice={ choice } 
              />
              );
    });

    return (
      <div id="">
        <h5>{this.props.question.questionText}</h5>
        {choices}
        <button onClick={this.props.updateQuestion}>Next</button>
      </div>
    );
  }
}

export default QuestionContainer;
