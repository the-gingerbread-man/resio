import React from 'react';
import Choices from './Viewer-Choices.jsx';

class QuestionContainer extends React.Component {
  render() {
    const choices = this.props.question.choices.map((choice, i) => {
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
