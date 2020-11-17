
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { store } from './state/store';
import { Provider } from 'react-redux';
import './styles/App.css';
import { Login } from './login/Login';

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Login />
        </Provider>
      </Router>
    );
  }
}

export default App;
