import "./Impact.css";
import { useState } from "react";
import spotify from "../assets/aurovaoils.png";
import google from "../assets/hlopg.png";
import uber from "../assets/sathyasofttech.png";
import microsoft from "../assets/srreality.png";
import shopify from "../assets/yaritrip.png";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import { useNavigate } from "react-router-dom";
export default function Work() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  return (
    <div className="work">

      {/* HERO */}
      <section className="work-hero">
        <span className="tag">SELECTED CASE STUDIES</span>

        <h1>Our Work</h1>

        <p>
          We partner with ambitious brands to deliver measurable growth through
          precision-engineered digital strategies.
        </p>

        {/* FILTER BUTTONS */}
        <div className="filters">
  <button 
    className={activeFilter === "all" ? "active" : ""}
    onClick={() => setActiveFilter("all")}
  >
    All Projects
  </button>

  <button 
    className={activeFilter === "social" ? "active" : ""}
    onClick={() => setActiveFilter("social")}
  >
    Social Media
  </button>

  <button 
    className={activeFilter === "paid" ? "active" : ""}
    onClick={() => setActiveFilter("paid")}
  >
    Paid Advertising
  </button>

  <button 
    className={activeFilter === "influencer" ? "active" : ""}
    onClick={() => setActiveFilter("influencer")}
  >
    Influencer Marketing
  </button>
</div>
      </section>

      {/* CARDS */}
      <section className="work-grid">

        <div className="work-card">
          <img src={work1} alt="work" />
          <div className="card-content">
            <span>SOCIAL MEDIA MARKETING</span>
            <h3>Fashion Brand</h3>
            <p>Performance <b>+220% Engagement</b></p>
          </div>
        </div>

        <div className="work-card">
           <img src={work2} alt="work" />
          <div className="card-content">
            <span>PAID ADVERTISING</span>
            <h3>E-commerce Store</h3>
            <p>Performance <b>+140% Sales Growth</b></p>
          </div>
        </div>

        <div className="work-card">
        <img src={work3} alt="work" />
          <div className="card-content">
            <span>INFLUENCER MARKETING</span>
            <h3>Fitness App</h3>
            <p>Performance <b>2.8M Reach</b></p>
          </div>
        </div>

      </section>

      {/* BRANDS */}
   <div className="brands-section">
  <p className="brands-title">TRUSTED BY GLOBAL INNOVATORS</p>
<div className="brands-row">
<div className="impact-pill"><img src={spotify} /></div>
    <div className="impact-pill"><img src={google} /></div>
    <div className="impact-pill"><img src={uber} /></div>
    <div className="impact-pill"><img src={microsoft} /></div>
    <div className="impact-pill"><img src={shopify} /></div>
        </div>
     </div>

      {/* CTA */}
 <section className="impact-cta">

      <div className="impact-cta-box">

        <h2>
          Ready to scale your <span>brand?</span>
        </h2>

        <p>
          Schedule a free 30-minute strategy consultation with our experts and discover your untapped growth potential.
        </p>

        <button onClick={() => navigate("/contact")}>Schedule Consultation</button>

      </div>

    </section>

    </div>
  );
}