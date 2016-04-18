import React from 'react';
import IndividualGraph from './Presenter-IndividualGraph.jsx';

class Graphs extends React.Component {

  render () {
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
