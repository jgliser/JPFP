import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/campuses">All Campuses</Link>
        </li>
        <li>
          <Link to="/students">All Students</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
