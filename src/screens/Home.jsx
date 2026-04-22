
// import "./Home.css";
// import screen11 from "../assets/screen11.png";
// import screen22 from "../assets/screen22.png";
// import screen33 from "../assets/screen33.png";
// import screen44 from "../assets/screen44.png";
// import screen55 from "../assets/screen55.png";
// import screen66 from "../assets/screen66.png";
// // import screen77 from "../assets/screen77.png";

// import React, { useState, useEffect } from "react";

// import haraa from "../assets/haraa.png";
// import hlopg from "../assets/hlopg.png";
// import sathya from "../assets/sathyasoftech.png";
// import sr from "../assets/sr reality.png";
// import srmedia from "../assets/sr media.png";
// import guntur from "../assets/guntur karam.png";
// import result1 from "../assets/result1.png";
// import result2 from "../assets/result2.png";

// import {
//   FaShareAlt,
//   FaPenNib,
//   FaBullhorn,
//   FaUsers,
//   FaComments,
//   FaChartLine,
//  FaPalette,
//   FaDollarSign,
// FaChartBar,
// FaCheckCircle,
//   FaStar
// } from "react-icons/fa";

// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

 
//   const slides = [
//     {
//       title: "Smart Digital",
//       center: screen22,
//       left: screen11,
//       right: screen33,
//     },
//     {
//       title: "Creative Audience",
//       center: screen11,
//       left: screen44,
//       right: screen22,
//     },
//     {
//       title: "Digital Excellence",
//       center: screen44,
//       left: screen55,
//       right: screen11,
//     },
//     {
//       title: "Digital Strategies",
//       center: screen55,
//       left: screen66,
//       right: screen44,
//     },
//     {
//       title: "Digital Growth",
//       center: screen66,
//       left: screen33,
//       right: screen55,
//     },
//     {
//       title: "Social Marketing",
//       center: screen33,
//       left: screen22,
//       right: screen66,
//     },
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 2500);

//     return () => clearInterval(interval);
//   }, []);

//   const current = slides[index];
//   return (
//     <div>

//       {/* HERO */}
//   <section className="hero">

//         <div className="hero-content">

//           <h4>Grow Your Brand with</h4>

//           <h1 key={current.title}>{current.title}</h1>
//   <div className="hero-images">
//     {slides.map((slide, i) => {
//       let position = "hidden";

//       if (i === index) {
//         position = "active";
//       } else if (i === (index + 1) % slides.length) {
//         position = "next";   // 👉 coming from right
//       } else if (i === (index - 1 + slides.length) % slides.length) {
//         position = "prev";   // 👉 going to left
//       }

//       return (
//         <img
//           key={i}
//           src={slide.center}
//           className={`img ${position}`}
//           alt=""
//         />
//       );
//     })}
//   </div>

//         </div>

//     </section>

//       {/* TRUSTED */}
// <div className="home-brands-section">
//   <p className="home-brands-title">TRUSTED BY GLOBAL INNOVATORS</p>

//   <div className="home-brands-row">

//   <a href="https://haraagoldanddiamonds.com/" target="_blank" rel="noopener noreferrer">
//     <img src={haraa} alt="Haraa" className="brand-logo" />
//   </a>

//   <a href=" https://hlopg.com/" target="_blank" rel="noopener noreferrer">
//     <img src={hlopg} alt="Hlopg" className="brand-logo" />
//   </a>

//   <a href="https://www.sathyasoftechin.com/" target="_blank" rel="noopener noreferrer">
//     <img src={sathya} alt="Sathya" className="brand-logo" />
//   </a>

//   <a href="https://www.srrealtyproperties.com/" target="_blank" rel="noopener noreferrer">
//     <img src={sr} alt="SR" className="brand-logo" />
//   </a>

//   <a href="https://srmediaind.com/" target="_blank" rel="noopener noreferrer">
//         <img src={srmedia} alt="srmedia" className="brand-logo" />
//       </a>

//   <a href="https://www.gunturukaaram.com/" target="_blank" rel="noopener noreferrer">
//     <img src={guntur} alt="Guntur" className="brand-logo" />
//   </a>

// </div>
// </div>

//       {/* SERVICES */}
//         <section className="process">

//       <div className="services-container">

