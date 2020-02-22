import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import me from './me.jpg';

var data = {
  name: 'Michael Leonard',
  imgURL: me,
  hobbyList: ['Backpacking', 'Going to the movies', 'Playing videogames'],
  testvar: 'This is a test',
  education: {
    name: 'Towson University',
    degree: 'B.S. of Computer Science',
    honors: ['Cum Laude', "Dean's List /(all semesters/)"],
    from: '01/08/2017',
    to: '01/12/2020'
  }
};

ReactDOM.render(<App data={data} />, document.getElementById('root'));
