import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import MyContext from '../Context';
import loginRequest from '../utils/request';
import handleUrl from '../utils/handleUrl';

const VALIDATE_EMAIL = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const six = 6;

export default function Login() {
  const navigate = useNavigate();
  const { setStorage } = useContext(MyContext);
  const [user, setUser] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorRequest, setErrorRequest] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [navigateRoute, setNavigateRoute] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    const regex = VALIDATE_EMAIL.test(user.email);
    if (user.password.length >= six && regex) {
      return setIsDisabled(false);
    }
    return setIsDisabled(true);
  }, [user]);

  const verifyNavigateRoute = (role) => {
    setNavigateRoute(handleUrl(role));
  };

  const handleLogin = async () => {
    try {
      const request = await loginRequest(user.email, user.password);
      localStorage.setItem('user', JSON.stringify(request));
      setStorage(request);
      verifyNavigateRoute(request.role);
      setIsLogged(true);
    } catch (e) {
      setErrorRequest(true);
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
            data-testid="common_login__input-email"
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
            data-testid="common_login__input-password"
            id="password"
            type="password"
            name="password"
            value={ user.password }
            placeholder="***********"
            onChange={ handleChange }
          />
        </label>
        <button
          data-testid="common_login__button-login"
          id="login"
          name="enter"
          type="button"
          disabled={ isDisabled }
          onClick={ handleLogin }
        >
          {' '}
          LOGIN
          {' '}
        </button>
        <button
          data-testid="common_login__button-register"
          id="register"
          name="register"
          type="button"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </button>
        {errorRequest && (
          <p data-testid="common_login__element-invalid-email">
            Email ou senha inválidos
          </p>
        )}
      </div>
    </section>
  );
}
