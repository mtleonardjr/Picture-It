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
      <article className="profile-cards">
        <div className="profile-card"> Test</div>
      </article>
    ));
  }
}

export default Card;
