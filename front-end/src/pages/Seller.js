import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CardSeller from '../components/CardSeller';

export default function Seller() {
  const [seller, setSeller] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setSeller(JSON.parse(localStorage.getItem('user')));
  }, []);

  function handleClick({ target }) {
    switch (target.name) {
    case 'orders':
      navigate('/seller/orders');
      break;
    case 'checkout':
      navigate('/seller/checkout');
      break;
    default:
    }
  }

  return (
    <section>
      <div>
        <header>
          <button
            type="button"
            onClick={ handleClick }
            name="orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Pedidos
          </button>
          <h1
            type="text"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { seller.name }
          </h1>
          <button
            type="button"
            name="checkout"
            onClick={ handleClick }
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </button>
        </header>
      </div>
      <div>
        { location.pathname === '/seller/orders' && <CardSeller /> }
      </div>
    </section>
  );
}
