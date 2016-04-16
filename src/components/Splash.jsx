import React from 'react';
import ReactDOM from 'react-dom';


class Splash extends React.Component{
  render () {
    return (
      <div className="container container-table">
        <div className="row vertical-center-row">
        <h1 className="display-1 text-center">Poll Your Audience and get Live Feedback with Resio Polls</h1>
          <blockquote className="blockquote">
            <p className="m-b-0">This poll is brilliant!</p>
            <footer className="blockquote-footer">Will Sentance <cite title="Source Title">CTO Codesmith</cite></footer>
          </blockquote>
          <div className="text-center col-md-4 col-md-offset-4">
            <a href="/#/dash"><button className="btn start">Create Poll</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
