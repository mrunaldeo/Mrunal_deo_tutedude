import React from "react";
import order_img from "../assets/order_img.png";

const InternshipProgram = () => {
  return (
    <div className="internship-program">
      <h1>How does the Internship Program work?</h1>

      <div className="orders">
        <div className="order">
          <img src={order_img} alt="Step 1" />
          <p>Step 1</p>
          <p>
            Learn from our structured pre recorded courses made by experts to
            meet industry needs
          </p>
        </div>

        <div className="order">
          <img src={order_img} alt="Step 2" />
          <p>Step 2</p>
          <p>
            1:1 live doubt solving support available throughout the day to clear
            your doubts instantly
          </p>
        </div>

        <div className="order">
          <img src={order_img} alt="Step 3" />
          <p>Step 3</p>
          <p>
            Personal mentors to guide and help you throughout your journey as a
            friend
          </p>
        </div>

        <div className="order">
          <img src={order_img} alt="Step 4" />
          <p>Step 4</p>
          <p>Build major projects which makes your resume stand apart</p>
        </div>

        <div className="order">
          <img src={order_img} alt="Step 5" />
          <p>Step 5</p>
          <p>
            Get guaranteed paid internships after completion of the program
            along with course completion certificates
          </p>
        </div>
      </div>
      <button className="apply-button">Apply now for ₹ 2999</button>
    </div>
  );
};

export default InternshipProgram;