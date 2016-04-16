import React from 'react';
import ReactDOM from 'react-dom';
import IndividualGraph from './Presenter-IndividualGraph.jsx';
import rd3 from 'react-d3';

var BarChart = rd3.BarChart;

class Graphs extends React.Component{

  render () {
    // const questionsAnswered = this.props.answerState.map((question) => {
    //   return <IndividualGraph question={question} />
    // });
    return (
      <div id="">
      <BarChart
                  data={[
  {label: 'Votes', values: [
  {x: 'Daniel', y: this.props.viewerResponse['Carlos.MyPoll.0.0']}, 
  {x: 'Dave', y: this.props.viewerResponse['Carlos.MyPoll.0.1']}, 
  {x: 'Alex', y: this.props.viewerResponse['Carlos.MyPoll.0.2']}, 
  {x: 'Carlos', y: this.props.viewerResponse['Carlos.MyPoll.0.3']}]}
  ]}
                  width={500}
                  height={200}
                  fill={'#3182bd'}
                  title='Bar Chart'
                />;
      </div>
    );
  }
}

export default Graphs;
