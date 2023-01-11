import { Button } from '@mui/material';
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
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Detalhes do Pedido</h2>
      <section className="flex items-center max-w-max">
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
              {`Vendedor: ${sellerName}`}

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
              <Button
                sx={ { marginTop: 2, marginBottom: 2 } }
                variant="contained"
                color="error"
                type="button"
                data-testid="customer_order_details__button-delivery-check"
                onClick={ () => updateStatus() }
                disabled={ checkStatus !== inTransit }
              >
                Marcar como entregue
              </Button>
            )
            : (
              <div className="flex">
                <Button
                  sx={ { marginTop: 2, marginBottom: 2, marginRight: 2 } }
                  variant="contained"
                  color="error"
                  type="button"
                  data-testid="seller_order_details__button-preparing-check"
                  onClick={ () => updateStatus() }
                  disabled={ checkStatus !== 'Pendente' }
                >
                  Preparar pedido
                </Button>
                <Button
                  sx={ { marginTop: 2, marginBottom: 2 } }
                  variant="contained"
                  color="error"
                  type="button"
                  data-testid="seller_order_details__button-dispatch-check"
                  onClick={ () => updateStatus() }
                  disabled={ checkStatus !== 'Preparando' }
                >
                  Chamar motoboy
                </Button>
              </div>
            )}
        </div>
        <div className="ml-6">
          {products.length > 0 ? (
            <div>
              <ProductsTable { ...sale } />
            </div>
          ) : <div>Voce nao tem pedidos!</div>}
          <div className="flex justify-end">
            <h2
              className="font-bold text-lg"
              data-testid="customer_order_details__element-order-total-price"
            >
              { `Total: R$${totalPrice}` }
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
