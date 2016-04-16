import React from 'react';
import ReactDOM from 'react-dom';
import rd3 from 'react-d3';

var BarChart = rd3.BarChart;
var PieChart = rd3.PieChart;

class IndividualGraph extends React.Component{

  render () {
		var graph;
		var title = this.props.question;
		var qType = this.props.qType;
		var eachChoice = this.props.qChoices['0']; 

		if (qType === 'bar') {
			var valueArray = [];
			for (var key in eachChoice) {
				var bar = {x: key, y: eachChoice[key]};
				valueArray.push(bar);
			}
			var dataInfo = [{lable: 'Votes', values: valueArray}];
			var component = <BarChart data={dataInfo} width={1000} height={200} fill={'#3182bd'} title={title} />
		}

		else if (qType === 'pie') {
      var valueArray = [];
      var total = [];
      for (var key in eachChoice) {
      	total.push(eachChoice[key]);
      }
      var newTotal = total.reduce(function(a, b) {return a + b;});
      for (var key in eachChoice) {
      	var piePiece = {label: key, value: (eachChoice[key]*100/newTotal).toFixed(2)}
      	valueArray.push(piePiece);
      }
      var component = <PieChart data={valueArray} width={400} height={400} radius={100} innerRadius={20} sectorBorderColor="white" title={title} />
		}

    return (
      <div id="">
        {component}
      </div>
    );
  }
}

export default IndividualGraph;

