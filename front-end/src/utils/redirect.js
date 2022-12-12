import axios from 'axios';
import handleUrl from './handleUrl';

export async function verify(token) {
  const data = await axios.post('http://localhost:3001/validate', {
  }, {
    headers: { Authorization: token },
  }).then((result) => result.data).catch((err) => {
    if (err) {
      setError(true);
    }
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
