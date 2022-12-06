import React from 'react';

export default function NavbarProducts() {
  const [storage, setStorage] = React.useState();

  React.useEffect(() => {
    const getItem = localStorage.getItem('user');
    setStorage(JSON.parse(getItem));
  }, []);

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
        >
          Meus pedidos
        </button>
      </div>
      <div>
        <p data-testid="customer_products__element-navbar-user-full-name">
          {storage.user.name}
        </p>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
