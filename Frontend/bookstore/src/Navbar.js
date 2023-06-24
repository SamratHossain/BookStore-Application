import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">Book Store</a>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Books</a></li>
          <li><a href="/addbook">Add Book</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
