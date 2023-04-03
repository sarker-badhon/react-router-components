import React from 'react';
import { Link } from 'react-router-dom';
import  './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contacts">Contacts</Link>
          <Link to="/posts">post</Link>
          <Link to="/Friends">Friends</Link>
         
            
        </nav>
    );
};

export default Header;