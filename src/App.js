import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card data={this.props.data} />
      </div>
    );
  }
}

/*
class Profile extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="cards">
        <article className="card a">
          <img src={data.imgURL} className="image" />
          <div>TEST</div>
        </article>
        <article className="card b">b</article>
        <article className="card c">c</article>
        <article className="card d">d</article>
        <article className="card e">e</article>
        <article className="card f">f</article>
      </div>
    );
  }
}
*/

class Card extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="cards">
        <article className="card a">
          <img src={data.imgURL} className="image" />
          <div>TEST</div>
        </article>
        <article className="card b">b</article>
        <article className="card c">c</article>
        <article className="card d">d</article>
        <article className="card e">e</article>
        <article className="card f">f</article>
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
