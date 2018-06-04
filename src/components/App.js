import React, { Component } from 'react';
import Router from './Router';
import firebase from "@firebase/app";
import "@firebase/firestore";
import './App.css';


class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAyGpdXDHYxiyxlMH1gjq2fCdiFZydmbdk',
            authDomain: 'hall-of-dogs.firebaseapp.com',
            databaseURL: 'https://hall-of-dogs.firebaseio.com',
            projectId: 'hall-of-dogs',
            storageBucket: 'hall-of-dogs.appspot.com',
            messagingSenderId: '331775635960'
        };

        const app = firebase.initializeApp(config);
        firebase.firestore(app)
    }


    render() {
        return (
          <div className="App">
             <Router />
          </div>
        );
    }
}

export default App;
