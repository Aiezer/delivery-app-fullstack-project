import React from 'react';
import './index.css';

function ProductsCheckout() {
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
        </table>
        <div>Total:</div>
      </div>
    </section>
  );
}

// id
// name
// price
// quantity

export default ProductsCheckout;