//         {/* TITLE */}
//         <h2>
//           Core Marketing <span>Expertise</span>
//         </h2>

//         <p className="subtitle">
//           We combine creative excellence with analytical precision to deliver campaigns that actually move the needle.
//         </p>

//         {/* GRID */}
//         <div className="services-grid">

//           <div className="service-card">
//             <div className="icon"><FaShareAlt /></div>
//             <h3>Social Media Strategy</h3>
//             <p>Comprehensive platform strategies designed to build community and foster authentic engagement.</p>
//           </div>

//           <div className="service-card">
//             <div className="icon"><FaPenNib /></div>
//             <h3>Content Creation</h3>
//             <p>High-impact video production and copywriting that captures attention and drives action.</p>
//           </div>

//           <div className="service-card">
//             <div className="icon"><FaBullhorn /></div>
//             <h3>Paid Advertising</h3>
//             <p>ROI-focused campaigns across Google, Meta, and LinkedIn optimized for conversion.</p>
//           </div>

//           <div className="service-card">
//             <div className="icon"><FaUsers /></div>
//             <h3>Influencer Marketing</h3>
//             <p>Connecting your brand with trusted voices to reach hyper-targeted niche audiences.</p>
//           </div>

//           <div className="service-card">
//             <div className="icon"><FaComments /></div>
//             <h3>Community Management</h3>
//             <p>Active monitoring and moderation to maintain a positive and thriving brand ecosystem.</p>
//           </div>

//           <div className="service-card">
//             <div className="icon"><FaChartLine /></div>
//             <h3>Analytics & Reporting</h3>
//             <p>Real-time dashboards and deep-dive analysis to continuously optimize performance.</p>
//           </div>

//         </div>
//       </div>

//     </section>

//       {/* RESULTS */}
//  <section className="results">

//       <div className="results-container">

//         {/* HEADER */}
//         <div className="results-header">
//           <div>
//             <h2>Proven Results</h2>
//             <p>
//               See how we’ve helped industry leaders dominate their market through strategic digital execution.
//             </p>
//           </div>

//          <span 
//   className="view-all"
//   onClick={() => navigate("/impact")}
// >
//   View all Our Work →
// </span>
//         </div>

//         {/* GRID */}
//         <div className="results-grid">

//           {/* CARD 1 */}
//           <div className="result-card">
//             <img src={result1} alt="result" />

//             <div className="overlay">
//               <span className="tag">JEWELLERY CAMPAIGN</span>

//               <h3>
//                Haraa Gold & Diamonds
//               </h3>

//               <div className="stats">
//                 <div>
//                   <h4>4.2x</h4>
//                   <p>ROAS</p>
//                 </div>
//                 <div>
//                   <h4>12k+</h4>
//                   <p>NEW LEADS</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* CARD 2 */}
//           <div className="result-card">
//             <img src={result2} alt="result" />

//             <div className="overlay">
//               <span className="tag">BRANDING AGENCY CAMPAIGN</span>

//               <h3>
//                Sr Media Branding Agency
//               </h3>

//               <div className="stats">
//                 <div>
//                   <h4>-45%</h4>
//                   <p>CPC REDUCTION</p>
//                 </div>
//                 <div>
//                   <h4>1.5M</h4>
//                   <p>IMPRESSIONS</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//     </section>


//       {/* PROCESS */}
//     <section className="process">

//       <div className="process-container">

//         {/* TITLE */}
//         <h2>
//           How We <span>Deliver</span> Success
//         </h2>

//         <p className="subtitle">
//           A streamlined, transparent workflow designed for maximum efficiency and results.
//         </p>

//         {/* TIMELINE */}
//         <div className="timeline">

//           <div className="step">
//             <div className="circle">1</div>
//             <h3>Strategy & Research</h3>
//             <p>Deep dive into your brand, competitors, and target audience data.</p>
//           </div>

//           <div className="step">
//             <div className="circle">2</div>
//             <h3>Content Creation</h3>
//             <p>Crafting high-converting visual and written assets for campaigns.</p>
//           </div>

//           <div className="step">
//             <div className="circle">3</div>
//             <h3>Campaign Execution</h3>
//             <p>Launching precision-targeted ads across multiple high-impact channels.</p>
//           </div>

