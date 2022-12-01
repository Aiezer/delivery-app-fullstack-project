import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import RedirectComponent from './components/RedirectComponent';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

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
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/admin/manage" element={ <Admin /> } />
    </Routes>
  );
}

export default App;
