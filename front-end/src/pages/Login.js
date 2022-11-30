import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginRequest from '../utils/request';
import { Redirect } from '../utils/redirect';

const six = 6;

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);

  async function verify() {
    const path = await Redirect();
    navigate(path);
  }

  useEffect(() => {
    verify();
  });

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
    if (data.role === 'seller') navigate.push(`/${data.role}/orders`);
    if (data.role === 'costumer') navigate.push(`/${data.role}/products`);
    if (data.role === 'admin') navigate.push(`/${data.role}/manage`);
  }

  return (
    <section>
      <div>
        <img alt="" src="" />
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
          onClick={ handleClick }
        >
          LOGIN
        </button>
        <button
          datatestid="common_login__button-login"
          id="register"
          name="register"
          type="button"
          onClick={ () => navigate.push('/register') }
        >
          Ainda não tenho conta
        </button>
      </div>
    </section>
  );
}
