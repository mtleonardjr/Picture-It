import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile data={this.props.data} />
      </div>
    );
  }
}

class Profile extends Component {
  render() {
    //const data = this.props.data;
    return (
      <div className="cards">
        <div className="card a">a</div>
        <div className="card b">b</div>
        <div className="card c">c</div>
        <div className="card d">d</div>
        <div className="card e">e</div>
        <div className="card f">f</div>
      </div>
    );
  }
}

/*
class Hobbys extends Component {
  render() {
    const data = this.props.data;

    return (
      <div className="Hobbys">
        <p>{data.hobbyList[0]}</p>
        <p>{data.hobbyList[1]}</p>
        <p>{data.hobbyList[2]}</p>
      </div>
    );
  }
}

*/

export default App;
