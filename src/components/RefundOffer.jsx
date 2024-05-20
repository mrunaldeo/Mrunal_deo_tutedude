import React from "react";
import scribble from "../assets/scribble.png";
import clock from "../assets/clock.png";
import steps from "../assets/steps.png";
import steps2 from "../assets/steps2.png";
import steps3 from "../assets/steps3.png";
import image1 from "../assets/image1.png";

const RefundOffer = () => {
  return (
    <div className="refund-offer-container">
      <h2 className="highlight">
        Don't miss out on this{" "}
        <span className="limited-time">
          limited-time <br /> opportunity
        </span>{" "}
        to learn for <span className="limited-time">Free!</span>
      </h2>

      <div className="refund-offer-wrapper">
        <div className="refund-offer">
          <div className="offer-details">
            <div className="header-wrapper">
              <h3>
                100% Refund Offer{" "}
                <span role="img" aria-label="sunglasses">
                  😎
                </span>
              </h3>
            </div>
            <p>20 Seats Left</p>
            <div className="seats-bar">
              <div className="seats-bar-eclipse"></div>
            </div>

            <div className="offer-div">
              <img src={clock} alt="clock" className="clock" />
              <p>Offer ends in 10:00 Mins</p>
            </div>
          </div>

          <img src={scribble} alt="scribble" className="scribble" />
        </div>
      </div>

      <h3 className="how-it-works">How does it work?</h3>
      <div className="steps">
        <img src={steps} alt="steps" />
        <div className="smoke-line"></div>
        <img src={steps2} alt="steps2" />
        <div className="smoke-line2"></div>
        <img src={steps3} alt="steps3" />
      </div>

      <div className="para-container">
        <div className="step">
          <p> Step 1 : Enroll into your favorite course for only ₹1,499</p>
          <img src={image1} alt="image1" />
          <h5 className="step-para">
            Start Learning with <span>Lifetime Course Access</span>
          </h5>
        </div>
        <div className="step">
          <p> Step 2 : Complete Course & Assignments within 2 Years!</p>
          <div className="years-para">
            <h1>2</h1>
            <p>years time from the date of enrollment</p>
          </div>
          <h5 className="step-para">
            Finish the course within <span>2 Years</span> to Qualify for Refund.
          </h5>
        </div>
        <div className="step">
          <p>Step 3 : Receive 100% Refund upon completion</p>
          <div className="years-para">
            <h1>100%</h1>
            <p>Enrollment Fee is refunded</p>
          </div>

          <h5 className="step-para">
            Upon Course Completion within <span>2 Years</span>, Get Your{" "}
            <span>₹1,499 Back.</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default RefundOffer;