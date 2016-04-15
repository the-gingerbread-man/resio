import React from 'react';
import ReactDOM from 'react-dom';
import Graphs from './Presenter-Graphs.jsx';

class Dashboard extends React.Component{

//const socket = io();

  getInitialState() {
    const dashboardData = [
      {
        responses: [ {1: 12}, {2: 9},
                   {3: 19}, {4: 3} ]
      },
      {
        responses: [ {1: 17}, {2: 19},
                   {3: 10}, {4: 23} ]
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
