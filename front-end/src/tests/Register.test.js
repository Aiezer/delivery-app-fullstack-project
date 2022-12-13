import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import { loginMockCustomer, newUserMock, productsMock } from './helpers/Mocks';

jest.mock('axios');
describe('testa a página de cadastro dos usuários', () => {
  it(`testa se os elementos estão presentes na tela e 
  é possível cadastrar novo usuário`, async () => {
    const { history } = renderWithRouter(<App />, '/register');

    axios.post.mockResolvedValueOnce(newUserMock);

    axios.mockImplementation((a) => {
      if (a.url === 'http://localhost:3001/login') {
        return Promise.resolve(loginMockCustomer);
      }
      if (a.url === 'http://localhost:3001/products') {
        return Promise.resolve(productsMock);
      }
    });

    const nameInput = screen.getByTestId('common_register__input-name');
    const emailInput = screen.getByTestId('common_register__input-email');
    const passwordInput = screen.getByTestId('common_register__input-password');
    const registerBtn = screen.getByTestId('common_register__button-register');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(registerBtn).toBeInTheDocument();
    expect(registerBtn).toBeDisabled();

    userEvent.type(nameInput, 'New Cliente User');
    userEvent.type(emailInput, 'newClient@email.com');
    userEvent.type(passwordInput, '$NewUser*&');

    expect(screen.getByTestId('common_register__button-register')).toBeEnabled();

    userEvent.click(registerBtn);

    await waitFor(() => {
      expect(history.pathname).toBe('/customer/products');
    });
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
});
