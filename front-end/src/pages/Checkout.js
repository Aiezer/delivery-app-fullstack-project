import React from 'react';
import NavbarProducts from '../components/NavbarProducts';
import ProductsCheckout from '../components/ProductsCheckout';
import AddressCheckout from '../components/AddressCheckout';

function Checkout() {
  return (
    <section>
      <NavbarProducts />
      <ProductsCheckout />
      <AddressCheckout />
    </section>
  );
}

export default Checkout;
