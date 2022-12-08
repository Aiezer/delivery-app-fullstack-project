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

export async function checkout(checkoutInfo) {
  const { data } = await axios.post('http://localhost:3001/checkout', { data: checkoutInfo })
    .then()
    .catch((e) => console.error(e));
  return data;
}
