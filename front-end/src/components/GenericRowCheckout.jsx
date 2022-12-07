import React from 'react';
import PropTypes from 'prop-types';

function GenericRowCheckout({ products, index }) {
  console.log(index, products);
  const { name, quantity, price, subTotal } = products;

  const handleClick = () => {
    console.log('remover item');
  };

  return (
    <tr data-testid={ `customer_checkout__element-order-table-item-number-${index}` }>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${index}` }>
        {index + 1}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        {name}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
        {quantity}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
        {Number(price).toFixed(2).replace('.', ',')}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }>
        {subTotal.toFixed(2).replace('.', ',')}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-remove-${index}` }>
        <button type="button" onClick={ handleClick }>Remover</button>
      </td>
    </tr>
  );
}

GenericRowCheckout.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default GenericRowCheckout;
