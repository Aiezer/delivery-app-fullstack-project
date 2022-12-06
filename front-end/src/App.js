import React, { useState, useMemo } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import RedirectComponent from './components/RedirectComponent';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import MyContext from './Context';

const user = localStorage.getItem('user');
const parse = JSON.parse(user);

function App() {
  const [storage, setStorage] = useState(parse.user);

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
        <Route exact path="/admin/manage" element={ <Admin /> } />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
