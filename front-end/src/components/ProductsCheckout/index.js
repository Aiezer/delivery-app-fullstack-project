import React, { useEffect, useState } from 'react';
import GenericRowCheckout from '../GenericRowCheckout';
import './index.css';

function ProductsCheckout() {
  const [cart, setCart] = useState();

  useEffect(() => {
    const carrinho = localStorage.getItem('carrinho');
    if (carrinho) {
      return setCart(carrinho);
    }
  }, []);

  return (
    <section>
      Finalizar Pedido
      <div className="table-container">
        <table>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
          { cart ? (
            cart.map((cartItem, i) => (
              <GenericRowCheckout
                products={ cartItem }
                index={ i }
                key={ i }
              />))
          ) : (
            <tr>
              <td>Carrinho Vazio!</td>
            </tr>
          )}
        </table>
        <div data-testid="customer_checkout__elemente-order-total-price">
          {`Total: ${cart}`}
        </div>
      </div>
    </section>
  );
}

// id
// name
// price
// quantity

export default ProductsCheckout;
