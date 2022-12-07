import axios from 'axios';

const headers = { 'Content-Type': 'application/json' };

export default async function loginRequest(email, password) {
  const { data } = await axios({
    method: 'POST',
    url: 'http://localhost:3001/login',
    headers,
    data: {
      email,
      password,
    },
  });
  return data;
}

export async function getProducts() {
  const { data } = await axios({
    method: 'GET',
    url: 'http://localhost:3001/products',
  });
  return data;
}

export async function getOrders() {
  const { data } = await axios({
    method: 'GET',
    url: 'localhost:3000/seller/orders',
  });
  return data;
}

export async function getOrderById(id) {
  const { data } = await axios({
    method: 'GET',
    url: `localhost:3000/seller/orders/${id}`,
  });
  return data;
}
