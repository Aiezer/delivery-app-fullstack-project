import React from 'react';
import DetailsCard from '../components/DetailsComponents/DetailsCard';
import { getSaleById } from '../utils/request';

function Details() {
  const url = window.location.href.split('/');
  const id = url[url.length - 1];
  const role = url[0];

  const requestSale = getSaleById(id);
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
