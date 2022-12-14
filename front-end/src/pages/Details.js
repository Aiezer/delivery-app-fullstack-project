import React, { useEffect, useState } from 'react';
import DetailsCard from '../components/DetailsComponents/DetailsCard';
import { getOrderById, getSellerById } from '../utils/request';
import NavbarProducts from '../components/NavbarProducts';

function Details() {
  const [sale, setSale] = useState({
    products: [],
  });

  const url = window.location.href.split('/');
  const saleId = url[url.length - 1];

  useEffect(() => {
    const requestSale = async () => {
      try {
        if (saleId) {
          const request = await getOrderById(saleId);
          setSale(request);
        }
      } catch (e) {
        console.log('eroooouu', e);
      }
    };
    requestSale();
  }, [saleId]);

  useEffect(() => {
    const getSellerName = async () => {
      if (sale && !sale.sellerName) {
        const sellerName = await getSellerById(sale.sellerId);
        setSale({ ...sale, sellerName });
      }
    };
    getSellerName();
  }, [sale]);

  const { products } = sale;
  console.log(sale);

  return (
    <section>
      {sale && products.length > 0 && (
        <div>
          <NavbarProducts />
          <h2>Detales do Pedido</h2>
          <DetailsCard key={ saleId } { ...sale } />
        </div>
      )}
    </section>
  );
}

export default Details;
