import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import me from './me.jpg'


var data = {
    name: 'Michael Leonard',
    imgURL: me,
    hobbyList: ['Backpacking',
                'Going to the movies',
                'Playing videogames']
}

ReactDOM.render(<App data={data}/>, document.getElementById('root'));



