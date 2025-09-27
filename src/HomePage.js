import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="logo-text"><span>Liftoff</span></h1>
        <p className="tagline">Booking flights made easy</p>

        <div className="home-buttons">
          <button className="neu-button" onClick={() => navigate("/Login")}>
            Login
          </button>
          <button className="neu-button" onClick={() => navigate("/SignUpPage")}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
