import axios from 'axios';

export default async function verify(token) {
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
