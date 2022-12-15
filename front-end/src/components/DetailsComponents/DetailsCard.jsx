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

  return (
    <section>
      <div>
        <h3
          data-testid={ `${role}_order_details__element-order-details-label-order-id` }
        >
          {`Pedido ${id}`}

        </h3>

        {role === 'customer' && (
          <h3
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {`P. Vend: ${sellerName}`}

          </h3>
        )}

        <h3
          data-testid={ `${role}_order_details__element-order-details-label-order-date` }
        >
          {saleDate}

        </h3>
        <h3
          data-testid={
            `${role}_order_details__element-order-details-label-delivery-status`
          }
        >
          {status}

        </h3>
        {role === 'customer'
          ? (
            <button
              type="button"
              data-testid="customer_order_details__button-delivery-check"
              disabled
              // onClick={ updateStatus }
            >
              Marcar como entregue
            </button>
          )
          : (
            <>
              <button
                type="button"
                data-testid="seller_order_details__button-preparing-check"
              >
                Preparar pedido
              </button>
              <button
                type="button"
                data-testid="seller_order_details__button-dispatch-check"
              >
                Chamar motoboy
              </button>
            </>
          )}
      </div>
      {products.length > 0 ? (
        <div>
          <ProductsTable { ...sale } />
        </div>
      ) : <div>Voce nao tem pedidos!</div>}
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
