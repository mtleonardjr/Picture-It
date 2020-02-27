import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Profile from './components/Profile';
import Profiles from './components/Profiles';
class App extends Component {
  render() {
    return (
      /*<div className="App">
        <div className="cards">
          <Card />
        </div>
      </div> */
      /*<Profile />*/

      <div className="App">
        <div className="cards">
          <Profiles />
        </div>
      </div>
    );
  }
}

export default App;
