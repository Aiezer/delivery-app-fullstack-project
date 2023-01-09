import { Alert, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loginRequest from '../utils/request';

const emailRegex = /\S+@\S+\.\S+/;
const TWELVE = 12;
const SIX = 6;

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  useEffect(() => {
    const { password, email, name } = form;
    if (password.length >= SIX && name.length >= TWELVE && emailRegex.test(email)) {
      return setIsDisabled(false);
    }
    return setIsDisabled(true);
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/register', { ...form })
      .then(async () => {
        setError(false);
        const loginData = await loginRequest(form.email, form.password);
        localStorage.setItem('user', JSON.stringify(loginData));
        navigate('/customer/products');
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          setError(true);
        }
      });
  };

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.id]: target.value });
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
        {error ? (
          <Alert
            data-testid="common_register__element-invalid_register"
            severity="error"
            className="mb-2"
          >
            Email ja registrado
          </Alert>
        ) : null }
        <h1 className="font-bold text-xl">Cadastre</h1>
        <h1 className="font-extralight text-lg mb-4">sua conta</h1>
        <TextField
          margin="normal"
          fullWidth
          label="Seu nome"
          type="text"
          placeholder="Seu nome"
          id="name"
          value={ form.name }
          onChange={ handleChange }
          data-testid="common_register__input-name"
        />
        <TextField
          margin="normal"
          fullWidth
          label="Seu e-mail"
          autoFocus
          data-testid="common_register__input-email"
          id="email"
          type="email"
          name="email"
          value={ form.email }
          placeholder="Seu e-mail"
          onChange={ handleChange }
        />
        <TextField
          margin="normal"
          fullWidth
          label="Sua senha"
          autoFocus
          type="password"
          placeholder="Sua senha"
          id="password"
          value={ form.password }
          onChange={ handleChange }
          data-testid="common_register__input-password"
        />
        <div>
          <Button
            variant="contained"
            color="error"
            data-testid="common_register__button-register"
            id="login"
            type="submit"
            name="enter"
            sx={ { mt: 4 } }
            disabled={ isDisabled }
            onClick={ handleSubmit }
          >
            CADASTRAR
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Register;
