import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="nav-wrapper">
      <nav className="navbar">

        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
<div 
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</div>
        {/* MENU */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <NavLink to="/" className={({isActive}) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
            About Us
          </NavLink>

          <NavLink to="/impact" className={({isActive}) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Our Impact
          </NavLink>

          <NavLink to="/services" className={({isActive}) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Our Services
          </NavLink>



        </ul>

  {/* CONTACT BUTTON */}
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            isActive ? "contact-btn active-contact" : "contact-btn"
          }
        >
          Contact Us
        </NavLink>

      </nav>
    </div>
  );
}