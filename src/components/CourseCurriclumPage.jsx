import React from "react";
import eye from "../assets/eye.png";

const CourseCurriclumPage = () => {
  return (
    <div className="course-curriculum-page">
      <section className="course-curriculum-header">
        <div className="learning-path-tag">
          DATASCIENCE COURSE LEARNING PATH
        </div>
        <h2>
          <span>Data Science</span> Course Curriculum
        </h2>
      </section>
      <section className="course-curriculum-list">
        <div className="course-item">
          <div className="course-info">
            <h3>C++</h3>
            <p>Learn C++ for strong programming fundamentals.</p>
          </div>
          <button className="view-curriculum-button">
            {" "}
            <img src={eye} alt="eye" />
            View Curriculum
          </button>
        </div>
        <div className="course-item">
          <div className="course-info">
            <h3>MERN Stack</h3>
            <p>Master the MERN stack for high-demand projects.</p>
          </div>
          <button className="view-curriculum-button">
            {" "}
            <img src={eye} alt="eye" />
            View Curriculum
          </button>
        </div>
        <div className="course-item">
          <div className="course-info">
            <h3>Data Structure & Algorithm</h3>
            <p>
              Excel in Data Structures and Algorithms for interview success.
            </p>
          </div>
          <button className="view-curriculum-button">
            {" "}
            <img src={eye} alt="eye" />
            View Curriculum
          </button>
        </div>
        <div className="course-item">
          <div className="course-info">
            <h3>Competitive Programming</h3>
            <p>
              Excel in Data Structures and Algorithms for interview success.
            </p>
          </div>
          <button className="view-curriculum-button">
            {" "}
            <img src={eye} alt="eye" />
            View Curriculum
          </button>
        </div>
      </section>
    </div>
  );
};

export default CourseCurriclumPage;