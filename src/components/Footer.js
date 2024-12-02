// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4">
      <div className="container d-flex justify-content-between">
        <div>
          <h4>FAQs</h4>
          <p>Questions?</p>
        </div>
        <div>
          <h4>About Us</h4>
          <p>BlockFund</p>
        </div>
        <div>
          <select name="language" id="language" className="form-select bg-dark text-white">
            <option value="en">English</option>
            {/* Add more languages as needed */}
          </select>
          <select name="currency" id="currency" className="form-select bg-dark text-white mt-2">
            <option value="usd">US Dollar (USD)</option>
            {/* Add more currencies as needed */}
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;