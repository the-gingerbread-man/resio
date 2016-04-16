import React from 'react';
import IndividualGraph from './Presenter-IndividualGraph.jsx';

class Graphs extends React.Component {
  render() {
    const questionsAnswered = this.props.answerState.map(
      question => {
        return (<IndividualGraph question={question} />);
      });

    return (
      <div id="">
        {questionsAnswered}
      </div>
    );
  }
}

export default Graphs;
