import React from "react";
import newcerticiatedesign from "../assets/new-certiciate-design.png";
import award_star_purple from "../assets/award_star_purple.png";
import internship_photo from "../assets/internship_photo.png";

const CertificatesInternships = () => {
  return (
    <div className="certificates-internships-container">
      <h2 className="section-title">
        Unlock <span className="new-highlight">6 Certificates</span> &
        <span className="new-highlight"> Internship Opportunities!</span>
      </h2>

      <div className="content-grid">
        <div className="content-card certificate-card">
          <h3 className="certificate-heading">
            Get 6 Industry Recognized Certificates!
          </h3>

          <img
            src={newcerticiatedesign}
            alt="Certificate"
            className="certificate-image"
          />

          <div className="badge">
            <div className="para-bg">
              <img src={award_star_purple} alt="award_star_purple" />
              <p>Official and Verified</p>
            </div>
            <div className="para-bg">
              <img src={award_star_purple} alt="award_star_purple" />
              <p>Enhances Credibility</p>
            </div>
          </div>
        </div>

        <div className="content-card internship-card">
          <h2 className="internship-header">Bag Internship Opportunities!</h2>
          <p className="internship-para">
            With every course, we make you not only industry-ready but also help
            you crack your first internship.
          </p>
          <div
            className="internship-image-div
          "
          >
            <img
              src={internship_photo}
              alt="Internship"
              className="internship-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesInternships;