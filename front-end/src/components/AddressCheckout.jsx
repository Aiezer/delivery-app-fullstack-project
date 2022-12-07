import React from 'react';

function AdressCheckout() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <h1>Detalhes e Endereço para Entrega</h1>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="sellers">
          P. Vendedor Responsável:
          <select
            id="sellers"
            name="sellers"
            data-testid="customer_checkout__select-seller"
          >
            <option value="" selected disabled hidden>Selecione Vendedor</option>
            <option value="Fernando">Fernando</option>
            <option value="Marcos">Marcos</option>
          </select>
        </label>
        <label htmlFor="address">
          Endereço:
          <input
            type="text"
            placeholder="Rua X, Bairro Y"
            id="address"
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="address-number">
          Número:
          <input
            type="Number"
            placeholder="000"
            id="address-number"
            data-testid="customer_checkout__input-address-number"
          />
        </label>
        <div data-testid="customer_checkout__button-submit-order">
          <button type="submit" placeholder="000" id="address-number">
            Finalizar Pedido
          </button>
        </div>
      </form>
    </section>
  );
}

export default AdressCheckout;