//           <div className="step">
//             <div className="circle">4</div>
//             <h3>Analysis & Optimization</h3>
//             <p>Real-time adjustments based on performance data to maximize ROI.</p>
//           </div>

//         </div>

//       </div>

//     </section>

//       {/* WHY */}
//        <section className="why">

//       <div className="why-container">

//         {/* LEFT CARDS */}
//         <div className="why-left">

//           <div className="why-card">
//             <div className="icon"><FaChartLine /></div>
//             <h3>Data-Driven</h3>
//             <p>Decisions based on hard numbers, not guesswork.</p>
//           </div>

//           <div className="why-card shift">
//             <div className="icon"><FaPalette /></div>
//             <h3>Expert Creatives</h3>
//             <p>Award-winning designers and copywriters.</p>
//           </div>

//           <div className="why-card">
//             <div className="icon"><FaDollarSign /></div>
//             <h3>ROI Focused</h3>
//             <p>Every dollar spent is optimized for return.</p>
//           </div>

//           <div className="why-card shift">
//             <div className="icon"><FaChartBar /></div>
//             <h3>Advanced Analytics</h3>
//             <p>Proprietary tracking and reporting systems.</p>
//           </div>

//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="why-right">

//           <h2>
//             Why Industry Leaders <br />
//             <span>Partner</span> With Us
//           </h2>

//           <p className="desc">
//             We don't just provide services; we act as a growth engine for your brand.
//             Our methodology combines behavioral science with the latest ad-tech to
//             ensure your message hits the right person at the absolute right moment.
//           </p>

//           <ul>
//             <li><FaCheckCircle /> Direct access to senior strategy team</li>
//             <li><FaCheckCircle /> Custom-built performance dashboards</li>
//             <li><FaCheckCircle /> Scalable execution across 5+ platforms</li>
//           </ul>

//         </div>

//       </div>

//     </section>

//       {/* TESTIMONIALS */}
// <section className="testimonials">

//   <div className="test-container">

//     <h2>Success Stories</h2>

//     <div className="test-grid">

//       {/* CARD 1 */}
//       <div className="test-card">
//         <div className="stars">
//           <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
//         </div>

//         <p>
//           "The level of insight Vantage provides is unparalleled. They didn't
//           just run ads; they transformed our entire digital presence."
//         </p>

//         <div className="user">
//           <div>
//             <h4>Mounika</h4>
//             <span>Guntur Karam</span>
//           </div>
//         </div>
//       </div>

//       {/* CARD 2 */}
//       <div className="test-card">
//         <div className="stars">
//           <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
//         </div>

//         <p>
//           "Vantage helped us scale from zero to $1M ARR through their
//           innovative content strategy and targeted LinkedIn ads."
//         </p>

//         <div className="user">
//           <div>
//             <h4>Rahul Duki</h4>
//             <span>Haraa Gold & Diamond</span>
//           </div>
//         </div>
//       </div>

//       {/* CARD 3 */}
//       <div className="test-card">
//         <div className="stars">
//           <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
//         </div>

//         <p>
//           "Working with them feels like having an in-house team. They are
//           proactive, creative, and extremely results-oriented."
//         </p>

//         <div className="user">
//           <div>
//             <h4>Sarvesh.H</h4>
//             <span>Proprints</span>
//           </div>
//         </div>
//       </div> 

//     </div> 

//   </div>

// </section>

//       {/* CTA */}
//  <section className="home-cta">

//       <div className="home-cta-box">

//         <h2>
//           Ready to scale your <span>brand?</span>
//         </h2>

//         <p>
//           Schedule a free 30-minute strategy consultation with our experts and discover your untapped growth potential.
//         </p>

//         <button onClick={() => navigate("/contact")}>Schedule Consultation</button>

//       </div>

//     </section>

//     </div>
//   );
// }




import "./Home.css";
import React, { useState, useEffect } from "react";

import img1 from "../assets/screen11.png";
import img2 from "../assets/screen22.png";
import img3 from "../assets/screen33.png";
import img4 from "../assets/screen44.png";
import img5 from "../assets/screen55.png";
import img6 from "../assets/screen66.png";
import img7 from "../assets/screen77.png";

