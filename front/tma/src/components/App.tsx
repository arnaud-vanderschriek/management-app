
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { store } from './state/store';
import { Provider } from 'react-redux';
import  LoginGuard  from './login/LoginGuard';
import './styles/App.css';

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <LoginGuard />
        </Provider>
      </Router>
    );
  }
}

export default App;
