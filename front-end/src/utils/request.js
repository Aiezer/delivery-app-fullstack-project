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

export async function checkoutRequest(checkoutInfo) {
  const { data } = await axios({
    method: 'POST',
    url: 'http://localhost:3001/sale',
    headers: {
      Authorization: JSON.parse(localStorage.getItem('user')).token,
    },
    data: {
      ...checkoutInfo,
    },
  });
  return data.id;
}

export async function getSellers() {
  const { data } = await axios({
    method: 'GET',
    url: 'http://localhost:3001/sale',
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
