import React from 'react';
import NavbarProducts from '../components/NavbarProducts';
import { getOrders } from '../utils/request';

export default function Orders() {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const allOrders = await getOrders();
      setOrders(allOrders);
    }
    fetchData();
  }, []);
  return (
    <div>
      <NavbarProducts />
    </div>
  );
}
