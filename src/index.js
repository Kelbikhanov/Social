import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    { id: 1, message: 'Hi, how are you', likesCount:12},
    { id: 2, message: 'Its my post', likesCount:15},
]

let dialogs = [
    { id: 1,name: 'Ruslan'},
    { id: 2, name: 'Alina'},
    { id: 3, name: 'Nastya'},
    { id: 4, name: 'Maxim'},
    { id: 5, name: 'Sasha'},
    { id: 6, name: 'Maya'}
]
let messages = [
    { id: 1, message: 'Hi'},
    { id: 2, message: 'How are you?'},
    { id: 3, message: 'Yo'}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
