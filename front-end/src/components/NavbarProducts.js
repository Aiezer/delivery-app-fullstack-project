export default function NavbarProducts() {
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
          Nome
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
