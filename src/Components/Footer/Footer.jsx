import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Footer.css';
import { documentdata } from '../../assets/documentdata';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            31st March 2024 <br /> This is the first project of my road to learning React.js<br /> to build my own portfolio, credit to some YouTube channels
            <br />
            <div className="credit-links">
              1. <a href="https://www.youtube.com/@KG_Coding" target='_blank' rel="noopener noreferrer">Prasant Sir</a> &nbsp;
              2. <a href="https://www.youtube.com/@ThapaTechnical" target='_blank' rel="noopener noreferrer">Thapa Sir</a> &nbsp;
              3. <a href="https://www.youtube.com/@chaiaurcode" target='_blank' rel="noopener noreferrer">Hitesh Sir</a>&nbsp;
            </div>
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="links">
            <Link to={""}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={""}>Services</Link>
            <Link to={"aboutwebinfo"}>Contribute</Link>
          </div>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="links">
            <a href={documentdata.gitlink} target='_blank' rel="noopener noreferrer">GitHub</a>
            <a href={documentdata.xlink} target='_blank' rel="noopener noreferrer">X</a>
            <a href={documentdata.linkedinlink} target='_blank' rel="noopener noreferrer">LinkedIn</a>
            <a href={documentdata.instaLink} target='_blank' rel="noopener noreferrer">Instagram</a>
            <a href={documentdata.fblink} target='_blank' rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Buddhadeb Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
