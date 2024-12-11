import React from "react";
import "./../styles/Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    {/* part 1 */}
    <div className="footer-1">
      <p className="all-rights">&copy; 2024 BudetBuddy. All rights reserved.</p>
      <div className="socials">
        <a target="_blank" href="https://ru.linkedin.com/"><FaLinkedin style={{color: '#fff', width: 30, height: 30}}/></a>
        <a target="_blank" href="https://www.facebook.com/?locale=ru_RU"><FaFacebookSquare style={{color: '#fff', width: 30, height: 30}}/></a>
        <a target="_blank" href="https://www.instagram.com/"><FaInstagramSquare style={{color: '#fff', width: 30, height: 30}}/></a>
      </div>
    </div>
    {/* part 2 */}
    <div className="footer-2">
      <div>
      <h4>Learn</h4>
      <ul>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Help Center</li>
      </ul>
      </div>
      
      <div>
      <h4>Our Company</h4>
      <ul>
        <li>Privacy Policy</li>
        <li>User Terms</li>
        <li>Careers</li>
      </ul>
      </div>

      <div>
      <h4>Get in touch</h4>
      <ul>
        <li>+996707707707</li>
        <li>+996505505505</li>
        <li>cs-12-24@gmail.com</li>
      </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
