import React, { useContext } from 'react';
import ExitToApp from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import MyContext from '../Context';

export default function NavbarProducts() {
  const navigate = useNavigate();
  const { storage } = useContext(MyContext);
  const { role } = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div
      className="flex flex-wrap justify-around p-4 bg-[#dcea1c]"
    >
      <div>
        {role === 'customer'
        && (
          <button
            data-testid="customer_products__element-navbar-link-products"
            type="button"
            onClick={ () => navigate('/customer/products') }
            className="font-light"
          >
            Produtos
          </button>)}
        {role !== 'administrator'
          && (
            <button
              data-testid="customer_products__element-navbar-link-orders"
              type="button"
              onClick={ () => navigate(`/${role}/orders`) }
              className="ml-4 font-light"
            >
              Meus pedidos
            </button>)}
        {role === 'administrator' && (
          <p
            data-testid="customer_products__element-navbar-link-orders"
            className="ml-4 font-light"
          >
            Gerenciar contas
          </p>
        )}
      </div>
      <div className="flex items-center">
        <p
          data-testid="customer_products__element-navbar-user-full-name"
          className="font-bold"
        >
          {storage.name}
        </p>
        <button
          className="ml-4"
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={ logout }
        >
          <ExitToApp />
        </button>
      </div>
    </div>
  );
}
