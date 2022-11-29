import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={ Login } />
    </Switch>
  );
}

export default App;
