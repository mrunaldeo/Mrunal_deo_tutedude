
import React from "react";
import hat from "../assets/hat.png";
import award_star from "../assets/award_star.png";
import Vector from "../assets/Vector.png";
import question_mark from "../assets/question-mark.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="initiative-tag">
          <img src={hat} alt="hat" className="hat-img" />
          <div>
            An <span className="bold-tag">IIT Delhi</span> Alumni Initiative
          </div>
        </div>
        <h1>
          Become an Expert in the <br /> field of{" "}
          <span>
            Data Science <br /> with 6 courses
          </span>
        </h1>
        <p>
          A specially crafted Tech Kickstarter, with{" "}
          <span className="bold-tag">5+ extensive online courses.</span>
        </p>
        <div className="features">
          <span>
            <img src={award_star} alt="award-star" className="award-star" />
            Personal Mentorship
          </span>
          <span>
            {" "}
            <img src={award_star} alt="award-star" className="award-star" />
            Internship Assistance
          </span>
          <span>
            {" "}
            <img src={award_star} alt="award-star" className="award-star" />
            Industry Certified Courses
          </span>
        </div>
        <div className="hero-buttons">
          <button className="enroll-button">
            Enroll Now <img src={Vector} alt="Vector" className="vector" />{" "}
          </button>
          <button className="know-more-button">
            Know More{" "}
            <img src={question_mark} alt="" className="question-mark" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
