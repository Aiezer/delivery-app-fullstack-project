import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCustomerOrders, getSellerOrders } from '../utils/request';

export default function OrderCard() {
  const [orders, setOrders] = useState([]);
  const [recivedRole, setRecivedRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const object = JSON.parse(localStorage.getItem('user'));
      const { token, id, role } = object;
      if (role === 'customer') {
        const allOrders = await getCustomerOrders(token, id);
        setOrders(allOrders);
        setRecivedRole(role);
      }
      if (role === 'seller') {
        const allOrders = await getSellerOrders(token, id);
        console.log(allOrders);
        setOrders(allOrders);
        setRecivedRole(role);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {orders.map((o, index) => (
        <button
          key={ index }
          type="button"
          onClick={ () => navigate(`/${recivedRole}/orders/${o.id}`) }
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
