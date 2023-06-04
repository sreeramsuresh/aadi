import React from "react";
import "./Time.css";
import Timesheet from "./Timesheet/Timesheet";
import TIME_HOME from "./TIME_HOME/TIME_HOME";

function Time() {
  return (
    <div>
      <TIME_HOME />
      <Timesheet />
    </div>
  );
}

export default Time;
