import { useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
import { getOrders } from '../utils/request';
// import { Redirect } from '../utils/redirect';

export default function OrderCard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const object = JSON.parse(localStorage.getItem('user'));
      const { token } = object;
      const allOrders = await getOrders(token);
      setOrders(allOrders);
    }
    fetchData();
  }, []);
  return (
    <>
      {orders.map((o, index) => (
        <div key={ index }>
          <p data-testid={ `customer_orders__element-order-id-${o.id}` }>
            {o.id}
          </p>
          <p data-testid={ `customer_orders__element-delivery-status-${o.id}` }>
            {o.status}
          </p>
          <p data-testid={ `customer_orders__element-order-date-${o.id}` }>
            {o.saleDate}
          </p>
          <p data-testid={ `customer_orders__element-card-price-${o.id}` }>
            {o.totalPrice}
          </p>
        </div>

      ))}
    </>
  );
}
