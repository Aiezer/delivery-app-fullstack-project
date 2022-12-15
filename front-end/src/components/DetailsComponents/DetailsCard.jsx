import React, { useContext } from 'react';
import MyContext from '../../Context';
import { updateSaleStatus } from '../../utils/request';
import ProductsTable from './ProductsTable';

const inTransit = 'Em Trânsito';

export default function DetailsCard(sale) {
  const { storage } = useContext(MyContext);
  const { id, saleDate, status, products, sellerName } = sale;
  const { role } = storage;

  const totalPrice = products.reduce(
    (acc, { price, qtd }) => acc + Number(price) * Number(qtd.quantity),
    0,
  ).toFixed(2).replace('.', ',');

  const updateStatus = () => {
    if (role === 'customer' && status === inTransit) {
      console.log('customer', role, status);
      updateSaleStatus(id, 'Entregue');
    }
    if (role === 'seller') {
      console.log('seller', role);
      if (status === 'Pendente') {
        console.log('seller', role, status);
        updateSaleStatus(id, 'Preparando');
      }
      if (status === 'Preparando') {
        console.log('seller', role, status);
        updateSaleStatus(id, inTransit);
      }
    }
  };

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
              onClick={ () => updateStatus() }
              disabled={ status !== inTransit }
            >
              Marcar como entregue
            </button>
          )
          : (
            <>
              <button
                type="button"
                data-testid="seller_order_details__button-preparing-check"
                onClick={ () => updateStatus() }
                disabled={ status !== 'Pendente' }
              >
                Preparar pedido
              </button>
              <button
                type="button"
                data-testid="seller_order_details__button-dispatch-check"
                onClick={ () => updateStatus() }
                disabled={ status !== 'Preparando' }
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
          data-testid={ `${role}_order_details__element-order-total-price` }
        >
          { totalPrice }
        </h2>
      </div>

    </section>
  );
}
