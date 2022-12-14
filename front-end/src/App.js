import React, { useState, useMemo } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import RedirectComponent from './components/RedirectComponent';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import MyContext from './Context';
import Orders from './pages/Orders';
import Checkout from './pages/Checkout';
import Details from './pages/Details';

const user = localStorage.getItem('user');
const parse = JSON.parse(user);

function App() {
  const [storage, setStorage] = useState(parse);
  const [orderDetails, setOrderDetails] = useState([]);

  const value = useMemo(() => ({
    storage,
    setStorage,
    orderDetails,
    setOrderDetails,
  }), [orderDetails, storage]);

  return (
    <MyContext.Provider
      value={ value }
    >
      <Routes>
        <Route
          exact
          path="/"
          element={
            !user
              ? <Navigate to="/login" />
              : <RedirectComponent />
          }
        />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/customer/products" element={ <Products /> } />
        <Route exact path="/customer/orders" element={ <Orders /> } />
        <Route exact path="/admin/manage" element={ <Admin /> } />
        <Route exact path="/seller/orders" element={ <Orders /> } />
        <Route exact path="/customer/checkout" element={ <Checkout /> } />
        <Route exact path="/customer/orders/:id" element={ <Details /> } />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
