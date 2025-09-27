import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUpPage from './SignUpPage';
import HomePage from "./HomePage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />   {/* Homepage first */}
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;




