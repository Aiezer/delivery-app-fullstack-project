import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import loginRequest from '../utils/request';

const six = 6;

export default function Login() {
  const history = useHistory();
  const [user, setUser] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);

  // função do email e password verificação
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

  function handleClick() {
    const data = loginRequest(user);
    localStorage.setItem('user', JSON.stringify(user));
    history.push(`/${data.role}/products`)
  }

  return (
    <section>
      <div>
        <img src='' />
        <h1>NOME DO APP</h1>
      </div>
      <div>
        <label htmlFor='email'>
          Email
          <input
            id="email"
            type="text"
            name="email"
            value={ user.email }
            placeholder="Email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor='password' >
          Password
          <input
            id="password"
            type="password"
            name="password"
            value={ user.password }
            placeholder="Password"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor='login'>
          Login
          <button
            id='login'
            name='enter'
            type='button'
            disabled={ isDisabled }
            onClick={ handleClick }
          />
        </label>
        <label htmlFor='register'>
          Register
          <button
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