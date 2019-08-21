import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: 'none' }}>Home Page</Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: 'none' }}>About Page</Link>
          </li>
          <li>
            <Link to="/contact" style={{ textDecoration: 'none' }}>Contact Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
