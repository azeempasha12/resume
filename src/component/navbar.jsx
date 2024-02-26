import {Link} from "react-router-dom"

import React, { useState } from 'react';

 export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">Almabetter</span>
      </div>

      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>

      

      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <a href="#resume_template">Resume Template</a>
        <a href="#my_resumes">My Resumes</a>
        <Link to="about" >About Us</Link>
     
        
        
        
        {/* <a href="#contact">Contact</a> */}
      </div>
    </nav>
  );
};




