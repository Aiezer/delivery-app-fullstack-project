import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import loginRequest from '../utils/request';

const six = 6;

export default function Login() {
  const history = useHistory();
  const [user, setUser] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);

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
    if (data.role === "seller") history.push(`/${data.role}/orders`)
    if (data.role === "costumer") history.push(`/${data.role}/products`)
    if (data.role === "admin") history.push(`/${data.role}/manage`)
  }

  return (
    <section>
      <div>
        <img src='' />
        <h1>GENERICS DELIVERY</h1>
      </div>
      <div>
        <label htmlFor='email'>
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
        <label htmlFor='password' >
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
        <label htmlFor='login'>
          LOGIN
          <button
            datatestid="common_login__button-login"
            id='login'
            name='enter'
            type='button'
            disabled={ isDisabled }
            onClick={ handleClick }
          />
        </label>
        <label htmlFor='register'>
          Ainda não tenho conta
          <button
            datatestid="common_login__button-login"
            id='register'
            name='register'
            type='button'
            onClick={ () => history.push("/register") }
          />
        </label>
      </div>
    </section>
  )
}