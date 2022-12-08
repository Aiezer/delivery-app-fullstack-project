import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrderCard from '../components/OrderCard';

export default function Seller() {
  const navigate = useNavigate();

  const { storage } = useContext(MyContext);

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  function handleClick() {
    navigate('/seller/orders');
  }

  return (
    <section>
      <div>
        <header>
          <button
            data-testid="customer_products__element-navbar-link-orders"
            type="button"
            name="orders"
            onClick={ handleClick }
          >
            Pedidos
          </button>
          <h1
            type="text"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { storage.name }
          </h1>
          <button
            type="button"
            name="checkout"
            onClick={ logout }
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </button>
        </header>
      </div>
      <div>
        <OrderCard />
      </div>
    </section>
  );
}
