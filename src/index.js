import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderHtml from './HeaderHtml.js';
import Header from './Header.js';
import Footer from './Footer.js';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
