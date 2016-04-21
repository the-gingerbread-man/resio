import React from 'react';
import Choices from './Viewer-Choices.jsx';

//QuestionContainer component builds the structure of one individual question and maps + creates choice components.
class QuestionContainer extends React.Component {
  render() {
    const choices = this.props.question.choices.map((choice, i) => {

//since we used map, we are returning an array of components. In other words, we are working with multiple
//question components. We do the same thing here with choices, and thus end up passing down multiple choice
//components. We define its props below.

      return (
          <Choices key= {i} qType={this.props.question.qType} qIdentifier={this.props.qIdentifier} cIdentifier={i} qChoice={choice} />
      )
    });

    return (
      <div className="container">
        <div className=".col-md-4">
          <div className="panel panel-default panel-wizard">
            <div className="panel-body">
            <h3>{this.props.question.question}</h3>
            <row>
              {choices}
            </row>
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default QuestionContainer;
