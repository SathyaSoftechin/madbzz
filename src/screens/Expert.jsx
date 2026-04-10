import "./Expert.css";
import keerthi from "../assets/keerthi1.png";
import { useNavigate } from "react-router-dom";

export default function Expert() {
   const navigate = useNavigate();
  return (
       <div className="expert-container">

      {/* BACK ARROW */}
      <div className="back-arrow"   onClick={() => navigate("/about")}
      >
        ←
      </div>

      <div className="expert-content">

        {/* LEFT IMAGE */}
        <div className="expert-left">
          <div className="yellow-shape"></div>
          <img src={keerthi} alt="profile" />
        </div>

        {/* RIGHT TEXT */}
        <div className="expert-right">
          <h1><span>Keerthi</span></h1>
          <p>
           Keerthi serves as the Managing Partner at Madbzz, bringing a sharp strategic focus to the company’s influencer marketing initiatives. With a deep understanding of the digital ecosystem, Keerthi specializes in identifying and collaborating with the right influencers to create impactful brand campaigns. By bridging the gap between brands and content creators, Keerthi ensures that every collaboration aligns with the client’s vision, target audience, and business objectives.
 </p>
  <p>
Leveraging strong industry connections and market insights, Keerthi plays a key role in helping clients scale their digital presence through effective influencer partnerships. From curating tailored influencer lists to executing result-driven promotional strategies, Keerthi consistently delivers measurable growth for products and services. This hands-on approach, combined with a commitment to innovation, positions Madbzz as a trusted partner for brands looking to succeed in the competitive digital marketing landscape.
          </p>
        </div>

      </div>


      {/* CTA */}
      <section className="expert-cta">

        <div className="expert-cta-box">

          <h2>
            Ready to scale your <span>brand?</span>
          </h2>

          <p>
            Schedule a free 30-minute strategy consultation with our experts and
            discover your untapped growth potential.
          </p>

          <button className="expert-btn" onClick={() => navigate("/contact")}
>
            Schedule Consultation
          </button>

        </div>

      </section>

    </div>
  );
}