import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './Layout';
import flickerApi from './flickerApi';
import { imagesFromFlicker } from './Images';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Layout content={imagesFromFlicker(flickerApi)} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
