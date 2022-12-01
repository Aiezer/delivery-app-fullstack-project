import axios from 'axios';

const headers = { 'Content-Type': 'application/json' };

export default async function loginRequest({ email, password }) {
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
