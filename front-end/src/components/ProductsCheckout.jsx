import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import GenericRowCheckout from './GenericRowCheckout';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function ProductsCheckout() {
  const [cart, setCart] = useState();
  const [totalState, setTotal] = useState();

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinho) {
      const { cartItems, total } = carrinho;
      setTotal(total);
      return setCart(cartItems);
    }
  }, []);

  const handleChange = ({ target }) => {
    let newTotal = 0;
    const newCart = JSON.parse(localStorage.getItem('carrinho'));
    const { cartItems } = newCart;
    cartItems.splice(target.id, 1);
    newTotal = cartItems.reduce((acc, item) => acc + item.subTotal, 0);
    localStorage.setItem('carrinho', JSON.stringify({ cartItems, total: newTotal }));
    setTotal(newTotal);
    return setCart(cartItems);
  };

  return (
    <section className="flex flex-col mt-10">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-8">Confira seu pedido!</h1>
        <TableContainer className="flex justify-center mb-8">
          <Table sx={ { maxWidth: 800 } } aria-label="customized table">
            <TableHead className="bg-[#ec2c31]">
              <TableRow>
                <StyledTableCell className="rounded-tl-lg">Item</StyledTableCell>
                <StyledTableCell align="center">Descrição</StyledTableCell>
                <StyledTableCell align="center">Quantidade</StyledTableCell>
                <StyledTableCell align="center">Valor Unitário</StyledTableCell>
                <StyledTableCell align="center">Sub-total</StyledTableCell>
                <StyledTableCell
                  className="rounded-tr-lg"
                  align="center"
                >
                  Remover Item
                </StyledTableCell>
              </TableRow>
            </TableHead>
            {cart ? (
              cart.map((cartItem, i) => (
                <GenericRowCheckout
                  handleState={ handleChange }
                  products={ cartItem }
                  index={ i }
                  key={ i }
                />))
            ) : (null)}
          </Table>
        </TableContainer>
        <div
          data-testid="customer_checkout__element-order-total-price"
          className="font-bold text-xl mb-8"
        >
          {`Total: R$${Number(totalState).toFixed(2).replace('.', ',')}`}
        </div>
      </div>
    </section>
  );
}

export default ProductsCheckout;
