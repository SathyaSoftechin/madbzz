import "./Services.css";
import { FaBullhorn, FaSearch, FaAd, FaPen, FaUsers, FaCode, FaEnvelope, FaChartLine, FaPenNib  } from "react-icons/fa";
import { FaShieldAlt, FaClipboardList, FaHandshake } from "react-icons/fa";
import serviceshero from "../assets/services-hero.png";
import impact1 from "../assets/impact1.png";
import impact2 from "../assets/impact2.png";
import impact3 from "../assets/impact3.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";

export default function Services() {
  return (
    <div className="services-page">

      {/* HERO */}
     <section className="service-hero">

      {/* LEFT IMAGE */}
      <div className="service-hero-left">
            <img src={serviceshero} alt="Digital Marketing" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="service-hero-right">

        <div className="badge">
          <span>⚡ SCALE YOUR BUSINESS</span>
        </div>

        <h1>
          Our Digital Marketing <br />
          <span>Services</span>
        </h1>

        <p>
          Unlock exponential growth with our data-driven marketing strategies
          designed for the modern digital landscape. We combine creativity with
          deep analytics to deliver measurable results.
        </p>

        <div className="service-hero-buttons">
          <button className="primary">Start Your Project</button>
          <button className="secondary">View Portfolio</button>
        </div>

      </div>

    </section>

      {/* SERVICES GRID */}
      
    <section className="service-grid-section">

      {/* HEADER */}
      <div className="service-header">
        <h2>
          Full-Suite Digital <span>Solutions</span>
        </h2>
        <p>
          Everything you need to dominate your industry, from search engines to social media and beyond.
        </p>
      </div>

      {/* GRID */}
      <div className="service-grid">

        <div className="service-card">
          <FaBullhorn />
          <h3>Social Media</h3>
          <p>Engage your audience across all major platforms with precision.</p>
          <a href="#">Learn More →</a>
        </div>

        <div className="service-card">
          <FaSearch />
          <h3>SEO</h3>
          <p>Rank higher and drive qualified organic traffic to your website.</p>
          <a href="#">Learn More →</a>
        </div>

        <div className="service-card">
          <FaAd />
          <h3>PPC Ads</h3>
          <p>Maximize ROI with hyper-targeted paid advertising spend.</p>
          <a href="#">Learn More →</a>
        </div>

        <div className="service-card">
          <FaPenNib />
          <h3>Content Strategy</h3>
          <p>Storytelling that converts visitors into lifelong brand advocates.</p>
          <a href="#">Learn More →</a>
        </div>

        <div className="service-card">
          <FaUsers />
          <h3>Influencer</h3>
          <p>Partner with industry leaders to broaden your brand reach.</p>
          <a href="#">Learn More →</a>
        </div>

        <div className="service-card">
          <FaCode />
          <h3>Web Dev</h3>
          <p>High-performance digital experiences built for conversions.</p>
          <a href="#">Learn More →</a>
        </div>

        <div className="service-card">
          <FaEnvelope />
          <h3>Email Marketing</h3>
          <p>Personalized communication for every stage of the funnel.</p>
          <a href="#">Learn More →</a>
        </div>

        <div className="service-card">
          <FaChartLine />
          <h3>Analytics</h3>
          <p>Deep insights and transparent reporting for smarter decisions.</p>
          <a href="#">Learn More →</a>
        </div>

      </div>

    </section>

      {/* TIMELINE */}
        <section className="timeline-section">

      {/* HEADER */}
      <div className="timeline-header">
        <h2>
          Our <span>Success</span> Framework
        </h2>
        <p>
          A systematic 5-step approach to achieving your digital goals.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="timeline">

        <div className="timeline-line"></div>

        <div className="timeline-item">
          <div className="service-circle">1</div>
          <h4>Research</h4>
          <p>Deep dive into your market, competitors, and audience behavior.</p>
        </div>

        <div className="timeline-item">
          <div className="service-circle">2</div>
          <h4>Planning</h4>
          <p>Strategic roadmap focused on your specific business KPIs.</p>
        </div>

        <div className="timeline-item">
          <div className="service-circle">3</div>
          <h4>Creative</h4>
          <p>Developing high-impact assets and campaign messaging.</p>
        </div>

        <div className="timeline-item">
          <div className="service-circle">4</div>
          <h4>Execution</h4>
          <p>Multi-channel launch with continuous monitoring.</p>
        </div>

        <div className="timeline-item">
          <div className="service-circle">5</div>
          <h4>Tracking</h4>
          <p>Daily optimization based on real-time performance data.</p>
        </div>

      </div>

    </section>


      {/* IMPACT */}
     <section className="impact-section">

      {/* HEADER */}
      <div className="impact-header">
        <div>
          <h2>Impact We've Made</h2>
          <p>Proven results from our recent partner collaborations.</p>
        </div>

        <a href="#" className="view-link">
          See All Our Work →
        </a>
      </div>

      {/* CARDS */}
      <div className="impact-grid">

        {/* CARD 1 */}
        <div className="impact-card">
          <img src={impact1} alt="impact" />

          <div className="stats">
            <div className="stat-box">
              <h3>150%</h3>
              <p>Growth</p>
            </div>

            <div className="stat-box">
              <h3>45%</h3>
              <p>Conversion</p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="impact-card">
      <img src={impact2} alt="impact" />

          <div className="stats">
            <div className="stat-box">
              <h3>85k</h3>
              <p>Users</p>
            </div>

            <div className="stat-box">
              <h3>12x</h3>
              <p>ROI</p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="impact-card">
            <img src={impact3} alt="impact" />

          <div className="stats">
            <div className="stat-box">
              <h3>3M+</h3>
              <p>Reach</p>
            </div>

            <div className="stat-box">
              <h3>210%</h3>
              <p>Engagement</p>
            </div>
          </div>
        </div>

      </div>

    </section>

      {/* WHY */}
     <section className="why-section">

      {/* LEFT CARDS */}
      <div className="why-left">

        <div className="why-card">
          <FaShieldAlt />
          <h4>Experienced Experts</h4>
          <p>Over a decade of navigating complex digital landscapes.</p>
        </div>

        <div className="why-card">
          <FaChartLine />
          <h4>Data-Driven</h4>
          <p>Decisions backed by rigorous testing and analysis.</p>
        </div>

        <div className="why-card">
          <FaClipboardList />
          <h4>Transparent</h4>
          <p>Real-time dashboards and weekly performance calls.</p>
        </div>

        <div className="why-card">
          <FaHandshake />
          <h4>Partnership First</h4>
          <p>We grow when your business grows.</p>
        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div className="why-right">

        <h2>
          Why Choose <span>MadBuzz ?</span>
        </h2>

        <p>
          We don't just provide services; we provide results. Our team integrates
          seamlessly with yours to act as your dedicated growth engine.
        </p>

        {/* USERS */}
        <div className="users">
     <img src={user1} alt="user" />
     <img src={user2} alt="user" />
     <img src={user3} alt="user" />
          <span>Trusted by 500+ global brands</span>
        </div>

      </div>

    </section>

      {/* CTA */}
     <section className="cta-section">

      <div className="cta-box-section">

        <h2>
          Ready to explode your brand's digital presence?
        </h2>

        <p>
          Book a free strategy consultation today and get a customized
          growth roadmap for your business.
        </p>

        <button className="cta-btn">
          Start A Project Now
        </button>

      </div>

    </section>

    </div>
  );
}