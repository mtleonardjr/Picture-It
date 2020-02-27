import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ users: json }));
  }
  render() {
    const { users } = this.state;
    return users.map(user => (
      <div className="App">
        <article className="profile-cards">
          <div className="profile-card">
            <div className="profile-items">
              <div className="profile-item">{user.name}</div>
              <div className="profile-item">{user.email}</div>
              <div className="profile-item">{user.address.city}</div>
              <div className="profile-item">{user.address.zipcode}</div>
              <div className="btn">
                <button className="btn-primary">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    ));
  }
}

export default Card;
