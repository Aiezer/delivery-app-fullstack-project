import React from 'react';

function AdressCheckout() {
  return (
    <section>
      <h1>Detalhes e Endereço para Entrega</h1>
      <form>
        <label htmlFor="sellers">
          P. Vendedor Responsável:
          <select id="sellers" name="sellers">
            <option value="" selected disabled hidden>Selecione Vendedor</option>
            <option value="Fernando">Fernando</option>
            <option value="Marcos">Marcos</option>
          </select>
        </label>
        <label htmlFor="address">
          Endereço:
          <input type="text" placeholder="Rua X, Bairro Y" id="address" />
        </label>
        <label htmlFor="address-number">
          Número:
          <input type="Number" placeholder="000" id="address-number" />
        </label>
      </form>
    </section>
  );
}

export default AdressCheckout;
