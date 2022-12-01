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
  if (tokenResp) {
    return data.role;
  }
  return '/login';
}
