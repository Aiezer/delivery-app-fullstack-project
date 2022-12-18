import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../Context';
import { updateSaleStatus } from '../../utils/request';
import ProductsTable from './ProductsTable';

const inTransit = 'Em Trânsito';

export default function DetailsCard(sale) {
  const { storage } = useContext(MyContext);
  const { id, saleDate, status, products, sellerName } = sale;
  const { role } = storage;
  const [checkStatus, setCheckStatus] = useState(status);

  const totalPrice = products.reduce(
    (acc, { price, qtd }) => acc + Number(price) * Number(qtd.quantity),
    0,
  ).toFixed(2).replace('.', ',');

  useEffect(() => {
    setCheckStatus(status);
  }, [status]);

  const updateStatus = () => {
    if (role === 'customer' && checkStatus === inTransit) {
      setCheckStatus('Entregue');
      updateSaleStatus(id, 'Entregue');
    }
    if (role === 'seller') {
      if (checkStatus === 'Pendente') {
        setCheckStatus('Preparando');
        updateSaleStatus(id, 'Preparando');
      }
      if (checkStatus === 'Preparando') {
        setCheckStatus(inTransit);
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
          {checkStatus}

        </h3>
        {role === 'customer'
          ? (
            <button
              type="button"
              data-testid="customer_order_details__button-delivery-check"
              onClick={ () => updateStatus() }
              disabled={ checkStatus !== inTransit }
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
                disabled={ checkStatus !== 'Pendente' }
              >
                Preparar pedido
              </button>
              <button
                type="button"
                data-testid="seller_order_details__button-dispatch-check"
                onClick={ () => updateStatus() }
                disabled={ checkStatus !== 'Preparando' }
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
