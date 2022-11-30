import React, { useState } from 'react';

function Register() {
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ nome: '', email: '', senha: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(!error);
  };

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.id]: [target.value] });
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
            id="nome"
            value={ form.nome }
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
        <label htmlFor="senha">
          <h3>Senha</h3>
          <input
            type="password"
            placeholder="*******"
            id="senha"
            value={ form.senha }
            onChange={ handleChange }
            data-testid="common_register_input-name"
          />
        </label>
        <div>
          <button
            type="submit"
            data-testid="common_register_input-name"
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
