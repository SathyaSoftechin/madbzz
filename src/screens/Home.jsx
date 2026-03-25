
import "./Home.css";
import screen11 from "../assets/screen11.png";
import screen22 from "../assets/screen22.png";
import screen33 from "../assets/screen33.png";
import screen44 from "../assets/screen44.png";
import screen55 from "../assets/screen55.png";
import screen66 from "../assets/screen66.png";
import screen77 from "../assets/screen77.png";
import screen88 from "../assets/screen88.png";
import React, { useState, useEffect } from "react";

import spotify from "../assets/spotify.png";
import google from "../assets/google.png";
import uber from "../assets/uber.png";
import microsoft from "../assets/microsoft.png";
import shopify from "../assets/shopify.png";
import result1 from "../assets/result1.png";
import result2 from "../assets/result2.png";

import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import {
  FaShareAlt,
  FaPenNib,
  FaBullhorn,
  FaUsers,
  FaComments,
  FaChartLine,
 FaPalette,
  FaDollarSign,
FaChartBar,
FaCheckCircle,
  FaStar
} from "react-icons/fa";

export default function Home() {
  const screens = [
    screen11, screen22, screen33, screen44,
    screen55, screen66, screen77, screen88
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % screens.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [screens.length]);
  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-container">

          <div className="hero-left">
            <div className="tag">
              <span className="dot"></span>
              NEXT-GEN MARKETING AGENCY
            </div>

            <h1>
              Grow Your Brand <br />
              with <span>Data Driven</span> <br />
              Digital Marketing
            </h1>

            <p>
              Scale your business through expert social media, high-impact
              content, and ROI-focused advertising campaigns tailored for modern growth.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">Get Started →</button>
              <button className="btn-secondary">View Our Work</button>
            </div>
          </div>
    <div className="hero-right">
        <div className="phone">
  <img
    key={index}
    src={screens[index]}
    alt="screen"
    className="phone-screen"
  />
</div>
</div>
        </div>
      </section>

      {/* TRUSTED */}
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

      {/* SERVICES */}
        <section className="services">

      <div className="services-container">

        {/* TITLE */}
        <h2>
          Core Marketing <span>Expertise</span>
        </h2>

        <p className="subtitle">
          We combine creative excellence with analytical precision to deliver campaigns that actually move the needle.
        </p>

        {/* GRID */}
        <div className="services-grid">

          <div className="service-card">
            <div className="icon"><FaShareAlt /></div>
            <h3>Social Media Strategy</h3>
            <p>Comprehensive platform strategies designed to build community and foster authentic engagement.</p>
          </div>

          <div className="service-card">
            <div className="icon"><FaPenNib /></div>
            <h3>Content Creation</h3>
            <p>High-impact video production and copywriting that captures attention and drives action.</p>
          </div>

          <div className="service-card">
            <div className="icon"><FaBullhorn /></div>
            <h3>Paid Advertising</h3>
            <p>ROI-focused campaigns across Google, Meta, and LinkedIn optimized for conversion.</p>
          </div>

          <div className="service-card">
            <div className="icon"><FaUsers /></div>
            <h3>Influencer Marketing</h3>
            <p>Connecting your brand with trusted voices to reach hyper-targeted niche audiences.</p>
          </div>

          <div className="service-card">
            <div className="icon"><FaComments /></div>
            <h3>Community Management</h3>
            <p>Active monitoring and moderation to maintain a positive and thriving brand ecosystem.</p>
          </div>

          <div className="service-card">
            <div className="icon"><FaChartLine /></div>
            <h3>Analytics & Reporting</h3>
            <p>Real-time dashboards and deep-dive analysis to continuously optimize performance.</p>
          </div>

        </div>
      </div>

    </section>

      {/* RESULTS */}
 <section className="results">

      <div className="results-container">

        {/* HEADER */}
        <div className="results-header">
          <div>
            <h2>Proven Results</h2>
            <p>
              See how we’ve helped industry leaders dominate their market through strategic digital execution.
            </p>
          </div>

          <span className="view-all">View all Our Work →</span>
        </div>

        {/* GRID */}
        <div className="results-grid">

          {/* CARD 1 */}
          <div className="result-card">
            <img src={result1} alt="result" />

            <div className="overlay">
              <span className="tag">E-COMMERCE GROWTH</span>

              <h3>
                Luminary Skin: +300% Organic Reach in 6 Months
              </h3>

              <div className="stats">
                <div>
                  <h4>4.2x</h4>
                  <p>ROAS</p>
                </div>
                <div>
                  <h4>12k+</h4>
                  <p>NEW LEADS</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="result-card">
            <img src={result2} alt="result" />

            <div className="overlay">
              <span className="tag">B2B SAAS CAMPAIGN</span>

              <h3>
                CloudStack: Reducing CPC by 45% While Scaling
              </h3>

              <div className="stats">
                <div>
                  <h4>-45%</h4>
                  <p>CPC REDUCTION</p>
                </div>
                <div>
                  <h4>1.5M</h4>
                  <p>IMPRESSIONS</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>


      {/* PROCESS */}
    <section className="process">

      <div className="process-container">

        {/* TITLE */}
        <h2>
          How We <span>Deliver</span> Success
        </h2>

        <p className="subtitle">
          A streamlined, transparent workflow designed for maximum efficiency and results.
        </p>

        {/* TIMELINE */}
        <div className="timeline">

          <div className="step">
            <div className="circle">1</div>
            <h3>Strategy & Research</h3>
            <p>Deep dive into your brand, competitors, and target audience data.</p>
          </div>

          <div className="step">
            <div className="circle">2</div>
            <h3>Content Creation</h3>
            <p>Crafting high-converting visual and written assets for campaigns.</p>
          </div>

          <div className="step">
            <div className="circle">3</div>
            <h3>Campaign Execution</h3>
            <p>Launching precision-targeted ads across multiple high-impact channels.</p>
          </div>

          <div className="step">
            <div className="circle">4</div>
            <h3>Analysis & Optimization</h3>
            <p>Real-time adjustments based on performance data to maximize ROI.</p>
          </div>

        </div>

      </div>

    </section>

      {/* WHY */}
       <section className="why">

      <div className="why-container">

        {/* LEFT CARDS */}
        <div className="why-left">

          <div className="why-card">
            <div className="icon"><FaChartLine /></div>
            <h3>Data-Driven</h3>
            <p>Decisions based on hard numbers, not guesswork.</p>
          </div>

          <div className="why-card shift">
            <div className="icon"><FaPalette /></div>
            <h3>Expert Creatives</h3>
            <p>Award-winning designers and copywriters.</p>
          </div>

          <div className="why-card">
            <div className="icon"><FaDollarSign /></div>
            <h3>ROI Focused</h3>
            <p>Every dollar spent is optimized for return.</p>
          </div>

          <div className="why-card shift">
            <div className="icon"><FaChartBar /></div>
            <h3>Advanced Analytics</h3>
            <p>Proprietary tracking and reporting systems.</p>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="why-right">

          <h2>
            Why Industry Leaders <br />
            <span>Partner</span> With Us
          </h2>

          <p className="desc">
            We don't just provide services; we act as a growth engine for your brand.
            Our methodology combines behavioral science with the latest ad-tech to
            ensure your message hits the right person at the absolute right moment.
          </p>

          <ul>
            <li><FaCheckCircle /> Direct access to senior strategy team</li>
            <li><FaCheckCircle /> Custom-built performance dashboards</li>
            <li><FaCheckCircle /> Scalable execution across 5+ platforms</li>
          </ul>

        </div>

      </div>

    </section>

      {/* TESTIMONIALS */}
       <section className="testimonials">

      <div className="test-container">

        <h2>Success Stories</h2>

        <div className="test-grid">

          {/* CARD 1 */}
          <div className="test-card">
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>

            <p>
              "The level of insight Vantage provides is unparalleled. They didn't
              just run ads; they transformed our entire digital presence."
            </p>

            <div className="user">
              <img src={user1} alt="user" />
              <div>
                <h4>Sarah Jenkins</h4>
                <span>CEO, TechFlow</span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="test-card">
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>

            <p>
              "Vantage helped us scale from zero to $1M ARR through their
              innovative content strategy and targeted LinkedIn ads."
            </p>

            <div className="user">
             <img src={user2} alt="user" />
              <div>
                <h4>Marcus Chen</h4>
                <span>Head of Growth, Elevate</span>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="test-card">
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>

            <p>
              "Working with them feels like having an in-house team. They are
              proactive, creative, and extremely results-oriented."
            </p>

            <div className="user">
            <img src={user3} alt="user" />
              <div>
                <h4>Elena Rodriguez</h4>
                <span>Founder, Aura Brands</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>

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