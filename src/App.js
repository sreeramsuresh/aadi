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
import Timesheet from "./Components/Time/Timesheet/Timesheet";
import Pending_Approval from "./Components/Time/Pending_Approval/Pending_Approval";
import Unsubmitted from "./Components/Time/Unsubmitted/Unsubmitted";
import Approved from "./Components/Time/Approved/Approved";
import Footer from "./Components/Footer/Footer";

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
          <Route path="/" element={<Timesheet />} />
          <Route path="/approve" element={<Pending_Approval />} />
          <Route path="/missing_time" element={<Unsubmitted />} />
          <Route path="/approve/archives" element={<Approved />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
