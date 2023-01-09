import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCustomerOrders, getSellerOrders } from '../utils/request';

export default function OrderCard() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const object = JSON.parse(localStorage.getItem('user'));
  const { token, id, role } = object;

  useEffect(() => {
    async function fetchData() {
      if (role === 'customer') {
        const allOrders = await getCustomerOrders(token, id);
        setOrders(allOrders);
      }
      if (role === 'seller') {
        const allOrders = await getSellerOrders(token, id);
        setOrders(allOrders);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap m-10 justify-center">
      {orders.map((o, index) => (
        <button
          key={ index }
          type="button"
          data-testid={ `${role}_orders__element-order-id-${o.id}` }
          onClick={ () => navigate(`/${role}/orders/${o.id}`) }
          className="m-6 p-6 bg-[#DCE91C] rounded shadow shadow-[#919191]"
        >
          <div>
            <p>
              {`Pedido ${o.id}`}
            </p>
            <p data-testid={ `${role}_orders__element-delivery-status-${o.id}` }>
              {o.status}
            </p>
            <p data-testid={ `${role}_orders__element-order-date-${o.id}` }>
              {o.saleDate}
            </p>
            <p data-testid={ `${role}_orders__element-card-price-${o.id}` }>
              {`R$${o.totalPrice}`}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
