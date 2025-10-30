// Navbar.jsx
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">LiftOff ✈️</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/flights">Flights</Link></li>
        <li><Link to="/infopage">My Info</Link></li>
        <li><Link to="/setting">Settings</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;