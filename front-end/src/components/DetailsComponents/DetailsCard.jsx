import React from 'react';
import Products from '../../pages/Products';
import ProductsTable from './ProductsTable';

export default function DetailsCard(order) {
  const { id, date, status, sellerName, role } = order;

  const sellerTestIds = {
    orderId: 'seller_order_details__element-order-details-label-order-id',
    dateId: 'seller_order_details__element-order-details-label-order-date',
    statusId:
      'seller_order_details__element-order-details-label-delivery-status',
    preparing: 'seller_order_details__button-preparing-check',
    deliveryId: 'seller_order_details__button-dispatch-check',
  };

  const customerTestIds = {
    orderId: 'customer_order_details__element-order-details-label-order-id',
    sellerId: 'customer_order_details__element-order-details-label-seller-name',
    dateId:
      'Group customer_order_details__element-order-details-label-order-date',
    statusId: `customer_order_details__element-order-details-label-delivery-status${id}`,
    deliveryId: 'customer_order_details__button-delivery-check',
  };

  const dataTestIds = role === 'customer' ? customerTestIds : sellerTestIds;

  return (
    <section>
      <div>
        <h3 data-testid={ dataTestIds.orderId }>{`Pedido ${id}`}</h3>

        {role === 'customer' && (
          <h3 data-testid={ dataTestIds.sellerId }>{`P. Vend: ${sellerName}`}</h3>
        )}

        <h3 data-testid={ dataTestIds.dateId }>{date}</h3>
        <h3 data-testid={ dataTestIds.statusId }>{status}</h3>
        {role === 'seller' && (
          <button
            type="button"
            data-testid={ dataTestIds.preparing }
          >
            PREPARAR PEDIDO
          </button>
        )}
        <button
          type="button"
          data-testid={ dataTestIds.deliveryId }
        >
          {role === 'customer'
            ? 'MARCAR COMO ENTREGUE'
            : 'PREPARAR PEDIDO'}
        </button>
      </div>
      {Products.length > 0 && (
        <div>
          <ProductsTable { ...order } />
        </div>
      )}

    </section>
  );
}
