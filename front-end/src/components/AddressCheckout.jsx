import { Alert, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkoutRequest, getSellers } from '../utils/request';

function AdressCheckout() {
  const navigate = useNavigate();
  const [sellers, setSellers] = useState([]);
  const [form, setForm] = useState({
    userId: 0,
    sellerId: 0,
    totalPrice: JSON.parse(localStorage.getItem('carrinho')).total,
    deliveryAddress: '',
    deliveryNumber: '',
    status: 'Pendente',
    seller: '',
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    const start = async () => {
      const sellersReq = await getSellers();
      setSellers(sellersReq);
    };
    start();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.seller === '' || form.deliveryAddress === '' || form.deliveryNumber === '') {
      return setError(true);
    }
    const cart = JSON.parse(localStorage.getItem('carrinho')).cartItems;
    const products = cart.map((prod) => ({ prodId: prod.id, prodQnt: prod.quantity }));
    const data = {
      ...form,
      userId: JSON.parse(localStorage.getItem('user')).id,
      sellerId: form.seller,
    };
    const routeId = await checkoutRequest(data, products);
    navigate(`/customer/orders/${routeId}`);
  };

  return (
    <section className="flex flex-col items-center">
      {error ? (
        <Alert
          data-testid="common_login__element-invalid-email"
          severity="error"
          className="mb-4 mt-2"
        >
          Favor informar todos os campos!
        </Alert>
      ) : null}
      <h1
        className="mb-4 p-3 pl-6 pr-6 text-xl rounded-lg"
      >
        Detalhes para entrega
      </h1>
      <FormControl>
        <InputLabel id="demo-simple-select-helper-label" className="mr-4">
          Selecione o vendedor
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-autowidth"
          data-testid="customer_checkout__select-seller"
          value={ form.seller }
          onChange={ handleChange }
          autoWidth
          name="seller"
          label="Selecione o vendedor"
        >
          { sellers.map((seller, i) => (
            <MenuItem value={ seller.id } key={ i }>{ seller.name }</MenuItem>
          ))}
        </Select>
        <div className="flex">
          <TextField
            fullWidth
            sx={ { marginRight: 5 } }
            margin="normal"
            label="Endereço"
            autoComplete="address"
            autoFocus
            data-testid="customer_checkout__input-address"
            id="address"
            type="text"
            name="deliveryAddress"
            value={ form.deliveryAddress }
            placeholder="Rua X, Bairro Y"
            onChange={ handleChange }
          />
          <TextField
            margin="normal"
            label="Número"
            autoComplete="address"
            autoFocus
            type="Number"
            placeholder="000"
            name="deliveryNumber"
            id="addressNumber"
            onChange={ handleChange }
            value={ form.deliveryNumber }
            data-testid="customer_checkout__input-address-number"
          />
        </div>
        <Button
          variant="contained"
          color="error"
          data-testid="customer_checkout__button-submit-order"
          type="submit"
          sx={ { mt: 2, mb: 10 } }
          onClick={ handleSubmit }
        >
          Finalizar Pedido
        </Button>
      </FormControl>
    </section>
  );
}

export default AdressCheckout;
