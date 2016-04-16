import React from 'react';
import ReactDOM from 'react-dom';


class Splash extends React.Component{
  render () {
    return (
      <div className="container container-table">
        <div className="row vertical-center-row">
          <div className="text-center col-md-4 col-md-offset-4">
            <h1>Thumbs Up + Thumbs Down</h1>
            <a href="/#/dash"><button className="btn btn-default start">Go</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
