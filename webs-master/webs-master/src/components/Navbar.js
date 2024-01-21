import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/design">Design</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/gallery">Gallery</Link>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
