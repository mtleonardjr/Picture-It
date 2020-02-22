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
    const data = this.props.data;
    return (
      <div class="wrapper">
        <div class="box a">{data.name}</div>
        <div class="box b">
          <img src={data.imgURL} width="500px" alt="Profile" />
        </div>
        <div class="box c">C</div>
        <div class="box d">D</div>
        <div class="box e">e</div>
        <div class="box f">f</div>
        <div class="box g">g</div>
      </div>
    );
  }
}

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

export default App;