import haraa from "../assets/haraa.png";
import hlopg from "../assets/hlopg.png";
import sathya from "../assets/sathyasoftech.png";
import sr from "../assets/srreality.png";
import srmedia from "../assets/srmedia.png";
import guntur from "../assets/gunturkaram.png";
import result1 from "../assets/result1.png";
import result2 from "../assets/result2.png";


import { FaChartLine, FaPalette, FaDollarSign, FaChartBar, FaCheckCircle, FaStar } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
export default function Home() {

  const slides = [img1, img2, img3, img4, img5, img6, img7];

  const titles = [
    "Smart Digital",
    "Creative Audience",
    "Digital Excellence",
    "Digital Strategies",
    "Digital Growth",
    "Social Marketing",
    "Brand Scaling"
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setAnimate(false);
      }, 800);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

useEffect(() => {
  const sections = document.querySelectorAll(
    ".methodology, .results, .process, .why, .testimonials"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

        const items = entry.target.querySelectorAll(
          ".method-card, .results-header, .result-card, .step, .why-card, .why-right, .test-card, .subtitle"
        );

       items.forEach((el, i) => {
  setTimeout(() => {
    el.classList.add("show");
  }, i * 120); // smooth stagger
});

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  sections.forEach((sec) => observer.observe(sec));

  return () => observer.disconnect();
}, []);

    // const [active, setActive] = useState(false);
    // // const [activeResults, setActiveResults] = useState(false);
    // const [activeProcess, setActiveProcess] = useState(false);
    // const [activeWhy, setActiveWhy] = useState(false);
    // const [activeTest, setActiveTest] = useState(false);

    const navigate = useNavigate();
  return (
    <>
 <section className="hero">

  {/* TEXT */}
  <div className="hero-text">
    <h4>Grow Your Brand with</h4>
    <h1 key={titles[index]} className="main-heading">
      {titles[index]}
    </h1>
  </div>

  {/* CAROUSEL */}
  <div className="carousel">
    {slides.map((img, i) => {
  let pos = "hidden";

// center
if (i === index) pos = "center";

// right → coming next
else if (i === (index + 1) % slides.length) pos = "right";

// left → previous
else if (i === (index - 1 + slides.length) % slides.length) pos = "left";

// 🔥 animate RIGHT → CENTER (main change)
if (animate && i === (index + 1) % slides.length) {
  pos = "move";
}

      return (
        <div key={i} className={`card ${pos}`}>
          <div className="phone">
            <div className="screen">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      );
    })}
  </div>

</section>

    {/* 🔥 TRUSTED SECTION */}
    <div className="home-brands-section">

      <p className="home-brands-title">
        TRUSTED BY GLOBAL INNOVATORS
      </p>

      <div className="home-brands-row">

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

{/* 🔥 METHODOLOGY */}
<section className="methodology">

  <p className="method-tag">
    THE METHODOLOGY
  </p>

  <h2 className="title">
    From Insight to Impact
  </h2>

  <div className="wrapper">

    <div className="method-card c1">
      <span className="num">01</span>
      <h3>Research & Strategy</h3>
      <p>Deep dive into market data, competitor gaps, and audience behavior.</p>
    </div>

    <div className="method-card c2">
      <span className="num">02</span>
      <h3>Content Creation</h3>
      <p>Bespoke production of high-
authority articles, visuals, and
campaigns.</p>
    </div>

    <div className="method-card c3">
      <span className="num">03</span>
      <h3>Distribution</h3>
      <p>Multi-channel placement to
ensure your message hits at
the right time.</p>
    </div>

    <div className="method-card c4">
      <span className="num">04</span>
      <h3>Optimization</h3>
      <p>Continuous A/B testing and
performance tuning for peak
conversion.</p>
    </div>

    <div className="method-card c5">
      <span className="num">05</span>
      <h3>Reporting</h3>
      <p>Transparent, data-backed
insights on your growth and
ROI.</p>
    </div>

  </div>

</section>

 <section className="results">

  <div className="results-container">

    <div className="results-header">
      <div>
        <h2>Proven Results</h2>
        <p>
          See how we’ve helped industry leaders dominate their market through strategic digital execution.
        </p>
      </div>

      <span className="view-all" onClick={() => navigate("/impact")}>
        View all Our Work →
      </span>
    </div>

    <div className="results-grid">

      {/* CARD 1 */}
      <div className="result-card card1">
        <img src={result1} alt="" />

        <div className="overlay">
          <span className="tag">JEWELLERY CAMPAIGN</span>
          <h3>Haraa Gold & Diamonds</h3>

          <div className="home-stats">
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
      <div className="result-card card2">
        <img src={result2} alt="" />

        <div className="overlay">
          <span className="tag">BRANDING AGENCY CAMPAIGN</span>
          <h3>Sr Media Branding Agency</h3>

          <div className="home-stats">
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

<section className="process">

  <div className="process-container">

    <h2>
      How We <span>Deliver</span> Success
    </h2>

    <p className="subtitle">
      A streamlined, transparent workflow designed for maximum efficiency and results.
    </p>

    <div className="home-timeline">

      <div className="step s1">
        <div className="circle">1</div>
        <h3>Strategy & Research</h3>
        <p>Deep dive into your brand, competitors, and target audience data.</p>
      </div>

      <div className="step s2">
        <div className="circle">2</div>
        <h3>Content Creation</h3>
        <p>Crafting high-converting visual and
written assets for campaigns.</p>
      </div>

      <div className="step s3">
        <div className="circle">3</div>
        <h3>Campaign Execution</h3>
        <p>Launching precision-targeted ads across
multiple high-impact channels..</p>
      </div>

      <div className="step s4">
        <div className="circle">4</div>
        <h3>Analysis & Optimization</h3>
        <p>Real-time adjustments based on
performance data to maximize ROI.</p>
      </div>

    </div>

  </div>

</section>

   <section className="why">

  <div className="why-container">

    {/* LEFT */}
    <div className="why-left">

      <div className="why-card w2">
        <div className="icon"><FaPalette /></div>
        <h3>Expert Creatives</h3>
        <p>Award-winning designers.</p>
      </div>

      <div className="why-card w1">
        <div className="icon"><FaChartLine /></div>
        <h3>Data-Driven</h3>
        <p>Decisions based on data.</p>
      </div>

      <div className="why-card w4">
        <div className="icon"><FaChartBar /></div>
        <h3>Advanced Analytics</h3>
        <p>Smart tracking systems.</p>
      </div>

      <div className="why-card w3">
        <div className="icon"><FaDollarSign /></div>
        <h3>ROI Focused</h3>
        <p>Optimized for return.</p>
      </div>

    </div>

    {/* RIGHT */}
    <div className="why-right">

      <h2>
        Why Industry Leaders <br />
        <span>Partner</span> With Us
      </h2>

      <p className="home-desc">
        We act as a growth engine for your brand using behavioral science
        and advanced ad-tech.
      </p>

      <ul className="feature-list">
        <li>
          <FaCheckCircle className="icon" />
          <span>Direct access to senior strategy team</span>
        </li>
        <li>
          <FaCheckCircle className="icon" />
          <span>Custom-built dashboards</span>
        </li>
        <li>
          <FaCheckCircle className="icon" />
          <span>Scalable execution</span>
        </li>
      </ul>

    </div>

  </div>

</section>

    <section className="testimonials">

  <div className="test-container">

    <h2>Success Stories</h2>

    <div className="test-grid">

      <div className="test-card t1">
        <div className="stars">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </div>

        <p>
          "The level of insight Vantage provides is unparalleled. They didn't
          just run ads; they transformed our entire digital presence."
        </p>

        <div className="user">
          <h4>Mounika</h4>
          <span>Guntur Karam</span>
        </div>
      </div>

      <div className="test-card t2">
        <div className="stars">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </div>

        <p>
          "Vantage helped us scale from zero to $1M ARR through their
          innovative content strategy and targeted LinkedIn ads."
        </p>

        <div className="user">
          <h4>Rahul Duki</h4>
          <span>Haraa Gold & Diamond</span>
        </div>
      </div>

      <div className="test-card t3">
        <div className="stars">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </div>

        <p>
          "Working with them feels like having an in-house team. They are
          proactive, creative, and extremely results-oriented."
        </p>

        <div className="user">
          <h4>Sarvesh.H</h4>
          <span>Proprints</span>
        </div>
      </div>

    </div>

  </div>

</section>


  
  </>
  );
}