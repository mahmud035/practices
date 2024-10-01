import React from 'react';

const ProductCategoryRow = ({ category }) => {
  return (
    <div>
      <tr colSpan="2">
        <th>{category}</th>
      </tr>
    </div>
  );
};

export default ProductCategoryRow;
