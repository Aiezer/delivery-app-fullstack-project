import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
// import Register from './pages/Register';
// import Redirect from './utils/redirect';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route exact path="/login" element={ <Login /> } />
      {/* <Route exact path="/register" component={ Register } /> */}
    </Routes>
  );
}

export default App;
