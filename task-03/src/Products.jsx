// Products.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
