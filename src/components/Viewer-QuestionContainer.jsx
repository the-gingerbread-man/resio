import React from 'react';
import ReactDOM from 'react-dom';
import Choice from './Viewer-Choice.jsx';

class QuestionContainer extends React.Component{
  render () {
    console.log('in question container: ', this.props.question);
    const choices = this.props.question.choices.map((choice, i) => {
      return (

          <Choice key= {i} qType={this.props.question.questionType} qIdentifier={this.props.qIdentifier} cIdentifier={i} qChoice={choice} />

      )
    });
    return (
      <div className="container">
        <div className=".col-md-4">
          <div className="panel panel-default panel-wizard">
            <div className="panel-body">
            <h3>{this.props.question.questionText}</h3>
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
