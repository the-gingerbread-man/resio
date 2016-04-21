import React from 'react';
import IndividualGraph from './Presenter-IndividualGraph.jsx';

class Graphs extends React.Component {

  render () {
    //map over array of questions
    //send down each individual object and set props that take note of cType, question text, and choices array
    var choices = this.props.questions.map((question, i) => {
      return <IndividualGraph key= {i} cType={question.cType} question={question.question} qChoices={question.choices} />
    });

    return (
      <div id="">
      	{choices}
      </div>
    );
  }
}

export default Graphs;
