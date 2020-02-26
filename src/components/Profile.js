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
      <article className="App">
        <div className="profile">
          <img src={me} className="profile-image" alt="card" />
          <div>
            <div className="profile-title">{user.name}</div>
            <div className="info">
              <p className="info-item">
                <i class="fa fa-user info"></i>
                {user.username}
              </p>
              <p className="info-item">
                <i class="fa fa-envelope info"></i>
                {user.email}
              </p>
              <p className="info-item">
                <i class="fa fa-phone info"></i>
                {user.phone}
              </p>
              <p className="info-item">
                <i class="fa fa-globe info"></i>
                {user.website}
              </p>
            </div>
            <div className="info">
              <p className="company">{user.company.name}</p>
              <p className="info-item">
                <i class="fas fa-check-square"></i>
                {user.company.catchPhrase}
              </p>
              <p className="info-item">
                <i class="fas fa-check-square"></i>
                {user.company.bs}
              </p>
            </div>
            <div className="btn">
              <button className="btn-primary">Profiles</button>
              <button className="btn-secondary">Albums</button>
            </div>
          </div>
        </div>
      </article>
    ));
  }
}

export default Profile;
