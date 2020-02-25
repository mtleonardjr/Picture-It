import React, { Component } from 'react';
import me from '../photo/pic.jpg';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      photos: []
    };
  }
  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ users: json }));

    const url2 = 'https://jsonplaceholder.typicode.com/photos';
    fetch(url2)
      .then(response => response.json())
      .then(json => this.setState({ photos: json }));
  }
  render() {
    const { users } = this.state;

    const user = users.slice(0, 1);
    return user.map(user => (
      <article className="profile">
        <div>
          <img src={me} className="profile-image" alt="card" />
          <div>
            <div className="profile-title">{user.name}</div>
            <div className="info">
              <p className="info-item">{user.username}</p>
              <p className="info-item">{user.email}</p>
              <p className="info-item">{user.phone}</p>
              <p className="info-item">{user.website}</p>
            </div>
            <div className="info">
              <p className="info-item"></p>
            </div>
          </div>
        </div>
      </article>
    ));
  }
}

export default Profile;
