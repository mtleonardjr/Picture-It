import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
      return (
      <div className="App">
      <Profile data={this.props.data}/>
      </div>
      );
  }
}

class Profile extends Component{
  render(){
    const data=this.props.data;
    return(
      <div className="profile">
        <h1>{data.name}</h1>
        <img src={data.imgURL} width="500" />
          <div>
            <b>My Hobbies</b>
          </div>
        <Hobbys data = {this.props.data}/>
      </div>
    );
  }
}

class Hobbys extends Component{
  render(){
    const data = this.props.data;

    return(
      <div className="Hobbys">
      <p>{data.hobbyList[0]}</p>
      <p>{data.hobbyList[1]}</p>
      <p>{data.hobbyList[2]}</p>      
      </div>
    )
  }
}


export default App;
