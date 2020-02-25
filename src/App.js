import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="cards">
          <Card />
        </div>
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
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      posts: []
    };
  }
  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ photos: json }));

    console.log(this.state);
  }
  render() {
    const { photos } = this.state;
    return photos.map(photo => (
      <article className="card">
        <div>
          <img src={photo.url} className="image" alt="card" />
          <div>
            <div className="card-title">{photo.title}</div>
            <div>
              <span className="card-album">{photo.albumId}</span>
              <span className="card-body">{photo.title}</span>
            </div>
          </div>
        </div>
      </article>
    ));
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
