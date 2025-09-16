import React, { useState } from "react";
import "./signup.css"; // Make sure your CSS is saved as Login.css
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

    const handleChange = (e) => { // Handle input changes as they occur
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can add form validation or API calls here
    try{
        const res = await axios.post('http://localhost:5000/api/users/register', formData);
        alert("Form submitted!");
        console.log("Saved user: ", res.data);
    }catch(err){
        console.error("Error saving user: ", err);
        alert("Error submitting form");
    }
  };
    return (
    <div className="login-container">
        <div className="login-card">
            <h2>LiftOff</h2>
            <p>Sign up here</p>

            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input type="checkbox" id="showPassword" onChange={togglePassword} />
                    <label htmlFor="showPassword">Show Password</label>
                </div>

                <button type="submit" className="submit-button">Sign Up</button>
                <p>Already have an account? <Link to="/Login">Log in here</Link></p>
            </form>
        </div>
    </div>
  );

};

export default Signup;