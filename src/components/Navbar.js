import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
   return (
      <nav>
         <h1>User data</h1>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/contacts">Contact</Link></li>
         </ul>
      </nav>
   )
}

export default Navbar;
