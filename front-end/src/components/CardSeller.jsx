import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOrders } from '../utils/request';

export default function CardSeller() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function get() {
      const order = await getOrders();
      setOrders(order);
    }
    get();
  }, []);

  return (
    <div>
      { orders.map((order, index) => (
        <div
          className="card-seller"
          data-testid={ `seller_orders__element-order-id-${order.id}` }
          key={ index }
          onClick={ () => navigate(`/seller/orders/${order.id}`) }
          onKeyPress={ () => navigate(`/seller/orders/${order.id}`) }
          role="button"
          tabIndex={ 0 }
        >
          <button
            type="button"
            onClick={ () => navigate(`/seller/orders/${order.id}`) }
          >
            <div>
              <h1>{ `pedido ${order.deliveryNumber}` }</h1>
            </div>
            <div>
              <h1
                data-testid={ `seller_orders__element-delivery-status-${order.id}` }
              >
                { order.status }
              </h1>
            </div>
            <div>
              <h3 data-testid={ `seller_orders__element-order-date-${order.id}` }>
                { order.saleDate }
              </h3>
              <h3 data-testid={ `seller_orders__element-card-price-${order.id}` }>
                { order.totalPrice }
              </h3>
            </div>
            <div>
              <p data-testid={ `seller_orders__element-card-address-${order.id}` }>
                { order.deliveryAdress }
              </p>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}
