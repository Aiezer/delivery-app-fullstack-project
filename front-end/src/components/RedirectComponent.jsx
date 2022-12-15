import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import verify from '../utils/redirect';

export default function RedirectComponent() {
  const [address, setAddress] = useState('');

  async function Redirect() {
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

  useEffect(() => {
    const storage = localStorage.getItem('user');
    if (storage) {
      const validateToken = async () => {
        try {
          const data = await Redirect();
          setAddress(data);
        } catch (e) {
          localStorage.removeItem('user');
          setAddress('/login');
        }
      };
      validateToken();
    } else {
      setAddress('/login');
    }
  }, []);

  return (address !== '' && <Navigate to={ address } />);
}
