import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import { loginMockAdmin, loginMockCustomer, loginMockSeller,
  productsMock } from './helpers/Mocks';
import loginRequest from '../utils/request';

const EMAIL_INPUT_ID = 'common_login__input-email';
const PASSWORD_INPUT_ID = 'common_login__input-password';
const LOGIN_BTN_ID = 'common_login__button-login';
jest.mock('axios');
describe('testa a página de login', () => {
  it('testa o fecth do login', async () => {
    renderWithRouter(<App />, '/login');

    // console.log('login MOck', loginMock);
    // axios.post.mockResolvedValue(loginMock);
    // axios = jest.fn((a) => console.log(a)).mockResolvedValue(loginMock);

    axios.mockImplementation((a) => {
      console.log(a);
      return Promise.resolve(loginMockCustomer);
    });

    const result = await loginRequest();
    // console.log('result', result);
    // console.log('login MOck', loginMock);
    expect(result).toEqual(loginMockCustomer.data);
  });
  it(`testa se os elementos estão na tela e possivel realizar o
       login como cliente`, async () => {
    const { history } = renderWithRouter(<App />, '/login');

    axios.mockImplementation((a) => {
      if (a.method === 'POST') {
        return Promise.resolve(loginMockCustomer);
      }
      if (a.method === 'GET') {
        return Promise.resolve(productsMock);
      }
    });

    const emailInput = screen.getByTestId(EMAIL_INPUT_ID);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT_ID);
    const loginBtn = screen.getByTestId(LOGIN_BTN_ID);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn).toBeDisabled();

    userEvent.type(emailInput, 'zebirita@email.com');
    userEvent.type(passwordInput, '$#zebirita#$');

    expect(screen.getByTestId('common_login__button-login')).toBeEnabled();

    userEvent.click(loginBtn);

    await waitFor(() => {
      expect(history.pathname).toBe('/customer/products');
    });
  });
  it('testa se é possível realizar o login como Administrador', async () => {
    const { history } = renderWithRouter(<App />, '/login');
    axios.mockImplementation(() => Promise.resolve(loginMockAdmin));

    const emailInput = screen.getByTestId(EMAIL_INPUT_ID);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT_ID);
    const loginBtn = screen.getByTestId(LOGIN_BTN_ID);

    userEvent.type(emailInput, 'adm@deliveryapp.com');
    userEvent.type(passwordInput, '--adm2@21!!--');

    userEvent.click(loginBtn);

    await waitFor(() => {
      expect(history.pathname).toBe('/admin/manage');
    });
  });
  it('testa se é possível realizar o login como vendedor', async () => {
    const { history } = renderWithRouter(<App />, '/login');
    axios.mockImplementation(() => Promise.resolve(loginMockSeller));

    const emailInput = screen.getByTestId(EMAIL_INPUT_ID);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT_ID);
    const loginBtn = screen.getByTestId(LOGIN_BTN_ID);

    userEvent.type(emailInput, 'fulana@deliveryapp.com');
    userEvent.type(passwordInput, 'fulana@123');

    userEvent.click(loginBtn);

    await waitFor(() => {
      expect(history.pathname).toBe('/seller/orders');
    });
  });
  it('testa se é possível navegar para a página de cadastro', async () => {
    const { history } = renderWithRouter(<App />, '/login');

    const registerBtn = screen.getByTestId('common_login__button-register');

    expect(registerBtn).toBeInTheDocument();
    userEvent.click(registerBtn);
    await waitFor(() => {
      expect(history.pathname).toBe('/register');
    });
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
});
