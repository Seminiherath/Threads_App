// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo">
          Threads
        </NavLink>

        {/* Search Bar */}
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <NavLink to="/" className="nav-link" end>
            Home
          </NavLink>
          <NavLink to="/explore" className="nav-link">
            Explore
          </NavLink>
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;