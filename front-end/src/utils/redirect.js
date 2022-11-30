import axios from 'axios';

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
  console.log(data);
  return data;
}
export async function Redirect() {
  const user = localStorage.getItem('user');
  console.log(user);
  if (user !== undefined) {
    const { token, role } = JSON.parse(user);
    console.log('entrou');
    const result = await verify(token);
    if (!result) {
      return '/login';
    }
    return `/${role}/products`;
  }
  return '/login';
}
