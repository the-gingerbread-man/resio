import React from 'react';
import ReactDOM from 'react-dom';


class ThanksComponent extends React.Component{
  render () {
    return (
      <div className="container container-table">
        <div className="row vertical-center-row">
        <row className="row-fluid">
          <i className="fa fa-smile-o fa-5x"></i>
          <h1 className="display-1 text-center">Thanks for participating in our poll!</h1>
        </row>
        </div>
      </div>
    );
  }
}

export default ThanksComponent;
