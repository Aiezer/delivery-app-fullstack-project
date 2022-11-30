import React, { useState } from 'react';

function Register() {
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    setError(true);
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <h2>Cadastro</h2>
        <label htmlFor="input-name">
          <h3>Nome</h3>
          <input
            type="text"
            placeholder="Seu nome"
            id="input-name"
            data-testid="common_register_input-name"
          />
        </label>
        <label htmlFor="input-email">
          <h3>Email</h3>
          <input
            type="email"
            placeholder="seu-email@site.com.br"
            id="input-email"
            data-testid="common_register_input-name"
          />
        </label>
        <label htmlFor="input-senha">
          <h3>Senha</h3>
          <input
            type="password"
            placeholder="*******"
            id="input-senha"
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
