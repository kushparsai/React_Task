import React from 'react';

const ProductComponent = ({ product }) => {
  return (
    <div>
      <h2>{product.productName}</h2>
      <p>Price: {product.productPrice}</p>
      <p>Description: {product.productDescription}</p>
    </div>
  );
};

export default ProductComponent;
