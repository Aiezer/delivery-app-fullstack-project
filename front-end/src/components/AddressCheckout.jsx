import React, { useState } from 'react';

function AdressCheckout() {
  const [form, setForm] = useState({ sellers: '', address: '', addressNumber: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

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
            onChange={ handleChange }
            value={ form.sellers }
          >
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
            name="address"
            onChange={ handleChange }
            value={ form.address }
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="addressNumber">
          Número:
          <input
            type="Number"
            placeholder="000"
            name="addressNumber"
            id="addressNumber"
            onChange={ handleChange }
            value={ form.addressNumber }
            data-testid="customer_checkout__input-address-number"
          />
        </label>
        <div>
          <button
            type="submit"
            placeholder="000"
            id="address-number"
            data-testid="customer_checkout__button-submit-order"
          >
            Finalizar Pedido
          </button>
        </div>
      </form>
    </section>
  );
}

export default AdressCheckout;
