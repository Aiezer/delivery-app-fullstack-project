import React from 'react';
import NavbarProducts from '../components/NavbarProducts';

import ProductCard from '../components/ProductCard';

const { getProducts } = require('../utils/request');

export default function Products() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const allProducts = await getProducts();
      setProducts(allProducts);
    }
    fetchData();
  }, []);

  return (
    <div>
      <NavbarProducts />
      {products.map((p, index) => (
        ProductCard(index, p.price, p.name, p.urlImage)
      ))}
    </div>
  );
}
