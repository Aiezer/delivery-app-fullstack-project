import React, { useEffect, useState } from 'react';
import GenericRowCheckout from './GenericRowCheckout';

function ProductsCheckout() {
  const [cart, setCart] = useState();

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinho) {
      const { cartItems } = carrinho;
      return setCart(cartItems);
    }
  }, []);

  return (
    <section>
      <h1>Finalizar Pedido</h1>
      <div className="table-container">
        <table border="2">
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
          {cart ? (
            cart.map((cartItem, i) => (
              <GenericRowCheckout
                products={ cartItem }
                index={ i }
                key={ i }
              />))
          ) : (
            <caption>Carrinho Vazio!</caption>
          )}
        </table>
        <div data-testid="customer_checkout__element-order-total-price">
          {`Total: ${JSON.parse(localStorage.getItem('carrinho')).total}`}
        </div>
      </div>
    </section>
  );
}

export default ProductsCheckout;
