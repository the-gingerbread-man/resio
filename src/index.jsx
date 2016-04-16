import React from 'react';
import ReactDOM from 'react-dom';
const Router = require('react-router').Router
const Route = require('react-router').Route
const Link = require('react-router').Link
const Redirect = require('react-router').Redirect;
import { browserHistory } from 'react-router';
import QuestionApp from './components/Viewer-QuestionApp.jsx';
import Dashboard from './components/Presenter-Dashboard.jsx';

class App extends React.Component {
  render() {
    return (
      <div id="">
        <h1>Welcome Poll App</h1>
        <nav>
          <Link to="Dashboard"><h3>Dashboard</h3></Link>
          <Link to="Viewer"><h3>Viewer</h3></Link>
        </nav>
        <p>Welcome to the realtime polling app.</p>
      </div>
    );
  }
}

ReactDOM.render(
  (
    <Router>
      <Redirect from="/" to="/viewer" />
      <Route name="Dashboard" path="/dash" component={Dashboard} />
      <Route name="Viewer" path="/viewer" component={QuestionApp} />
    </Router>
  ),
  document.getElementById('app')
);
