import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isPopoverActive, setIsPopoverActive] = useState(false);

  const handlePopoverToggle = () => {
    setIsPopoverActive(!isPopoverActive);
  };

  return (
    <div className={isPopoverActive ? "responsive-menu-active" : ""}>
      <div id="header" className="main-nav-orange pds-screen-only">
        <button
          type="button"
          id="close-mobile-menu"
          className="toggle-mobile-menu"
          data-toggle-menu=""
          onClick={handlePopoverToggle}
        >
          <svg
            className="pds-mr-xs"
            width="16"
            height="16"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-label="X icon"
          >
            <path d="M14.25 3.75L3.75 14.25"></path>
            <path d="M3.75 3.75L14.25 14.25"></path>
          </svg>
          Close menu
        </button>
        <nav id="main-nav" className="pds-container">
          <ul>
            <li>
              <a
                className="primary-nav-item is-current"
                data-analytics-element-id="main-nav-time"
                href="/"
              >
                Time
              </a>
            </li>

            <li>
              <a
                className="primary-nav-item "
                data-analytics-element-id="main-nav-expenses"
                href="/expenses"
              >
                Expenses
              </a>
            </li>

            <li>
              <a
                className="primary-nav-item "
                data-analytics-element-id="main-nav-projects"
                href="/projects"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                className="primary-nav-item "
                data-analytics-element-id="main-nav-team"
                href="/team"
              >
                Team
              </a>
            </li>

            <li>
              <a
                className="primary-nav-item "
                data-analytics-element-id="main-nav-reports"
                href="/reports"
              >
                Reports
              </a>
            </li>

            <li>
              <a
                className="primary-nav-item "
                data-analytics-element-id="main-nav-estimates"
                href="/estimates"
              >
                Estimates
              </a>
            </li>

            <li>
              <a
                className="primary-nav-item "
                data-analytics-element-id="main-nav-manage"
                href="/manage"
              >
                Manage
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a
                className="secondary-nav-item "
                data-analytics-element-id="main-nav-settings"
                href="/company/account"
              >
                Settings
              </a>
            </li>

            <li id="user-nav-lg">
              <div className="popover-wrapper">
                <button
                  type="button"
                  id="user-dropdown-toggle"
                  className={`primary-nav-item ${
                    isPopoverActive ? "popover-active" : ""
                  }`}
                  aria-label="Profile and settings for Suresh VadakkeMadom"
                  aria-haspopup="true"
                  aria-expanded={isPopoverActive ? "true" : "false"}
                  data-popover=""
                  data-analytics-element-id="main-nav-profile-menu"
                  onClick={handlePopoverToggle}
                >
                  <img
                    className="pds-avatar"
                    alt=""
                    height="28"
                    width="28"
                    aria-hidden="true"
                    data-user-dropdown-avatar="true"
                    src="https://proxy.harvestfiles.com/production_harvestapp_public/uploads/users/avatar/004/636/614/c15cf1b14b488137af1fa3b2683b14004738c157/normal.png?1685719008"
                  />
                  <span aria-hidden="true">Suresh</span>
                </button>

                <div
                  id="popover-user"
                  class={`dropdown is-down-right ${
                    isPopoverActive ? "is-visible" : ""
                  }`}
                  role="menu"
                  aria-labelledby="user-dropdown-toggle"
                  aria-hidden="false"
                  data-focus-wrap="true"
                  style={{ top: "48px", left: "-88px" }}
                >
                  <div className="user-information" role="presentation">
                    <img
                      className="pds-avatar"
                      alt=""
                      height="40"
                      width="40"
                      aria-hidden="true"
                      data-user-dropdown-avatar="true"
                      src="https://proxy.harvestfiles.com/production_harvestapp_public/uploads/users/avatar/004/636/614/c15cf1b14b488137af1fa3b2683b14004738c157/normal.png?1685719008"
                    />
                    <div>
                      <div className="pds-weight-semi">Suresh VadakkeMadom</div>
                      <div className="pds-text-sm pds-color-muted">.</div>
                    </div>
                  </div>
                  <nav>
                    <ul>
                      <li>
                        <a
                          role="menuitem"
                          data-analytics-element-id="main-nav-profile-menu-my-profile"
                          href="/people/4636614/edit"
                        >
                          My profile
                        </a>
                      </li>
                      <li>
                        <a
                          role="menuitem"
                          data-analytics-element-id="main-nav-profile-menu-my-time-report"
                          href="/reports?user_id=4636614"
                        >
                          My time report
                        </a>
                      </li>
                      <li>
                        <a
                          role="menuitem"
                          data-analytics-element-id="main-nav-profile-menu-notifications"
                          href="/people/4636614/notifications"
                        >
                          Notifications
                        </a>
                      </li>
                      <li>
                        <a
                          role="menuitem"
                          data-analytics-element-id="main-nav-profile-menu-referrals"
                          href="/referrals"
                        >
                          Refer a friend
                        </a>
                      </li>
                      <li>
                        <a
                          className="secondary-user-nav-item"
                          data-analytics-element-id="main-nav-settings"
                          href="/company/account"
                        >
                          Settings
                        </a>
                      </li>
                      <li className="popover-seperator" aria-hidden="true"></li>
                      <li>
                        <a
                          role="menuitem"
                          data-analytics-element-id="main-nav-profile-menu-sign-out"
                          href="/account/logout"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <nav id="user-nav-sm">
          <ul>
            <li>
              <a
                role="menuitem"
                data-analytics-element-id="main-nav-profile-menu-my-profile"
                href="/people/4636614/edit"
              >
                My profile
              </a>
            </li>
            <li>
              <a
                role="menuitem"
                data-analytics-element-id="main-nav-profile-menu-my-time-report"
                href="/reports?user_id=4636614"
              >
                My time report
              </a>
            </li>
            <li>
              <a
                role="menuitem"
                data-analytics-element-id="main-nav-profile-menu-notifications"
                href="/people/4636614/notifications"
              >
                Notifications
              </a>
            </li>
            <li>
              <a
                role="menuitem"
                data-analytics-element-id="main-nav-profile-menu-referrals"
                href="/referrals"
              >
                Refer a friend
              </a>
            </li>
            <li>
              <a
                className="secondary-user-nav-item"
                data-analytics-element-id="main-nav-settings"
                href="/company/account"
              >
                Settings
              </a>
            </li>
            <li className="popover-seperator" aria-hidden="true"></li>
            <li>
              <a
                role="menuitem"
                data-analytics-element-id="main-nav-profile-menu-sign-out"
                href="/account/logout"
              >
                Sign out
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
