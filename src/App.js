import React, { Component } from 'react';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import firebase from '@firebase/app';
import '@firebase/auth';
import Router from './Router';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export class App extends Component {
  componentWillMount = () => {
    const config = {
      //firebase database credentials
    };

    firebase.initializeApp(config);
  };

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
