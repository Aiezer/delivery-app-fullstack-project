import { Button, FormControl, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NavbarProducts from '../components/NavbarProducts';

const emailRegex = /\S+@\S+\.\S+/;
const TWELVE = 12;
const SIX = 6;

function Admin() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', password: '', role: 'customer' });

  const validateEmail = (email) => emailRegex.test(email);

  useEffect(() => {
    const { password, email, name } = form;
    if (password.length >= SIX && name.length >= TWELVE && validateEmail(email)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleClick = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    await axios.post('http://localhost:3001/admin/register', { ...form }, {
      headers: { Authorization: user.token },
    })
      .then(() => {
        setForm({
          name: '', email: '', password: '', role: '' });
        setError(false);
      })
      .catch(() => setError(true));
  };

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.id]: target.value });
  };

  return (
    <>
      <NavbarProducts />
      <div className="flex flex-col items-center mt-10 w-full">
        <h2 className="font-bold text-xl mb-4">Cadastrar novo Usuário</h2>
        <form onSubmit={ handleSubmit } className="flex items-center">
          <TextField
            margin="normal"
            label="Nome completo"
            data-testid="admin_manage__input-name"
            type="text"
            id="name"
            value={ form.name }
            onChange={ handleChange }
          />
          <TextField
            margin="normal"
            label="E-mail"
            autoComplete="email"
            data-testid="admin_manage__input-email"
            id="email"
            type="text"
            value={ form.email }
            placeholder="seu-email@site.com.br"
            onChange={ handleChange }
          />
          <TextField
            margin="normal"
            label="Senha"
            data-testid="admin_manage__input-password"
            id="password"
            type="password"
            name="password"
            value={ form.password }
            placeholder="**********"
            onChange={ handleChange }
          />
          <FormControl sx={ { m: 1, minWidth: 100 } }>
            <InputLabel id="demo-simple-select-filled-label">Tipo</InputLabel>
            <Select
              autoWidth
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              data-testid="admin_manage__select-role"
              value={ form.role }
              onChange={ handleChange }
              label="Tipo"
            >
              <MenuItem value="customer">Cliente</MenuItem>
              <MenuItem value="seller">Vendedor</MenuItem>
              <MenuItem value="administrator">Administrador</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="error"
            data-testid="admin_manage__button-register"
            id="register"
            name="register"
            type="button"
            disabled={ isDisabled }
            onClick={ handleClick }
          >
            {' '}
            Cadastrar
            {' '}
          </Button>
        </form>
        { error
          ? <p data-testid="admin_manage__element-invalid-register"> Error </p> : null }
      </div>
    </>
  );
}

export default Admin;
