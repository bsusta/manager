import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import devTools from 'remote-redux-devtools';
import Router from './Router';
import reducers from './reducers';

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
    const enhancer = compose(
      applyMiddleware(ReduxThunk),
      devTools({
        name: 'manager', realtime: true,
      }),
    );
    const store = createStore(reducers, {}, enhancer);
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
