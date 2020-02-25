import React, { Component } from 'react';
import './App.css';
//import Card from './components/Card';
import Profile from './components/Profile';
class App extends Component {
  render() {
    return (
      /*<div className="App">
        <div className="cards">
          <Card />
        </div>
      </div> */
      <div>
        <Profile />
      </div>
    );
  }
}

export default App;
