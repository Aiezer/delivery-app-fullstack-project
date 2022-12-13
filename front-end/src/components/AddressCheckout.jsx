import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkoutRequest, getSellers } from '../utils/request';

function AdressCheckout() {
  const navigate = useNavigate();
  const [sellers, setSellers] = useState([]);
  const [form, setForm] = useState({
    userId: 0,
    sellerId: 0,
    totalPrice: JSON.parse(localStorage.getItem('carrinho')).total,
    deliveryAddress: '',
    deliveryNumber: '',
    status: 'Pendente',
    seller: '',
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    const start = async () => {
      const sellersReq = await getSellers();
      setSellers(sellersReq);
    };
    start();
  }, []);

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
    const cart = JSON.parse(localStorage.getItem('carrinho')).cartItems;
    const products = cart.map((prod) => ({ prodId: prod.id, prodQnt: prod.quantity }));
    const data = {
      ...form,
      userId: JSON.parse(localStorage.getItem('user')).id,
      sellerId: form.seller,
    };
    const routeId = await checkoutRequest(data, products);
    navigate(`/customer/orders/${routeId}`);
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
            <option hidden>Selecione o vendedor</option>
            { sellers.map((seller, i) => (
              <option value={ seller.id } key={ i }>{ seller.name }</option>
            ))}
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
