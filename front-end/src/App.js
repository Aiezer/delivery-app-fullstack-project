import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import RedirectComponent from './components/RedirectComponent';
import Login from './pages/Login';
// import Register from './pages/Register';

function App() {
  const user = localStorage.getItem('user');
  return (

    <Routes>
      <Route
        exact
        path="/"
        element={
          user
            ? <Navigate to="/login" />
            : <RedirectComponent />
        }
      />
      <Route exact path="/login" element={ <Login /> } />
      {/* <Route exact path="/register" component={ Register } /> */}
    </Routes>
  );
}

export default App;
