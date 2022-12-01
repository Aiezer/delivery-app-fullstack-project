import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Redirect } from '../utils/redirect';

export default function RedirectComponent() {
  const [address, setAddress] = useState('');

  useEffect(() => {
    const storage = localStorage.getItem('user');
    if (storage && address === '') {
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
  }, [address]);

  return (address !== '' && <Navigate to={ address } />);
}
