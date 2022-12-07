import React from 'react';
import NavbarProducts from '../components/NavbarProducts';
import { getOrders } from '../utils/request';

export default function Orders() {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const object = JSON.parse(localStorage.getItem('user'));
      const { token } = object;
      const allOrders = await getOrders(token);
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
