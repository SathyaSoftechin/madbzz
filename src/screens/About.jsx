import "./About.css";

import spotify from "../assets/spotify.png";
import google from "../assets/google.png";
import uber from "../assets/uber.png";
import microsoft from "../assets/microsoft.png";
import shopify from "../assets/shopify.png";
import abouthero from "../assets/abouthero.png";
import alex from "../assets/Alex.png";
import sarah from "../assets/Sarah.png";
import marcus from "../assets/Marcus.png";
import elise from "../assets/Elise.png";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function About() {
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
          Our data-driven strategies empower businesses to reach their full potential in the digital landscape. We combine creativity with deep technical expertise to deliver measurable impact.
          </p>

          <button>Get Started</button>
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
          Founded on the principles of transparency and innovation, our agency has grown from a small creative boutique to a global digital powerhouse. We believe in the power of data to tell stories and the strength of creativity to drive results.
        </p>

        <p className="story-text">
          Every campaign we build is a testament to our commitment to excellence. We don't just chase metrics; we build sustainable digital ecosystems that allow brands to thrive in an ever-changing landscape. Our journey is defined by the success of our partners and the relentless pursuit of "what's next."
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
              To deliver measurable growth for brands through cutting-edge technology and human-centric marketing. We strive to simplify the complex digital world into actionable strategies that yield high ROI for our clients.
            </p>
          </div>

          {/* VISION */}
          <div className="story-card">
            <div className="icon-box">
              <FaEye />
            </div>
            <h3>Our Vision</h3>
            <p>
              To be the global leader in digital transformation, setting the standard for agency excellence. We aim to foster a world where brands and consumers connect meaningfully through technology and innovation.
            </p>
          </div>

        </div>

      </div>

    </section>

      {/* EXPERTS */}
      <section className="experts">
        <h2>Our Experts</h2>
        <p>Meet the creative minds and technical wizards driving our clients' success.</p>
        <div className="experts-grid">

          <div className="expert">
             <img src={alex} alt="Alex" />
            <h4>Alex Thorne</h4>
            <span>Founder & CEO</span>
          </div>

          <div className="expert">
          <img src={sarah} alt="Sarah" />
            <h4>Sarah Jenkins</h4>
            <span>SEO Specialist</span>
          </div>

          <div className="expert">
          <img src={marcus} alt="Marcus" />
            <h4>Marcus Chen</h4>
            <span>Graphic Designer</span>
          </div>

          <div className="expert">
          <img src={elise} alt="Elise" />
            <h4>Elise Rivera</h4>
            <span>Content Writer</span>
          </div>

        </div>
      </section>

      {/* BRANDS */}
     <div className="brands-section">
  <p className="brands-title">TRUSTED BY GLOBAL INNOVATORS</p>
<div className="brands-row">
<div className="pill"><img src={spotify} /></div>
    <div className="pill"><img src={google} /></div>
    <div className="pill"><img src={uber} /></div>
    <div className="pill"><img src={microsoft} /></div>
    <div className="pill"><img src={shopify} /></div>
        </div>
     </div>

      {/* CTA */}
 <section className="cta">

      <div className="cta-box">

        <h2>
          Ready to scale your <span>brand?</span>
        </h2>

        <p>
          Schedule a free 30-minute strategy consultation with our experts and discover your untapped growth potential.
        </p>

        <button>Schedule Consultation</button>

      </div>

    </section>
    </div>
  );
}