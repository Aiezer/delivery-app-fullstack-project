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
    <div>
      <form onSubmit={ handleSubmit }>
        <h2>Cadastro</h2>
        <label htmlFor="name">
          <h3>Nome</h3>
          <input
            type="text"
            placeholder="Seu nome"
            id="name"
            value={ form.name }
            onChange={ handleChange }
            data-testid="common_register__input-name"
          />
        </label>
        <label htmlFor="email">
          <h3>Email</h3>
          <input
            type="email"
            placeholder="seu-email@site.com.br"
            id="email"
            value={ form.email }
            onChange={ handleChange }
            data-testid="common_register__input-email"
          />
        </label>
        <label htmlFor="password">
          <h3>Senha</h3>
          <input
            type="password"
            placeholder="*******"
            id="password"
            value={ form.password }
            onChange={ handleChange }
            data-testid="common_register__input-password"
          />
        </label>
        <div>
          <button
            type="submit"
            data-testid="common_register__button-register"
            disabled={ isDisabled }
          >
            CADASTRAR
          </button>
        </div>
      </form>
      {error ? (
        <span data-testid="common_register__element-invalid_register">Error</span>
      ) : null }
    </div>
  );
}

export default Register;
