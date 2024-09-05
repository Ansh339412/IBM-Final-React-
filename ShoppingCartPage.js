import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCartPage.css';

const ShoppingCartPage = ({ cart }) => {
  const [cartItems, setCartItems] = useState(cart);

  const handleIncrease = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleDecrease = (id) => {
    setCartItems((prev) => {
      const newCount = (prev[id] || 0) - 1;
      if (newCount <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newCount };
    });
  };

  const handleDelete = (id) => {
    const { [id]: _, ...rest } = cartItems;
    setCartItems(rest);
  };

  const totalItems = Object.values(cartItems).reduce((a, b) => a + b, 0);
  const totalPrice = totalItems * 15; // Assuming a fixed price for simplicity

  return (
    <div>
      <header className="header">
        <Link to="/products">
          <div className="cart-icon">
            <span>{totalItems}</span>
          </div>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
      </header>
      <div className="cart">
        <h1>Shopping Cart</h1>
        <p>Total items: {totalItems}</p>
        <p>Total cost: ${totalPrice}</p>
        <button className="checkout-button">Checkout - Coming Soon</button>
        <Link to="/products">
          <button className="continue-shopping-button">Continue Shopping</button>
        </Link>
        <div className="cart-items">
          {Object.keys(cartItems).map((id) => (
            <div key={id} className="cart-item">
              <img src="path-to-image.jpg" alt={`Product ${id}`} />
              <h2>Product {id}</h2>
              <p>${15}</p>
              <button onClick={() => handleIncrease(id)}>+</button>
              <button onClick={() => handleDecrease(id)}>-</button>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
