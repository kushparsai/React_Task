import React from 'react';
import ProductComponent from './ProductComponent';

const App = () => {
  const productData = {
    productName: "Wireless Headphones",
    productPrice:2000,
    productDescription: "High-quality wireless headphones with noise cancellation."
  };

  return (
    <div>
      <h1>Product Details</h1>
      <ProductComponent product={productData} />
    </div>
  );
};

export default App;