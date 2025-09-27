
import React, { useState } from "react";
import "./Login.css"; // Make sure your CSS is saved as Login.css
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/SignUpPage'); // this is the route of your Sign Up page
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation or API calls here
    alert("Form submitted!");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="neu-icon">
            <div className="icon-inner">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
          <div className="login-header">
          <h2 className="logo-text">
          <span>Liftoff</span>
          </h2> {/*has animationm */}
          <p>Please log in or sign up to continue</p>
        </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <div className="input-group neu-input">
              <input type="email" id="email" name="email" required placeholder=" " />
              <label htmlFor="email">Email address</label>
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
                id="password"
                name="password"
                required
                placeholder=" "
              />
              <label htmlFor="password">Password</label>
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

          <div className="form-options">
            <div className="remember-wrapper">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember" className="checkbox-label">
                <div className="neu-checkbox">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                Remember me
              </label>
            </div>
            <a href="#" className="forgot-link">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="neu-button login-btn">
            <span className="btn-text">Log In</span>
            <div className="btn-loader">
              <div className="neu-spinner"></div>
            </div>
          </button>

          
          <button type="button" className="neu-button signup-btn" onClick={goToSignUp}>
            <span className="btn-text">Sign up</span>
            <div className="btn-loader">
              <div className="neu-spinner"></div>
            </div>
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;


