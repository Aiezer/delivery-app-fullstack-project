import axios from 'axios';
import handleUrl from './handleUrl';

const headers = { 'Content-Type': 'application/json' };

export async function verify(token) {
  const { data } = await axios({
    method: 'POST',
    url: 'http://localhost:3001/validate',
    headers,
    data: {
      token,
    },
  });
  return data;
}

export async function Redirect() {
  const user = localStorage.getItem('user');
  if (user !== undefined) {
    const { token, role } = JSON.parse(user);
    const result = await verify(token);
    if (!result) {
      localStorage.removeItem('user');
      return '/login';
    }
    return handleUrl(role);
  }
  return '/login';
}
