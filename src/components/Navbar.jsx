// import "./Navbar.css";
// import { NavLink } from "react-router-dom";
// import logo from "../assets/logo.png";

// import { useState } from "react";
// import {  useLocation } from "react-router-dom";

// export default function Navbar() {
//   const location = useLocation();

//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <div className="nav-wrapper">
//       <nav className="navbar">

//         {/* LOGO */}
//         <div className="logo">
//           <img src={logo} alt="logo" />
//         </div>
// <div 
//   className="menu-toggle"
//   onClick={() => setMenuOpen(!menuOpen)}
// >
//   ☰
// </div>
//         {/* MENU */}
//         <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

//           <NavLink to="/" className={({isActive}) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
//             Home
//           </NavLink>

//      <NavLink
//   to="/about"
//   className={() =>
//     location.pathname === "/about" ||
//     location.pathname === "/expert"
//       ? "active"
//       : ""
//   }
//   onClick={() => setMenuOpen(false)}
// >
//   About Us
// </NavLink>
//           <NavLink to="/impact" className={({isActive}) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
//             Our Work
//           </NavLink>

//           <NavLink to="/services" className={({isActive}) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
//             Our Services
//           </NavLink>



//         </ul>

//   {/* CONTACT BUTTON */}
//         <NavLink 
//           to="/contact" 
//           className={({ isActive }) => 
//             isActive ? "contact-btn active-contact" : "contact-btn"
//           }
//         >
//           Contact Us
//         </NavLink>

//       </nav>
//     </div>
//   );
// }


import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

import { useState, useLayoutEffect, useRef } from "react";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef(null);
  
  const indicatorRef = useRef(null);

  // 🔥 Move active indicator
useLayoutEffect(() => {
  const activeLink = navRef.current?.querySelector(".active");

  if (activeLink && indicatorRef.current && navRef.current) {
    const rect = activeLink.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();

    indicatorRef.current.style.width = `${rect.width}px`;
    indicatorRef.current.style.left = `${rect.left - parentRect.left}px`;
  }
}, [location.pathname]);


useLayoutEffect(() => {
  const updateIndicator = () => {
    const activeLink = navRef.current?.querySelector(".active");

    if (activeLink && indicatorRef.current && navRef.current) {
      const rect = activeLink.getBoundingClientRect();
      const parentRect = navRef.current.getBoundingClientRect();

      indicatorRef.current.style.width = `${rect.width}px`;
      indicatorRef.current.style.left = `${rect.left - parentRect.left}px`;
    }
  };

  updateIndicator();

  window.addEventListener("resize", updateIndicator);
  return () => window.removeEventListener("resize", updateIndicator);

}, [location.pathname]);

useLayoutEffect(() => {
  const links = navRef.current?.querySelectorAll("a");

  const moveIndicator = (el) => {
    if (!el || !indicatorRef.current || !navRef.current) return;

    const rect = el.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();

    indicatorRef.current.style.width = `${rect.width}px`;
    indicatorRef.current.style.left = `${rect.left - parentRect.left}px`;
  };

  const handleMouseEnter = (e) => moveIndicator(e.target);

  const handleMouseLeave = () => {
    const active = navRef.current.querySelector(".active");
    if (active) moveIndicator(active);
  };

  // ✅ add events
  links.forEach((link) => {
    link.addEventListener("mouseenter", handleMouseEnter);
  });

  navRef.current.addEventListener("mouseleave", handleMouseLeave);

  // ✅ initial position
  const active = navRef.current.querySelector(".active");
  if (active) moveIndicator(active);

  // ✅ cleanup (VERY IMPORTANT)
  return () => {
    links.forEach((link) => {
      link.removeEventListener("mouseenter", handleMouseEnter);
    });
    navRef.current?.removeEventListener("mouseleave", handleMouseLeave);
  };

}, [location.pathname]);

  return (
    <div className="nav-wrapper">
      <nav className="navbar">

        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* MOBILE MENU BUTTON */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
  ☰
</div>

        {/* NAV LINKS */}
       <ul ref={navRef} className={`nav-links ${menuOpen ? "active" : ""}`}>
  <div ref={indicatorRef} className="nav-indicator"></div>

  <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
  <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About Us</NavLink></li>
  <li><NavLink to="/impact" className={({isActive}) => isActive ? "active" : ""}>Our Work</NavLink></li>
  <li><NavLink to="/services" className={({isActive}) => isActive ? "active" : ""}>Our Services</NavLink></li>
</ul>

        {/* CONTACT BUTTON */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "contact-btn active-contact"
              : "contact-btn"
          }
        >
          Contact Us
        </NavLink>
      </nav>
    </div>
  );
}