import React from 'react';

function GenericRowCheckout(product, index) {
  const { name, quantity, price } = product;
  const total = quantity * price;

  const handleClick = () => {

  };

  return (
    <tr data-testid={ `element-order-table-item-number-${index}` }>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${index}` }>
        {index}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        {name}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
        {quantity}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-unity-price-${index}` }>
        {price}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }>
        {total}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-remove-${index}` }>
        <button type="button" onClick={ handleClick }>Remover</button>
      </td>
    </tr>
  );
}

export default GenericRowCheckout;
