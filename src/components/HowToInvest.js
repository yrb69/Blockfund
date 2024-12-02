// src/components/HowToInvest.js
import React from 'react';

const HowToInvest = () => {
  return (
    <div className="container text-white my-5">
      <h2 className="text-center mb-4">How To Invest?</h2>
      <ol>
        <li>Make sure you have registered your account. If you haven't, click <a href="#register" className="text-info">Here</a> to register.</li>
        <li>Verify Your Identity (KYC).</li>
        <li>Find projects that match your interests.</li>
        <li>Click on a project to view detailed information, including its whitepaper, business plan, and potential returns.</li>
        <li>Once you've chosen a project, click the "Invest Now" button.</li>
        <li>Enter the amount you wish to invest.</li>
        <li>Choose your payment Method (Cryptocurrency or Fiat).</li>
        <li>Confirm your transaction and wait for it to be verified.</li>
      </ol>

      <h2 className="text-center mt-5 mb-4">How To Withdraw?</h2>
      <ol>
        <li>If the project succeeds and returns are available, go to "Withdraw Funds" menu.</li>
        <li>Enter the amount you want to withdraw and select a withdrawal method (crypto wallet or bank account).</li>
        <li>Confirm your withdrawal request and wait for it to be processed.</li>
      </ol>

      <div className="mt-5">
        <p><strong>Need Help? We're Here for You!</strong></p>
        <p>If you have any questions or need further assistance, feel free to contact our support team via:</p>
        <ul>
          <li>Email: Blockfund.cs@gmail.com</li>
          <li>Live Chat: blockfund.cs</li>
          <li>Phone: +62 12312412</li>
        </ul>
      </div>

      <p className="mt-4">Start supporting innovative projects today! With BlockFund, investing is easier, safer, and more transparent. This tutorial provides clear instructions for potential investors while maintaining a professional tone suitable for an international audience!</p>

      <footer className="d-flex justify-content-between mt-5">
        <div>
          <h4>FAQs</h4>
          Questions?
        </div>
        <div>
          <h4>About Us</h4>
          BlockFund
        </div>
        <div className="d-flex">
          <select name="language" id="language" className="form-select bg-dark text-white me-2">
            <option value="en">English</option>
            {/* Add more languages as needed */}
          </select>
          <select name="currency" id="currency" className="form-select bg-dark text-white">
            <option value="usd">US Dollar (USD)</option>
            {/* Add more currencies as needed */}
          </select>
        </div>
      </footer>

    </div>
  );
};

export default HowToInvest;