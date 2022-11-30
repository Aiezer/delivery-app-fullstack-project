// import React from 'react';
// import { screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import renderWithRouter from './helpers/renderWithRouter';
// import App from '../App';
// import httpRequest from '../axios/config';
// import tokenMock from './helpers/Mocks';

// describe('testa a página de login', () => {
//   it('testa se os elementos estão na tela e possivel realizar o login', async () => {
//     const { history } = renderWithRouter(<App />, '/login');

//     jest.spyOn(httpRequest, 'post').mockResolvedValue(tokenMock);

//     const emailInput = screen.getByTestId('common_login__input-email');
//     const passwordInput = screen.getByTestId('common_login__input-password');
//     const loginBtn = screen.getByTestId('common_login__button-login');

//     expect(emailInput).toBeInTheDocument();
//     expect(passwordInput).toBeInTheDocument();
//     expect(loginBtn).toBeInTheDocument();
//     expect(loginBtn).toBeDisabled();

//     userEvent.type(emailInput, 'zebirita@email.com');
//     userEvent.type(passwordInput, '$#zebirita#$');

//     expect(screen.getByTestId('common_login__button-login')).toBeEnabled();

//     userEvent.click(loginBtn);

//     await waitFor(() => {
//       expect(history.pathname).toBe('/products');
//     });
//   });
//   after(() => {
//     global.fetch.mockRestore();
//   });
// });
