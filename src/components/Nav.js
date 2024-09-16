import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
  return (
    <nav>
      <Link to="/colors">Color List</Link>
      <Link to="/colors/new">Add New Color</Link>
    </nav>
  );
}

export default Nav;
