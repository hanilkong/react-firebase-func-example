import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA7286dIP-OQi_jGetM2JfJ9xX9FoD7UKI",
  authDomain: "jp-db-2018.firebaseapp.com",
  databaseURL: "https://jp-db-2018.firebaseio.com",
  projectId: "jp-db-2018",
  storageBucket: "jp-db-2018.appspot.com",
  messagingSenderId: "555324092244"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
