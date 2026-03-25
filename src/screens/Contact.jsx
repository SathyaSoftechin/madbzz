import "./Contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone  } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
export default function Contact() {
  const [showPopup, setShowPopup] = useState(false); // ✅ ADD STATE

  const handleSend = () => {
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <span className="badge">● Available for new projects</span>

        <h1>
          Let’s Work <span>Together</span>
        </h1>

        <p>
         Have a project in mind? We're ready to help your brand reach its full potential.
        </p>

        <p>Fill out the form below and our team will get back to you within 24 hours.</p>
      </section>

      {/* MAIN */}
      <section className="contact-main">

        {/* LEFT FORM */}
        <div className="contact-form">

          <h3>Start Your Project</h3>

          <div className="form-grid">

            <input placeholder="Full Name" />
            <input placeholder="Email Address" />

            <input placeholder="Phone Number" />
            <input placeholder="Company Name" />

            <select>
              <option>Service Interested In</option>
              <option>SEO</option>
              <option>Social Media</option>
            </select>

            <select>
              <option>Estimated Budget</option>
              <option>$1k - $5k</option>
            </select>

          </div>

          <textarea placeholder="Project Details"></textarea>

  {/* ✅ UPDATED BUTTON */}
          <button className="send-btn" onClick={handleSend}>
            Send Message <FiSend className="send-icon" />
          </button>

        </div>

        {/* RIGHT INFO */}
        <div className="contact-info">

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Our Office</h4>
              <p>123 Creative Way, Suite 500</p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h4>Email Us</h4>
              <p>hello@agency.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhone />
            <div>
              <h4>Call Us</h4>
              <p>+1 415 555 0123</p>
            </div>
          </div>

        </div>

      </section>
      {/* ✅ POPUP ADDED HERE */}
  {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div className="popup-icon">✓</div>
            <h2>Thank You!</h2>
            <p>
              We've received your inquiry and our team will be in touch within 24 hours.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}