import React from 'react';
import DetailsCard from '../components/DetailsComponents/DetailsCard';
import { getOrderById } from '../utils/request';

function Details() {
  const url = window.location.href.split('/');
  console.log('url:', url);
  const saleId = url[url.length - 1];

  const requestSale = getOrderById(saleId);
  const order = { ...requestSale, role };

  return (
    <section>
      <div>
        <h2>Detales do Pedido</h2>
        <DetailsCard { ...order } />
      </div>
    </section>
  );
}

export default Details;
