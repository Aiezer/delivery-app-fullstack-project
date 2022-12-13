import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOrders } from '../utils/request';

export default function OrderCard() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const object = JSON.parse(localStorage.getItem('user'));
      const { token, role } = object;
      const allOrders = await getOrders(token, role);
      setOrders(allOrders);
    }
    fetchData();
  }, []);

  return (
    <>
      {orders.map((o, index) => (
        <button
          key={ index }
          type="button"
          onClick={ () => navigate(`/customer/orders/${o.id}`) }
        >
          <div>
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
        </button>
      ))}
    </>
  );
}
