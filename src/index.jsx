import React from 'react';
import ReactDOM from 'react-dom';
const Router = require('react-router').Router
const Route = require('react-router').Route
const Link = require('react-router').Link
const Redirect = require('react-router').Redirect;
import { browserHistory } from 'react-router';
import QuestionApp from './components/Viewer-QuestionApp.jsx';
import Dashboard from './components/Presenter-Dashboard.jsx';
import Splash from './components/Splash.jsx';
import ThanksComponent from './components/Viewer-Thanks.jsx';

class App extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}
//Below is our config for React Router. All of the below routes are routes for our views. Our server
//handles all of our api routes. React Router is taking care of linking between and rendering components
//based on where the viewer is.
ReactDOM.render(
  (
    <Router>
      <Redirect from="/" to="/splash" />
      <Route name="Dashboard" path="/dash" component={Dashboard} />
      <Route name="Viewer" path="/viewer" component={QuestionApp} />
      <Route name="Splash" path="/splash" component={Splash} />
      <Route name="ThanksPage" path="/thanks" component={ThanksComponent} />
    </Router>
  ),
  document.getElementById('app')
);
