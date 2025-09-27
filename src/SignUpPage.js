import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Reuse the same styling as your login page

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userId: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up data:", formData);
    alert("Sign Up submitted!");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2 className="logo-text"><span>Liftoff</span></h2>
          <p className="info-login">Create your account</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <div className="input-group neu-input">
              <input
                type="text"
                name="firstName"
                placeholder=" "
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <label>First Name</label>
              <div className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="input-group neu-input">
              <input
                type="text"
                name="lastName"
                placeholder=" "
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <label>Last Name</label>
              <div className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="input-group neu-input">
              <input
                type="email"
                name="userId"
                placeholder=" "
                value={formData.userId}
                onChange={handleChange}
                required
              />
              <label>Email</label>
              <div className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="input-group neu-input password-group">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder=" "
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label>Password</label>
              <div className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>
              <button
                type="button"
                className={`neu-toggle ${showPassword ? "show-password" : ""}`}
                onClick={togglePassword}
                aria-label="Toggle password visibility"
              >
                <svg className="eye-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <svg className="eye-closed" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              </button>
            </div>
          </div>

          <button type="submit" className="neu-button signup-btn">
            <span className="btn-text">Sign Up</span>
            <div className="btn-loader">
              <div className="neu-spinner"></div>
            </div>
          </button>
        </form>

        <div className="signup-link">
          <p>
            <button
              type="button"
              className="neu-button login-btn"
              onClick={() => navigate("/")}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
