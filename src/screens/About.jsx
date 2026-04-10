import "./About.css";

import haraa from "../assets/haraa.png";
import hlopg from "../assets/hlopg.png";
import sathya from "../assets/sathyasoftech.png";
import sr from "../assets/sr reality.png";
import srmedia from "../assets/sr media.png";
import guntur from "../assets/guntur karam.png";
import abouthero from "../assets/abouthero.png";
import vinay from "../assets/vinay.png";
import keerthi from "../assets/keerthi.png";
import pavan from "../assets/pavan.png";
import { FaBullseye, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();
  return (
    <div className="about">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-left">
          <span className="tag">ELEVATING BRANDS SINCE 2015</span>

          <h1>
            We Help Brands Grow Through <span>Digital Marketing</span>
          </h1>

          <p>
            Our data-driven strategies empower businesses to reach their full
            potential in the digital landscape. We combine creativity with deep
            technical expertise to deliver measurable impact.
          </p>

          <button onClick={() => navigate("/contact")}>Get Started</button>
        </div>

        <div className="about-hero-right">
          <img src={abouthero} alt="about" />
        </div>
      </section>

      {/* STORY */}
      <section className="story">
        <div className="story-container">
          {/* TITLE */}
          <h2>Our Story</h2>

          {/* DESCRIPTION */}
          <p className="story-text">
            Founded on the principles of transparency and innovation, our agency
            has grown from a small creative boutique to a global digital
            powerhouse. We believe in the power of data to tell stories and the
            strength of creativity to drive results.
          </p>

          <p className="story-text">
            Every campaign we build is a testament to our commitment to
            excellence. We don't just chase metrics; we build sustainable
            digital ecosystems that allow brands to thrive in an ever-changing
            landscape. Our journey is defined by the success of our partners and
            the relentless pursuit of "what's next."
          </p>

          {/* CARDS */}
          <div className="story-cards">
            {/* MISSION */}
            <div className="story-card">
              <div className="icon-box">
                <FaBullseye />
              </div>
              <h3>Our Mission</h3>
              <p>
                To deliver measurable growth for brands through cutting-edge
                technology and human-centric marketing. We strive to simplify
                the complex digital world into actionable strategies that yield
                high ROI for our clients.
              </p>
            </div>

            {/* VISION */}
            <div className="story-card">
              <div className="icon-box">
                <FaEye />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the global leader in digital transformation, setting the
                standard for agency excellence. We aim to foster a world where
                brands and consumers connect meaningfully through technology and
                innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTS */}
      <section className="experts">
        <h2>Our Experts</h2>
        <p>
          Meet the creative minds and technical wizards driving our clients'
          success.
        </p>

        <div className="experts-grid">
          <div className="expert" onClick={() => navigate("/expert")}>
            <img src={keerthi} alt="Keerthi" />
            <h4>Keerthi</h4>
            <span>Managing Partner</span>
          </div>

          <div className="expert">
            <img src={vinay} alt="Vinay" />
            <h4>Vinay Seegu</h4>
            <span>Creative Head</span>
          </div>

          <div className="expert">
            <img src={pavan} alt="Pavan" />
            <h4>Pavan Kalyan</h4>
            <span>SEO Specialist</span>
          </div>
        </div>
      </section>

      {/* BRANDS */}
   <div className="about-brands-section">
     <p className="about-brands-title">TRUSTED BY GLOBAL INNOVATORS</p>
   
     <div className="about-brands-row">
   
     <a href="https://haraagoldanddiamonds.com/" target="_blank" rel="noopener noreferrer">
       <img src={haraa} alt="Haraa" className="brand-logo" />
     </a>
   
     <a href="https://hlopg.com/" target="_blank" rel="noopener noreferrer">
       <img src={hlopg} alt="Hlopg" className="brand-logo" />
     </a>
   
     <a href="https://www.sathyasoftechin.com/" target="_blank" rel="noopener noreferrer">
       <img src={sathya} alt="Sathya" className="brand-logo" />
     </a>
   
     <a href="https://www.srrealtyproperties.com/" target="_blank" rel="noopener noreferrer">
       <img src={sr} alt="SR" className="brand-logo" />
     </a>
   
     <a href="https://srmediaind.com/" target="_blank" rel="noopener noreferrer">
       <img src={srmedia} alt="srmedia" className="brand-logo" />
     </a>
   
     <a href="https://www.gunturukaaram.com/" target="_blank" rel="noopener noreferrer">
       <img src={guntur} alt="Guntur" className="brand-logo" />
     </a>
   
   </div>
      </div>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-box">
          <h2>
            Ready to scale your <span>brand?</span>
          </h2>

          <p>
            Schedule a free 30-minute strategy consultation with our experts and
            discover your untapped growth potential.
          </p>
          <button onClick={() => navigate("/contact")}>Schedule Consultation</button>
        </div>
      </section>
    </div>
  );
}
