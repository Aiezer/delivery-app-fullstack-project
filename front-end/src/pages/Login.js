import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import loginRequest from '../utils/request';
// import verify from '../utils/redirect';

const minLength = 6;

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorRequest, setErrorRequest] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [navigateRoute, setNavigateRoute] = useState('');

  // async function start() {
  //   const path = await verify();
  //   switch (path) {
  //   case 'admin':
  //     navigate('/admin/manage');
  //     break;
  //   case 'seller':
  //     navigate('/seller/orders');
  //     break;
  //   case 'customer':
  //     navigate('/customer/products');
  //     break;
  //   default:
  //     navigate(path);
  //   }
  //   // if (path.role === 'admin') {
  //   //   navigate(`/${path.role}/manage`);
  //   // }
  //   // if (path.role === 'seller') {
  //   //   navigate(`/${path.role}/orders`);
  //   // }
  //   // if (path.role === 'customer') {
  //   //   navigate(`/${path.role}/products`);
  //   // }
  // }

  // useEffect(() => {
  //   start();
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });

    const VALIDATE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (user.password.length > minLength
      && VALIDATE_EMAIL.test(user.email)) { return setIsDisabled(false); }

    if (user.password.length < minLength || !VALIDATE_EMAIL.test(user.email)) {
      return setIsDisabled(true);
    }
  };

  const verifyNavigateRoute = (role) => {
    if (role === 'customer') {
      setNavigateRoute(`/${role}/products`);
    }
    if (role === 'seller') {
      setNavigateRoute(`/${role}/orders`);
    }
    if (role === 'administrator') {
      setNavigateRoute(`/${role}/manage`);
    }
  };

  const handleLogin = async () => {
    try {
      const { id, role, token, name } = await loginRequest(email, password);
      const saveUser = { name, email, role, token };
      setErrorRequest('');
      localStorage.setItem('user', JSON.stringify({ user: saveUser }));
      localStorage.setItem('userId', JSON.stringify({ userId: id }));
      setIsLogged(true);
      verifyNavigateRoute(role);
    } catch (e) {
      setErrorRequest('Email ou senha inválidos');
      console.log(e);
    }
  };

  if (isLogged) return <Navigate to={ navigateRoute } />;

  return (
    <section>
      <div>
        <img src="" alt="generics delivery" />
        <h1>GENERICS DELIVERY</h1>
      </div>
      <div>
        <label htmlFor="email">
          Login
          <input
            datatestid="common_login__input-email"
            id="email"
            type="text"
            name="email"
            value={ user.email }
            placeholder="generics@delivery.com.br"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            datatestid="common_login__input-password"
            id="password"
            type="password"
            name="password"
            value={ user.password }
            placeholder="***********"
            onChange={ handleChange }
          />
        </label>
        <button
          datatestid="common_login__button-login"
          id="login"
          name="enter"
          type="button"
          disabled={ isDisabled }
          onClick={ handleLogin }
        >
          LOGIN
        </button>
        <button
          datatestid="common_login__button-login"
          id="register"
          name="register"
          type="button"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </button>
        {errorRequest && (
          <div data-testid="common_login__element-invalid-email">
            { errorRequest }
          </div>
        )}
      </div>
    </section>
  );
}
