import React from "react";

function TIME_HOME() {
  return (
    <div>
      <nav id="sub-nav" className="pds-screen-only">
        <div className="pds-container">
          <ul className="sub-nav-tabs">
            <li>
              <a
                data-analytics-element-id="sub-nav-time-timesheet"
                className="current"
                href="/"
              >
                Timesheet
              </a>
            </li>
            <li>
              <a
                data-analytics-element-id="sub-nav-time-pending-approval"
                href="/approve"
              >
                Pending approval <strong>•</strong>
              </a>
            </li>
            <li>
              <a
                data-analytics-element-id="sub-nav-time-unsubmitted"
                href="/missing_time"
              >
                Unsubmitted
              </a>
            </li>
            <li>
              <a
                data-analytics-element-id="sub-nav-time-archive"
                className="nobdr"
                href="/approve/archives"
              >
                Approved
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default TIME_HOME;
