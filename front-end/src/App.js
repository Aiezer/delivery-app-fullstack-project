import React, { useState, useMemo } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import RedirectComponent from './components/RedirectComponent';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import MyContext from './Context';
import Checkout from './pages/Checkout';

const user = localStorage.getItem('user');
const parse = JSON.parse(user);

function App() {
  const [storage, setStorage] = useState(parse);

  const value = useMemo(() => ({
    storage, setStorage,
  }), [storage]);

  return (
    <MyContext.Provider
      value={ value }
    >
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
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/customer/products" element={ <Products /> } />
        <Route exact path="/admin/manage" element={ <Admin /> } />
        <Route exact path="/customer/checkout" element={ <Checkout /> } />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
