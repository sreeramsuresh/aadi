import React from "react";
import "./Time.css";
import Timesheet from "./Timesheet/Timesheet";
import Time_Home from "./Time_Home/Time_Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pending_Approval from "./Pending_Approval/Pending_Approval";

function Time() {
  return (
    <div>
      <Time_Home />
      <Timesheet />

      {/* <Routes>
        <Route exact path="/timesheet" element={<Timesheet />} />
        <Route path="/approve" element={<Pending_Approval />} />
      </Routes> */}
    </div>
  );
}

export default Time;
