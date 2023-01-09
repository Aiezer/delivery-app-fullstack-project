import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, TextField } from '@mui/material';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('user'));
    if (storage) {
      navigate(handleUrl(storage.role));
    }
  }, []);

  useEffect(() => {
    const regex = VALIDATE_EMAIL.test(user.email);
    if (user.password.length >= six && regex) {
      return setIsDisabled(false);
    }
    return setIsDisabled(true);
  }, [user]);

  const handleLogin = async () => {
    try {
      const request = await loginRequest(user.email, user.password);
      localStorage.setItem('user', JSON.stringify(request));
      setStorage(request);
      navigate(handleUrl(request.role));
    } catch (e) {
      setErrorRequest(true);
    }
  };

  return (
    <section
      className="flex flex-wrap w-full min-h-screen justify-center items-center
    p-4 bg-[#dcea1c]"
    >
      <div
        className="flex flex-col bg-[#efefef] justify-center items-center p-16
        rounded-xl"
      >
        {errorRequest && (
          <Alert
            data-testid="common_login__element-invalid-email"
            severity="error"
            className="mb-2"
          >
            Email ou senha inválidos
          </Alert>
        )}
        <img src="https://imgur.com/I0x2onK.png" width="150" alt="generics delivery" />
        <h1 className="mb-2 mt-2 font-extralight">Delivery da Dona Tereza</h1>
        <TextField
          margin="normal"
          fullWidth
          label="E-mail"
          autoComplete="email"
          autoFocus
          data-testid="common_login__input-email"
          id="email"
          type="text"
          name="email"
          value={ user.email }
          placeholder="generics@delivery.com.br"
          onChange={ handleChange }
        />
        <TextField
          margin="normal"
          fullWidth
          label="Senha"
          autoComplete="current-password"
          autoFocus
          data-testid="common_login__input-password"
          id="password"
          type="password"
          name="password"
          value={ user.password }
          onChange={ handleChange }
        />
        <div className="flex flex-col mt-6">
          <Button
            variant="contained"
            color="error"
            data-testid="common_login__button-login"
            id="login"
            name="enter"
            type="button"
            sx={ { mb: 2 } }
            disabled={ isDisabled }
            onClick={ handleLogin }
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="error"
            data-testid="common_login__button-register"
            id="register"
            name="register"
            type="button"
            onClick={ () => navigate('/register') }
          >
            Ainda não tenho conta
          </Button>
        </div>
      </div>
    </section>
  );
}
