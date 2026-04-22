// import "./Impact.css";
// import { useState } from "react";
// import haraa from "../assets/haraa.png";
// import hlopg from "../assets/hlopg.png";
// import sathya from "../assets/sathyasoftech.png";
// import sr from "../assets/sr reality.png";
// import srmedia from "../assets/sr media.png";
// import guntur from "../assets/guntur karam.png";
// import work1 from "../assets/work1.png";
// import work2 from "../assets/work2.png";
// import work3 from "../assets/work3.png";
// import { useNavigate } from "react-router-dom";
// export default function Work() {
//   const navigate = useNavigate();
//   const [activeFilter, setActiveFilter] = useState("all");
//   return (
//     <div className="work">

//       {/* HERO */}
//       <section className="work-hero">
//         <span className="tag">SELECTED CASE STUDIES</span>

//         <h1>Our Work</h1>

//         <p>
//           We partner with ambitious brands to deliver measurable growth through
//           precision-engineered digital strategies.
//         </p>

//         {/* FILTER BUTTONS */}
//         <div className="filters">
//   <button 
//     className={activeFilter === "all" ? "active" : ""}
//     onClick={() => setActiveFilter("all")}
//   >
//     All Projects
//   </button>

//   <button 
//     className={activeFilter === "social" ? "active" : ""}
//     onClick={() => setActiveFilter("social")}
//   >
//     Social Media
//   </button>

//   <button 
//     className={activeFilter === "paid" ? "active" : ""}
//     onClick={() => setActiveFilter("paid")}
//   >
//     Paid Advertising
//   </button>

//   <button 
//     className={activeFilter === "influencer" ? "active" : ""}
//     onClick={() => setActiveFilter("influencer")}
//   >
//     Influencer Marketing
//   </button>
// </div>
//       </section>

//       {/* CARDS */}
//       <section className="work-grid">

//         <div className="work-card">
//           <img src={work1} alt="work" />
//           <div className="card-content">
//             <span>SOCIAL MEDIA MARKETING</span>
//             <h3>Fashion Brand</h3>
//             <p>Performance <b>+220% Engagement</b></p>
//           </div>
//         </div>

//         <div className="work-card">
//            <img src={work2} alt="work" />
//           <div className="card-content">
//             <span>PAID ADVERTISING</span>
//             <h3>E-commerce Store</h3>
//             <p>Performance <b>+140% Sales Growth</b></p>
//           </div>
//         </div>

//         <div className="work-card">
//         <img src={work3} alt="work" />
//           <div className="card-content">
//             <span>INFLUENCER MARKETING</span>
//             <h3>Fitness App</h3>
//             <p>Performance <b>2.8M Reach</b></p>
//           </div>
//         </div>

//       </section>

//       {/* BRANDS */}
// <div className="impact-brands-section">
//   <p className="impact-brands-title">TRUSTED BY GLOBAL INNOVATORS</p>

//   <div className="impact-brands-row">

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

// <a href="https://srmediaind.com/" target="_blank" rel="noopener noreferrer">
//         <img src={srmedia} alt="srmedia" className="brand-logo" />
//       </a>

//   <a href="https://www.gunturukaaram.com/" target="_blank" rel="noopener noreferrer">
//     <img src={guntur} alt="Guntur" className="brand-logo" />
//   </a>

// </div>
//      </div>

//       {/* CTA */}
//  <section className="impact-cta">

//       <div className="impact-cta-box">

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



import "./Impact.css";
import work1 from "../assets/adsinap.jpg";
import work2 from "../assets/yaritrip.jpg";
import work3 from "../assets/srreality.jpg";

export default function Work() {


  return (
    <div className="work">

      {/* HERO */}
      <section className="work-hero">

        <span className="tag fade-top delay-1">
          SELECTED CASE STUDIES
        </span>

        <h1 className="slide-right delay-2">
          Our Work
        </h1>

        <p className="slide-left delay-3">
          We partner with ambitious brands to deliver measurable growth through
          precision-engineered digital strategies.
        </p>


      </section>

      {/* WORK GRID */}
<section className="work-grid">

  <div className="work-card slide-bottom delay-1">
    <a
      href="https://www.adsinap.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={work1} alt="work" />
    </a>

    <div className="card-content">
      <span>ADS IN AP</span>
      <h3>Branding</h3>
      <p>Performance <b>+220% Engagement</b></p>
    </div>
  </div>

  <div className="work-card slide-bottom delay-2">
    <a
      href="https://www.yaritrip.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={work2} alt="work" />
    </a>

    <div className="card-content">
      <span>YARITRIP</span>
      <h3>Travelling App</h3>
      <p>Performance <b>+140% Sales Growth</b></p>
    </div>
  </div>

  <div className="work-card slide-bottom delay-3">
    <a
      href="https://www.srrealtyproperties.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={work3} alt="work" />
    </a>

    <div className="card-content">
      <span>SR REALITY</span>
      <h3>Realestate</h3>
      <p>Performance <b>2.8M Reach</b></p>
    </div>
  </div>

</section>

    </div>
  );
}