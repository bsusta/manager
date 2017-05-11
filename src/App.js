import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
          <LoginForm />
      </Provider>
    );
  }
}

export default App;
