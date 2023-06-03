// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Time from "./Components/Time/Time";
import Expenses from "./Components/Expenses/Expenses";
import Projects from "./Components/Projects/Projects";
import Team from "./Components/Team/Team";
import Reports from "./Components/Reports/Reports";
import Estimates from "./Components/Estimates/Estimates";
import Manage from "./Components/Manage/Manage";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Time />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/estimates" element={<Estimates />} />
          <Route path="/manage" element={<Manage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
