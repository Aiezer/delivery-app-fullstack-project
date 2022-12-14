import React from 'react';
import PropTypes from 'prop-types';

function GenerateTableRows({ products, index }) {
  const { name, qtd, price } = products;
  const { quantity } = qtd;
  const subtotal = (quantity * price).toFixed(2).replace('.', ',');
  const url = window.location.href.split('/');
  const role = url[3];

  const customerTestIds = {
    item: `customer_order_details__element-order-table-item-number-${index}`,
    description: `customer_order_details__element-order-table-name-${index}`,
    quantity: `customer_order_details__element-order-table-quantity-${index}`,
    unitPrice: `customer_order_details__element-order-table-unit-price-${index}`,
    subtotal: `customer_order_details__element-order-table-sub-total-${index}`,
  };

  const sellerTestIds = {
    item: `seller_order_details__element-order-table-item-number-${index}`,
    description: `seller_order_details__element-order-table-name-${index}`,
    quantity: `seller_order_details__element-order-table-quantity-${index}`,
    unitPrice: `seller_order_details__element-order-table-unit-price-${index}`,
    subtotal: `seller_order_details__element-order-table-sub-total-${index}`,
  };

  const dataTestIds = role === 'customer' ? customerTestIds : sellerTestIds;

  return (
    <tr data-testid={ dataTestIds.item }>
      <td data-testid={ dataTestIds.item }>
        {index + 1}
      </td>
      <td data-testid={ dataTestIds.description }>
        {name}
      </td>
      <td data-testid={ dataTestIds.quantity }>
        {quantity}
      </td>
      <td data-testid={ dataTestIds.unitPrice }>
        {Number(price).toFixed(2).replace('.', ',')}
      </td>
      <td data-testid={ dataTestIds.subtotal }>
        {subtotal}
      </td>
    </tr>
  );
}

GenerateTableRows.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default GenerateTableRows;
