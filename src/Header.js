import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>BLOGS!</h1>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/myblogs">My Blog</Link></li>
          <li><Link to="/create">Create Post</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Subscription">Subscription</Link></li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Header;