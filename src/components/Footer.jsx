import "./Footer.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <div className="logo-box">
            <img src={logo} alt="logo" />
            <h3>MadBuzz<span>.</span></h3>
          </div>

          <p>
            Data-driven digital marketing agency helping brands scale
            through creative excellence and analytical precision.
          </p>
<div className="socials">

  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
    <FaFacebook />
  </a>

  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
    <FaInstagram />
  </a>

  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
    <FaLinkedin />
  </a>

</div>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4>Services</h4>
          <p>Social Media</p>
          <p>Paid Ads</p>
          <p>Content Creation</p>
          <p>Influencer Marketing</p>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <NavLink to="/services">Our Services</NavLink>
  <NavLink to="/impact">Our Impact</NavLink>
  <NavLink to="/about">About Us</NavLink>
  <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col newsletter">
          <h4>Newsletter</h4>
          <p>Get the latest marketing insights delivered to your inbox.</p>

          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 MadBuzz Digital Agency. All rights reserved.</p>

        <div>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>

    </footer>
  );
}