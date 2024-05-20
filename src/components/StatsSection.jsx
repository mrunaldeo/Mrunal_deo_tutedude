
import React from "react";
import laptop from "../assets/laptop.png";
import graduated from "../assets/graduated.png";
import question from "../assets/question.png";
import complete from "../assets/complete.png";

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stat">
        <img src={laptop} alt="Courses" />
        <h2>
          24 <p>Courses</p>
        </h2>
      </div>
      <div className="straight-line"></div>
      <div className="stat">
        <img src={graduated} alt="graduated" />
        <h2>
          30k+ <p>Learners</p>
        </h2>
      </div>
      <div className="straight-line"></div>
      <div className="stat">
        <img src={question} alt="question" />
        <h2>
          {" "}
          100k+ <p>Doubts Solved</p>
        </h2>
      </div>
      <div className="straight-line"></div>
      <div className="stat">
        <img src={complete} alt="complete" />
        <h2>
          10k+ <p>Student Projects</p>
        </h2>
      </div>
    </section>
  );
};

export default StatsSection;
