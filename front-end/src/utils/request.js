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

export async function checkoutRequest(request, products) {
  const { data } = await axios({
    method: 'POST',
    url: 'http://localhost:3001/sale',
    headers: {
      'Content-Type': 'application/json',
      authorization: JSON.parse(localStorage.getItem('user')).token,
    },
    data: {
      products,
      request,
    },
  });
  return data.id;
}

export async function getOrders(token, role) {
  const { data } = await axios({
    method: 'POST',
    url: 'http://localhost:3001/orders',
    headers: {
      Authorization: token,
    },
    data: { type: role },
  });
  return data;
}

export async function getSaleById(id) {
  const { data } = await axios({
    method: 'GET',
    url: `http://localhost:3001/sales/${id}`,
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

export async function getSellers() {
  const { data } = await axios({
    method: 'GET',
    url: 'http://localhost:3001/sale/sellers',
  });
  return data;
}
