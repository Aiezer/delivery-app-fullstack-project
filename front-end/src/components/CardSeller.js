import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardSeller() {
  const pedidos = useState('pedidos');
  const navigate = useNavigate();
  return (
    <div>
      { pedidos.map((pedido) => (
        <div
          className="card-seller"
          data-testid={ `seller_orders__element-order-id-${pedido.id}` }
          key={ index }
          onClick={ () => navigate(`/seller/orders/${pedido.id}`) }
          onKeyPress={ () => navigate(`/seller/orders/${pedido.id}`) }
          role="button"
          tabIndex={ 0 }
        >
          <button
            type="button"
            onClick={ () => navigate(`/seller/orders/${pedido.id}`) }
          >
            <h1>{ `pedido ${pedido.id}` }</h1>
            <div>
              <h1
                data-testid={ `seller_orders__element-delivery-status-${pedido.id}` }
              >
                { pedido.status }
              </h1>
            </div>
            <div>
              <h3 data-testid={ `seller_orders__element-order-date-${pedido.id}` }>
                { pedido.date }
              </h3>
              <h3 data-testid={ `seller_orders__element-card-price-${pedido.id}` }>
                { pedido.price }
              </h3>
            </div>
            <div>
              <p data-testid={ `seller_orders__element-card-address-${pedido.id}` }>
                { pedido.adress }
              </p>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}
