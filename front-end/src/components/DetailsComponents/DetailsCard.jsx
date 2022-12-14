import React from 'react';
import ProductsTable from './ProductsTable';

export default function DetailsCard(sale) {
  const { id, saleDate, status, products, sellerName } = sale;
  const url = window.location.href.split('/');
  const role = url[3];

  const totalPrice = products.reduce(
    (acc, { price, qtd }) => acc + Number(price) * Number(qtd.quantity),
    0,
  ).toFixed(2).replace('.', ',');

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
      'customer_order_details__element-order-details-label-order-date',
    statusId: 'customer_order_details__element-order-details-label-delivery-status',
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

        <h3 data-testid={ dataTestIds.dateId }>{saleDate}</h3>
        <h3 data-testid={ dataTestIds.statusId }>{status}</h3>
        {role === 'seller' && (
          <button
            type="button"
            data-testid={ dataTestIds.preparing }
          >
            PREPARAR PEDIDO
          </button>
        )}
        {role === 'customer'
          ? (
            <button
              type="button"
              data-testid={ dataTestIds.deliveryId }
              disabled
              // onClick={ updateStatus }
            >
              Marcar como entregue
            </button>
          )
          : (
            <button
              type="button"
              data-testid={ dataTestIds.deliveryId }
            >
              Preparar pedido
            </button>
          )}
      </div>
      {products.length > 0 && (
        <div>
          <ProductsTable { ...sale } />
        </div>
      )}
      <div>
        <h2
          data-testid="customer_order_details__element-order-total-price"
        >
          { totalPrice }
        </h2>
      </div>

    </section>
  );
}
