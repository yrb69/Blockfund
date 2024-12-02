// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <div className="container">
        <Navbar.Brand as={Link} to="/">BlockFund</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex mx-auto w-50">
            <FormControl
              type="text"
              placeholder="Search Project, Creators, and Categories"
              className="me-2"
            />
          </Form>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/HowToInvest">How to Invest</Nav.Link>
            <Nav.Link as={Link} to="/">How to Create</Nav.Link>
            <Nav.Link as={Link} to="/">How to Category</Nav.Link>
            <Nav.Link as={Link} to="/">About Us</Nav.Link>
            {/* Add more links as needed */}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;