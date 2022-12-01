import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '../utils/request';
import verify from '../utils/redirect';

const six = 6;

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);

  async function start() {
    const path = await verify();
    switch (path) {
    case 'admin':
      navigate('/admin/manage');
      break;
    case 'seller':
      navigate('/seller/orders');
      break;
    case 'customer':
      navigate('/customer/products');
      break;
    default:
      navigate(path);
    }
    // if (path.role === 'admin') {
    //   navigate(`/${path.role}/manage`);
    // }
    // if (path.role === 'seller') {
    //   navigate(`/${path.role}/orders`);
    // }
    // if (path.role === 'customer') {
    //   navigate(`/${path.role}/products`);
    // }
  }

  useEffect(() => {
    start();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });

    const VALIDATE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (user.password.length > six
      && (VALIDATE_EMAIL.test(user.email))
    ) return setIsDisabled(false);

    if (user.password.length < six
      || !(VALIDATE_EMAIL.test(user.email))
    ) return setIsDisabled(true);
  };

  async function handleClick() {
    const data = await loginRequest(user);
    localStorage.setItem('user', JSON.stringify(user));
    if (data.role === 'seller') navigate(`/${data.role}/orders`);
    if (data.role === 'costumer') navigate(`/${data.role}/products`);
    if (data.role === 'admin') navigate(`/${data.role}/manage`);
  }

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
          onClick={ handleClick }
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
          onClick={ () => navigate.push('/register') }
        >
          Ainda não tenho conta
          Login
        </button>

        <button
          datatestid="common_login__button-register"
          id="register"
          name="register"
          type="button"
          onClick={ () => navigate.push('/register') }
        >
          {' '}
          Registrar
          {' '}
        </button>
      </div>
    </section>
  );
}
