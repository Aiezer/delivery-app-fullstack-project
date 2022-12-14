import React from 'react';
import GenerateTableRows from './GenerateTableRows';
// import ReactTable from 'react-table';
// import MyContext from '../../Context';

function ProductsTable(sale) {
  const { products } = sale;

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {products
            ? products.map((product, i) => (
              <GenerateTableRows products={ product } index={ i } key={ i } />
            ))
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
