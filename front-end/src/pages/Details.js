import React, { useEffect, useState } from 'react';
import DetailsCard from '../components/DetailsComponents/DetailsCard';
import { getOrderById } from '../utils/request';

function Details() {
  const [sale, setSale] = useState('');

  const url = window.location.href.split('/');
  const saleId = url[url.length - 1];
  const role = url[3];

  useEffect(() => {
    const requestSale = async () => {
      try {
        if (saleId) {
          const request = await getOrderById(saleId);
          console.log('test', request);
          setSale(request);
        }
      } catch (e) {
        console.log('eroooouu', e);
      }
    };
    requestSale();
  }, [saleId]);

  console.log('request', sale);
  const order = { ...sale, role };

  return (
    <section>
      {sale.length > 0 && (
        <div>
          <h2>Detales do Pedido</h2>
          <DetailsCard key={ saleId } { ...order } />
        </div>
      )}
    </section>
  );
}

export default Details;
