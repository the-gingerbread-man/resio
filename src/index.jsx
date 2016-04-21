<import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Link, Redirect, Route, Router } from 'react-router';
import QuestionApp from './components/Viewer-QuestionApp.jsx';
import Dashboard from './components/Presenter-Dashboard.jsx';
import Splash from './components/Splash.jsx';
import PollForm from './components/Presenter-PollForm.jsx';
import ThanksComponent from './components/Viewer-Thanks.jsx';

class App extends React.Component {
  render() {
    return (
      <div id="">
        <h1>Welcome Poll App</h1>
        <nav>
          <Link to="Dashboard"><h3>Dashboard</h3></Link>
          <Link to="Viewer"><h3>Viewer</h3></Link>
          <Link to="Create"><h3>Create Poll</h3></Link>
        </nav>
        <p>Welcome to the realtime polling app.</p>
      </div>
    );
  }
}

ReactDOM.render(
  (
    <Router>
      <Redirect from="/" to="/splash" />
      <Route name="Create" path="/create" component={PollForm} />
      <Route name="Dashboard" path="/dash" component={Dashboard} />
      <Route name="Viewer" path="/viewer" component={QuestionApp} />
      <Route name="Splash" path="/splash" component={Splash} />
      <Route name="ThanksPage" path="/thanks" component={ThanksComponent} />
    </Router>
  ),
  document.getElementById('app')
);
