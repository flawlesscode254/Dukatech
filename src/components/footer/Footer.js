import React from "react";
import logo from "../../images/logo.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiKenya } from "react-icons/gi";
import "./footer.css";
const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <div className="columns">
        <div className="col-footer">
          <img src={logo} alt="" />
          <span className="inline">
            <GiKenya size={20} />
            <p>Kenya</p>
          </span>
        </div>
        <div className="col-footer">
          <h3>Support</h3>
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>
        <div className="col-footer">
          <h3>Company</h3>
          <p>Join Us</p>
          <p>Crunchbase</p>
        </div>
        <div className="col-footer">
          <h3>Legal</h3>
          <p>Terms and conditions</p>
          <p>Privacy policy</p>
        </div>
        <div className="col-footer">
          <h3>Kenya</h3>
          <p>Kenyatta University, Chandaria</p>
        </div>
      </div>
      <div className="footer-liner">
        <div className="copyright">Dukatech &copy; {date.getFullYear()}</div>
        <div className="social-links">
          <FaFacebookSquare size={30} />
          <FaTwitter size={30} />
          <FaLinkedin size={30} /> <FaInstagram size={30} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
