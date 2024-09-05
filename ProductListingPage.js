import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductListingPage.css';

const products = [
  // Sample product data
  { id: 1, name: 'Fern', price: 15, category: 'Indoor', image: 'path-to-fern.jpg', description: 'A lush indoor fern.' },
  { id: 2, name: 'Cactus', price: 10, category: 'Desert', image: 'path-to-cactus.jpg', description: 'A hardy desert cactus.' },
  // Add more products here
];

const ProductListingPage = () => {
  const [cart, setCart] = useState({});

  const handleAddToCart = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  };

  return (
    <div>
      <header className="header">
        <Link to="/cart">
          <div className="cart-icon">
            <span>{Object.values(cart).reduce((a, b) => a + b, 0)}</span>
          </div>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button
              disabled={!!cart[product.id]}
              onClick={() => handleAddToCart(product)}
            >
              {cart[product.id] ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
