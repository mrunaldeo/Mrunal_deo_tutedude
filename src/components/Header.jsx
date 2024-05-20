import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="navbar-logo">LOGO</div>
          <div className="navbar-buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Signup</button>
          </div>
        </nav>
      </header>
      <div className="nav-links-container">
        <div className="nav-links-content">
          <a href="#">Overview</a>
          <a href="#">Curriculum</a>
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a href="#">Refund</a>
          <a href="#">Testimonials</a>
        </div>
      </div>
    </>
  );
};

export default Header;