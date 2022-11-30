import axios from 'axios';
import React, { useState } from 'react';

const emailRegex = /\S+@\S+\.\S+/;
const TWELVE = 12;
const SIX = 6;

function Register() {
  const [error, setError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const validateEmail = (email) => emailRegex.test(email);

  const validateForm = () => {
    const { password, email, name } = form;
    if (password.length >= SIX && name.length <= TWELVE && validateEmail(email)) {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    const { password, email, name } = form;
    e.preventDefault();
    await axios({
      method: 'post',
      url: 'http://localhost:3001/customer/register',
      data: {
        password,
        email,
        name,
      },
    }).then((response) => console.log(response))
      .catch((err) => {
        if (err) setError(true);
      });
  };

  const verifyButton = () => {
    if (validateForm()) {
      return setIsDisabled(false);
    }
    return setIsDisabled(true);
  };

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.id]: target.value });
    verifyButton();
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
            data-testid="common_register_input-name"
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
            data-testid="common_register_input-name"
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
            data-testid="common_register_input-name"
          />
        </label>
        <div>
          <button
            type="submit"
            data-testid="common_register_input-name"
            disabled={ isDisabled }
          >
            CADASTRAR
          </button>
        </div>
      </form>
      {error ? <span data-testid="common_register_input-name">Error</span> : null }
    </div>
  );
}

export default Register;
