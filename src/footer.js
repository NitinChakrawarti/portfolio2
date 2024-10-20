import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer py-10">
      <div className="footer-content">
        <p>© 2024 Nitin Chakrawarti. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/nitinchakrawarti" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/NitinChakrawarti" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://x.com/nitinchakarawar?t=ZIOZ_BNaKUPkN4bVzj9bHw&s=09" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
