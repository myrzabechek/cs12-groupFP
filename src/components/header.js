import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Header.css";

const Header = () => (
  <header className="header">
    <nav className="nav">
      <ul className="nav-list">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/another">Another</Link></li>
        <li><Link to="/expense-tracker">Трекер доходов</Link></li>
      </ul>
    </nav>
    <div className="buttons">
      <button className="yellow-button">Log in</button>
      <button className="black-button">Try for free</button>
    </div>
  </header>
);

export default Header;