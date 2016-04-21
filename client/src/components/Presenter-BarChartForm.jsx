import React from 'react';
import { BarChart } from 'react-d3';

class BarChartForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('New Bar Chart',
                'this.props=', this.props);
    const choices = this.props.data.data.values.map(choice => {
      return <input type="text" value={choice.x} />;
    });
    return (
        <div className="bar_chart_form">
          <BarChart
            data={this.props.data}
            width={500}
            height={200}
            fill={"#3182bd"}
            title="Bar Chart"
          />
          <form className="bar_chart_choices">
            {choices}
            <button onClick={this.props.addChoice} />
          </form>
        </div>
      );
  }
}

export default BarChartForm;

/*

var q1 = [
      {label: 'Votes', values: [
      {x: 'Daniel', y: this.props.viewerResponse['Carlos.MyPoll.0.0']},
      {x: 'Dave', y: this.props.viewerResponse['Carlos.MyPoll.0.1']},
      {x: 'Alex', y: this.props.viewerResponse['Carlos.MyPoll.0.2']},
      {x: 'Carlos', y: this.props.viewerResponse['Carlos.MyPoll.0.3']}]}
      ];

*/
