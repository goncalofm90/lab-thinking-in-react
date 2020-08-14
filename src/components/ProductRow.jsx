import React from 'react';

function ProductRow(props) {
  console.log(props);
  return (
    <tr>
      <td style={{ color: props.stock ? 'white' : 'red' }}>{props.name}</td>
      <td style={{ color: props.stock ? 'white' : 'red' }}>{props.price}</td>
    </tr>
  );
}

export default ProductRow;
