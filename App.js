import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD63rOqT67MET24H7PIFw0Pc-Txb3wdvb4',
      authDomain: 'manager-795e4.firebaseapp.com',
      databaseURL: 'https://manager-795e4.firebaseio.com',
      projectId: 'manager-795e4',
      storageBucket: 'manager-795e4.appspot.com',
      messagingSenderId: '92724492863'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
