import React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';

function GenericRowCheckout({ products, index, handleState }) {
  const { name, quantity, price, subTotal } = products;

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <StyledTableRow
      data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
    >
      <StyledTableCell
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
        component="th"
        scope="row"
        align="center"
      >
        {index + 1}
      </StyledTableCell>
      <StyledTableCell
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
        align="center"
      >
        {name}
      </StyledTableCell>
      <StyledTableCell
        align="center"
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {quantity}
      </StyledTableCell>
      <StyledTableCell
        align="center"
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {`R$${Number(price).toFixed(2).replace('.', ',')}`}
      </StyledTableCell>
      <StyledTableCell
        align="center"
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {`R$${subTotal.toFixed(2).replace('.', ',')}`}
      </StyledTableCell>
      <StyledTableCell
        align="center"
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
      >
        <button type="button" id={ index } onClick={ handleState }>Remover</button>
      </StyledTableCell>
    </StyledTableRow>
  );
}

GenericRowCheckout.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default GenericRowCheckout;
