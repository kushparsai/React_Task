// ProductCard.jsx
import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [rating, setRating] = useState(product.rating);

  const incrementRating = () => {
    setRating(rating + 1);
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '8px',
        width: '250px',
      }}
    >
      <h3>{product.title}</h3>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
      />
      <p>Price: {product.price}</p>
      <p>Rating: {rating}</p>
      <button onClick={incrementRating}>Increment Rating</button>
    </div>
  );
};

export default ProductCard;
