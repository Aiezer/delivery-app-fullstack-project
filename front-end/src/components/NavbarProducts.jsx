import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../Context';

export default function NavbarProducts() {
  const navigate = useNavigate();
  const { storage } = useContext(MyContext);

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div>
      <div>
        <button
          data-testid="customer_products__element-navbar-link-products"
          type="button"
        >
          Produtos
        </button>
        <button
          data-testid="customer_products__element-navbar-link-orders"
          type="button"
          onClick={ () => navigate('/customer/orders') }
        >
          Meus pedidos
        </button>
      </div>
      <div>
        <p data-testid="customer_products__element-navbar-user-full-name">
          {storage.name}
        </p>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={ logout }
        >
          Sair
        </button>
      </div>
    </div>
  );
}
