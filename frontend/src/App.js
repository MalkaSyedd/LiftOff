import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Homepage from "./Homepage";
import CheckIn from "./CheckIn";
import Profile from "./Profile";
import Admin from "./Admin";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/admin" element={<Admin />} />
       

      </Routes>
    </Router>
  );
}

export default App;

