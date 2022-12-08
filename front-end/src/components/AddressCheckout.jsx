import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkoutRequest } from '../utils/request';

function AdressCheckout() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userId: 1,
    sellerId: 1,
    totalPrice: JSON.parse(localStorage.getItem('carrinho')).total,
    deliveryAddress: '',
    deliveryNumber: '',
    status: 'Pendente',
    seller: '',
  });
  const [error, setError] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.seller === '' || form.deliveryAddress === '' || form.deliveryNumber === '') {
      return setError(true);
    }
    const id = await checkoutRequest(form);
    navigate(`/customer/orders/${id}`);
  };

  return (
    <section>
      <h1>Detalhes e Endereço para Entrega</h1>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="sellers">
          P. Vendedor Responsável:
          <select
            id="sellers"
            name="seller"
            data-testid="customer_checkout__select-seller"
            onChange={ handleChange }
            value={ form.seller }
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
            name="deliveryAddress"
            onChange={ handleChange }
            value={ form.deliveryAddress }
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="addressNumber">
          Número:
          <input
            type="Number"
            placeholder="000"
            name="deliveryNumber"
            id="addressNumber"
            onChange={ handleChange }
            value={ form.deliveryNumber }
            data-testid="customer_checkout__input-address-number"
          />
        </label>
        <div>
          <button
            type="submit"
            data-testid="customer_checkout__button-submit-order"
          >
            Finalizar Pedido
          </button>
        </div>
      </form>
      {error ? <h1>Favor informar todos os campos</h1> : null}
    </section>
  );
}

export default AdressCheckout;
