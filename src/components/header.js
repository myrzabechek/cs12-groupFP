import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Header.css";

const Header = () => (
  <header className="header">
    <nav className="nav">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/another">Forecast</Link></li>
        <li><Link to="/expense-tracker">Income tracker</Link></li>
      </ul>
      <div className="buttons">
      <button className="yellow-button">Log in</button>
      <button className="black-button">Try for free</button>
    </div>
    </nav>
  </header>
);

export default Header;