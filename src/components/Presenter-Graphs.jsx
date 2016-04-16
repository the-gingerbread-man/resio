import React from 'react';
import IndividualGraph from './Presenter-IndividualGraph.jsx';
import rd3 from 'react-d3';

var BarChart = rd3.BarChart;
var PieChart = rd3.PieChart;

class Graphs extends React.Component {

  render () {
  	var q1 = [
		  {label: 'Votes', values: [
		  {x: 'Daniel', y: this.props.viewerResponse['Carlos.MyPoll.0.0']},
		  {x: 'Dave', y: this.props.viewerResponse['Carlos.MyPoll.0.1']},
		  {x: 'Alex', y: this.props.viewerResponse['Carlos.MyPoll.0.2']},
		  {x: 'Carlos', y: this.props.viewerResponse['Carlos.MyPoll.0.3']}]}
		  ];

	var res1 = this.props.viewerResponse['Carlos.MyPoll.1.0'];
	var res2 = this.props.viewerResponse['Carlos.MyPoll.1.1'];
	var res3 = this.props.viewerResponse['Carlos.MyPoll.1.2'];
	var res4 = this.props.viewerResponse['Carlos.MyPoll.1.3'];
	var total = res1 + res2 + res3 + res4;

	var q2 = [{
    	label: 'Victoria', value: ((res1/total)*100).toFixed(2)},
    	{label: 'Hira', value: ((res2/total)*100).toFixed(2)},
    	{label: 'Andy', value: ((res3/total)*100).toFixed(2)},
    	{label: 'David', value: ((res4/total)*100).toFixed(2)}
    	];
    // const questionsAnswered = this.props.answerState.map((question) => {
    //   return <IndividualGraph question={question} />
    // });
    return (
      <div id="">
      <BarChart
        data={q1}
        width={500}
        height={200}
        fill={'#3182bd'}
        title='Bar Chart'
      />
      <PieChart
	    data={q2}
	    width={400}
	    height={400}
	    radius={100}
	    innerRadius={20}
	    sectorBorderColor="white"
	    title="Pie Chart"
	  />                
      </div>
    );
  }
}

export default Graphs;
