import React from 'react';

function Register() {
  return (
    <div>
      <form>
        <h2>Cadastro</h2>
        <label htmlFor="input-name">
          <h3>Nome</h3>
          <input type="text" placeholder="Seu nome" id="input-name" />
        </label>
        <label htmlFor="input-email">
          <h3>Email</h3>
          <input type="email" placeholder="Seu nome" id="input-email" />
        </label>
        <label htmlFor="input-email">
          <h3>Email</h3>
          <input type="email" placeholder="Seu nome" id="input-email" />
        </label>
        <button type="submit">CADASTRAR</button>
      </form>
    </div>
  );
}

export default Register;
