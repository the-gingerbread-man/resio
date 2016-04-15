import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Link, Redirect, Route, Router } from 'react-router';
import Questions from './components/Viewer-Questions.jsx';

class App extends React.Component {

  render() {
    return (
      <div id="">
        <h1>Welcome Poll App</h1>

        <nav>
          <Link to="Dashboard"><h3>Dashboard</h3></Link>
          <Link to="Viewer"><h3>About</h3></Link>
        </nav>

        <p>Welcome to the realtime polling app.</p>

        <Questions />

      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(
  (
    <Router>
      <Route name="Dashboard" path="/dash" component={Dashboard} />
      <Route name="Viewer" path="/viewer" component={Questions} />
      <Route name="About" path="/about" component={About} />
    </Router>
  ),
  document.getElementById('app')
);
