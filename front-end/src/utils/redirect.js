const axios = require('axios');

export default async function verify() {
  const data = JSON.parse(localStorage.getItem('user'));

  if (!data) {
    localStorage.setItem('user', JSON.stringify({ token: 'token' }));
    return '/login';
  }
  const { token } = data;
  if (!token) return '/login';
  const tokenResp = await axios({
    method: 'post',
    url: 'http://localhost:3001/validate',
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
      localStorage.removeItem('user');
      return '/login';
    }
    return `/${role}/products`;
  }
  return '/login';
}
