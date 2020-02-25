import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }
  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ photos: json }));
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

export default Card;
