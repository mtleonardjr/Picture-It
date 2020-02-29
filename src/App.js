import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Profile from './components/Profile';
import Profiles from './components/Profiles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="navbar">
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/profiles">Profiles</Link>
            </li>
            <li>
              <Link to="/album">Album</Link>
            </li>
          </ul>

          <Switch>
            {/*Album Route */}
            <Route path="/album">
              <div className="App">
                <div className="cards">
                  <Card />
                </div>
              </div>
            </Route>
            {/*ProfileRoute */}
            <Route exact path="/">
              <Profile />
            </Route>
            <Route to path="/profiles">
              <Profiles />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
