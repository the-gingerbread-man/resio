import React from 'react';
import ReactDOM from 'react-dom';
import Graphs from './Presenter-Graphs.jsx';

class Dashboard extends React.Component{

//const socket = io();

  getInitialState() {
    const dashboardData = [
      {
        responses: [ {count: 5}, {count: 9},
                   {count: 19}, {count: 10} ]
      },
      {
        responses: [ {count: 17}, {count: 19},
                   {count: 10}, {count: 23} ]
      },
    ];
    return {Questions: dashboardData[0]};
  }

  updateState() {
    //socket.on('newResponse', function(data) {
      console.log(data);
      // this.setState({data});
    });
  }

  render () {
    return (
      <div id="">
      <h5>Showing Graphs</h5>
        <Graphs answerState={this.state.responses} />
      </div>
    );
  }
}

export default Dashboard;
