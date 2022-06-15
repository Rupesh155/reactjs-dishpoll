import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Start from "./components/dashboard/start";
import View from "./components/dashboard/view";
function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/start" element={<Start />} />
        </Routes>
        <Routes>
          <Route path="/view" element={<View />} />
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
