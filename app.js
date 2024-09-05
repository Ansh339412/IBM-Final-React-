
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProductListingPage from './ProductListingPage';
import ShoppingCartPage from './ShoppingCartPage';

const App = () => {
  const [cart, setCart] = React.useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<ShoppingCartPage cart={cart} />} />
      </Routes>
    </Router>
  );
};

export default App;
