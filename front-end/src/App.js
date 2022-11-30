import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Redirect from './utils/redirect';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Redirect } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
    </Switch>
  );
}

export default App;
