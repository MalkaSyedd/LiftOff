import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./signup";
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Signup />} />

      </Routes>
    </Router>
  );
} 

export default App;



