export default async function verify() {
  const data = localStorage.getItem(user).JSON();
  const { token } = data;
  const tokenResp = await axios({
    method: 'POST',
    url: 'http://localhost:3001/validate',
    headers,
    data: {
      token,
    },
  });
  if (tokenResp) {
    return data.role;
  }
  localStorage.setItem('user', '');
  return '/login';
}
