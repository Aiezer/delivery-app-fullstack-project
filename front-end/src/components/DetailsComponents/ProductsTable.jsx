import React from 'react';
import ReactTable from 'react-table';
// import PropTypes from 'prop-types';

function ProductsTable(products) {
  console.log(products);
  // eslint-disable-next-line react/destructuring-assignment
  const data = products.map(({ id, name, price, qtd: { quantity } }) => ({
    item: id,
    description: name,
    unitaryValue: price,
    quantity,
    subtotal: (price * quantity).toFixed(2),
  }));

  const columns = [
    {
      Header: 'Item',
      accessor: 'item',
    },
    {
      Header: 'Descrição',
      accessor: 'description',
    },
    {
      Header: 'Quantidade',
      accessor: 'quantity',
    },
    {
      Header: 'Valor Unitário',
      accessor: 'quantity',
    },
    {
      Header: 'Quantidade',
      accessor: 'unitaryValue',
    },
    {
      Header: 'Sub-total',
      accessor: 'subtotal',
    },
  ];

  return (
    <ReactTable data={ data } columns={ columns } />
  );
}

export default ProductsTable;

// ProductsTable.propTypes = {
//   products: PropTypes.arrayOf(Object).isRequired,
// };
