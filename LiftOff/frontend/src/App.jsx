// Import necessary dependencies from React and React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import pages (components for each route)
import Login from "./pages/LoginPage";
import Signup from "./signup";
import UserInfoPage from "./pages/UserInfoPage";
import Navbar from "./pages/Navbar";
import Support from "./pages/Support";

function App() {
  return (
    <div>
    
    {/* // Router wraps the entire application to enable routing */}
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/infopage" element={<UserInfoPage />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
    </div>
  );
} 

// Export App so it can be used in index.js
export default App;



