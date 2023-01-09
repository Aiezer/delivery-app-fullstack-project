import { Table, TableContainer, TableHead, TableRow } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import React from 'react';
import { styled } from '@mui/material/styles';
import GenerateTableRows from './GenerateTableRows';
// import ReactTable from 'react-table';
// import MyContext from '../../Context';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function ProductsTable(sale) {
  const { products } = sale;

  return (
    <div>
      <TableContainer className="flex justify-center mb-8">
        <Table sx={ { maxWidth: 800 } } aria-label="customized table">
          <TableHead className="bg-[#ec2c31]">
            <TableRow>
              <StyledTableCell className="rounded-tl-lg">Item</StyledTableCell>
              <StyledTableCell align="center">Descrição</StyledTableCell>
              <StyledTableCell align="center">Quantidade</StyledTableCell>
              <StyledTableCell align="center">Valor Unitário</StyledTableCell>
              <StyledTableCell
                align="center"
                className="rounded-tr-lg"
              >
                Sub-total
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <tbody>
            {products
              ? products.map((product, i) => (
                <GenerateTableRows align="center" products={ product } index={ i } key={ i } />
              ))
              : null}
          </tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProductsTable;
