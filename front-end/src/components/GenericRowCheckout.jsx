import React from 'react';

function GenericRowCheckout(product) {
  const { id, name, quantity, value } = product;
  const total = quantity * value;

  const handleClick = () => {

  };

  return (
    <tr data-testid={ `customer_checkout__element-order-table-item-number-${id}` }>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${id}` }>
        {id}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${id}` }>
        {name}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${id}` }>
        {quantity}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${id}` }>
        {value}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${id}` }>
        {total}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${id}` }>
        <button type="button" onClick={ handleClick }>Remover</button>
      </td>
    </tr>
  );
}

export default GenericRowCheckout;
