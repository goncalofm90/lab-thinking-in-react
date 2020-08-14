import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product) => (
          <ProductRow
            key={product.name}
            name={product.name}
            stock={product.stocked}
            price={product.price}
          />
        ))}
      </tbody>
    </table>
  );
}
export default ProductTable;
