import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Redirect } from '../../utils/redirect';

export default function RedirectComponent() {
  // const navigate = useNavigate();
  const [address, setAddress] = useState('');

  useEffect(() => {
    const validateToken = async () => {
      const data = await Redirect();
      setAddress(data);
    };
    validateToken();
  });

  return (address !== '' && <Navigate to={ address } />);
}
