import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src="path-to-background-image.jpg" alt="Nursery Background" className="background-image" />
      <div className="content">
        <h1>Saini Nursery</h1>
        <p>Welcome to Saini Nursery, where we offer a wide selection of unique houseplants to brighten up your home and garden. Explore our collection and find your perfect plant today!</p>
        <Link to="/products">
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
