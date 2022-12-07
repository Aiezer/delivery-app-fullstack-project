import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getOrderById } from '../utils/request';

const n3 = 3;

export default function CardOrder() {
  // const [path, setPath] = useState();
  const location = useLocation();
  const [order, setOrder] = useState();

  useEffect(() => {
    const { pathname } = location;
    const id = (pathname.split(n3, '/')).pop();
    async function getOrder(i) {
      const order0 = await getOrderById(i);
      setOrder(order0);
    }
    getOrder(id);
  }, []);

  return (
    <div>
      <h1>Detalhes do Pedido</h1>
      <div>
        <h1
          data-testid={ `seller_order_details__element-order-details-label-order-${id}` }
        >
          `PEDIDO
          {' '}
          { order.id }
          `
        </h1>
        <h1
          data-testid={
            `seller_order_details__element-order-details-label-order-${order.date}`
          }
        >
          { order.date }
        </h1>
        <h1
          data-testid={
            `seller_order_details__element-order-details-label-delivery-${order.status}`
          }
        >
          { order.status }
        </h1>
        <h1
          data-testid="seller_order_details__button-preparing-check"
        >
          Preparar Pedido
        </h1>
      </div>
    </div>
  );
}
