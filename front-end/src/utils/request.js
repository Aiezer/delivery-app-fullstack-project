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

export async function getSellers() {
  const { data } = await axios({
    method: 'GET',
    url: 'http://localhost:3001/sale/sellers',
  });
  return data;
}
