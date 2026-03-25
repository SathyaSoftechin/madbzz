import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";


export default function Navbar() {
  
  return (
    <div className="nav-wrapper">
      <nav className="navbar">

        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* MENU */}
        <ul className="nav-links">
<NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
  Home
</NavLink>

<NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>
  About Us
</NavLink>
       
<NavLink to="/impact" className={({isActive}) => isActive ? "active" : ""}>
  Our Impact
</NavLink>

<NavLink to="/services" className={({isActive}) => isActive ? "active" : ""}>
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