import React, { useEffect, useState } from 'react';
import GenericRowCheckout from './GenericRowCheckout';

function ProductsCheckout() {
  const [cart, setCart] = useState();
  const [totalState, setTotal] = useState();

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinho) {
      const { cartItems, total } = carrinho;
      setTotal(total);
      return setCart(cartItems);
    }
  }, []);

  const handleChange = ({ target }) => {
    let newTotal = 0;
    const newCart = JSON.parse(localStorage.getItem('carrinho'));
    const { cartItems } = newCart;
    cartItems.splice(target.id, 1);
    newTotal = cartItems.reduce((acc, item) => acc + item.subTotal, 0);
    localStorage.setItem('carrinho', JSON.stringify({ cartItems, total: newTotal }));
    setTotal(newTotal);
    return setCart(cartItems);
  };

  return (
    <section>
      <h1>Finalizar Pedido</h1>
      <div className="table-container">
        <table border="1">
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
                handleState={ handleChange }
                products={ cartItem }
                index={ i }
                key={ i }
              />))
          ) : (null)}
        </table>
        <div data-testid="customer_checkout__element-order-total-price">
          {`${Number(totalState).toFixed(2).replace('.', ',')}`}
        </div>
      </div>
    </section>
  );
}

export default ProductsCheckout;
