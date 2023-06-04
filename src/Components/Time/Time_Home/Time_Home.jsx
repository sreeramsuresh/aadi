import React from "react";

function Time_Home() {
  return (
    <div>
      <nav id="sub-nav" class="pds-screen-only">
        <div class="pds-container">
          <ul class="sub-nav-tabs">
            <li>
              <a
                data-analytics-element-id="sub-nav-time-timesheet"
                class="current"
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
                class="nobdr"
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

export default Time_Home;
