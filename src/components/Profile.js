import React, { Component } from 'react';

class Profile extends Component {
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

    const user = users.slice(0, 1);
    return user.map(user => (
      <article>
        <div className="card-title">{user.name}</div>
      </article>
    ));
  }
}

export default Profile;
