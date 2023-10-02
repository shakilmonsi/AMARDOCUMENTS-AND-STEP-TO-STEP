import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
        return (
      <nav>
                  <ul>
        <li><Link to="/">হোম</Link></li>
        <li><Link to="/about">আমাদের সম্পর্কে</Link></li>
        <li><Link to="/contact"></Link></li>
      </ul>
      </nav>
        
        );
}

export default Navbar;