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

  return (
    <section>
      {sale && (
        <div>
          <NavbarProducts />
          <section
            className="flex flex-wrap justify-center mt-8"
          >
            <DetailsCard key={ saleId } { ...sale } />
          </section>
        </div>
      )}
    </section>
  );
}

export default Details;
