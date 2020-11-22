
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { store } from './state/store';
import { Provider } from 'react-redux';
import  LoginGuard  from './login/LoginGuard';
import  LoginForm  from './login/LoginForm';
import './styles/App.css';
import  Dashboard from './dashboard/Dashboard';
import  Users  from './users/Users';
import Admin from './admins/Admin';

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <LoginGuard 
          form={<LoginForm />}
          localToken={localStorage.getItem('test:auth-token')}>
            <Dashboard />
          </LoginGuard>
        </Provider>
      </Router>
    );
  }
}

export default App;
