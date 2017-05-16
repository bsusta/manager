import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCOomcJAJGJJXnPlskon3xmjzJJfG1kcOY',
      authDomain: 'manager-546dd.firebaseapp.com',
      databaseURL: 'https://manager-546dd.firebaseio.com',
      projectId: 'manager-546dd',
      storageBucket: 'manager-546dd.appspot.com',
      messagingSenderId: '1057199920568'
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

export default App;
