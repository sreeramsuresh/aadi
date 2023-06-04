import React from "react";
import TIME_HOME from "../TIME_HOME/TIME_HOME";

function PENDING_APPROVAL() {
  return (
    <div>
      <TIME_HOME />
      <div>
        <main id="main" role="main" className="pds-pt-xl">
          <div className="pds-container">
            <div className="pds-mb-lg">
              <h1 className="pds-mb-md">Pending approval</h1>

              <div className="pds-flex-list pds-justify-between pds-gap-sm">
                <div id="approval-sort-menu">
                  <div className="pds-menu-container">
                    <button
                      id=":r0:button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-controls=":r0:menu"
                      data-analytics-element-id="approval-pending-sort-by"
                      type="button"
                      className="pds-button"
                    >
                      Sort by: Week
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        aria-label="Down chevron icon"
                        aria-hidden="true"
                      >
                        <polyline points="5 9 12 17 19 9"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="js-roles-selector">
                  <input type="hidden" name="filter" value="" />
                  <div className="pds-chosen pds-chosen-container pds-chosen-menu">
                    <button className="pds-button pds-chosen-button">
                      <div className="pds-chosen-selection">Show: Everyone</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        aria-label="Down chevron icon"
                        className="pds-flex-no-shrink"
                        aria-hidden="true"
                      >
                        <polyline points="5 9 12 17 19 9"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pds-table-wrapper">
              <table className="pds-table has-clickable-table-rows">
                <tbody>
                  <tr>
                    <th colspan="2">29 May 2023 - 04 Jun 2023</th>
                  </tr>

                  <tr id="approval-unit-215939915" className="clickable-row">
                    <td>
                      <a
                        className="pds-valign-middle pds-color-text no-underline"
                        href="/approve"
                      >
                        <strong>Suresh VadakkeMadom</strong>
                      </a>{" "}
                      {/* <a
                        className="clickable-row-link"
                        tabIndex="-1"
                        aria-hidden="true"
                        href="/approve"
                      ></a> */}
                    </td>
                    <td className="pds-text-right">
                      10:00 hours (100% billable)
                      {/* <a
                        className="clickable-row-link"
                        tabIndex="-1"
                        aria-hidden="true"
                        href="/approve"
                      ></a> */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pds-mt-md">
              <button
                className="pds-button pds-button-primary"
                data-open-dialog="approve-all-dialog"
                data-analytics-element-id="approval-pending-approve"
              >
                Approve timesheets
              </button>
            </div>
          </div>

          <div
            id="approve-all-dialog"
            className="pds-dialog-backdrop"
            aria-hidden="true"
          >
            <div
              role="dialog"
              className="pds-dialog pds-dialog-sm"
              aria-labelledby="approve-all-dialog-title"
            >
              <form
                action="https://659.harvestapp.com/approve/all_pending_my_approval?return_to=%2Fapprove"
                accept-charset="UTF-8"
                method="post"
              >
                <input
                  type="hidden"
                  name="authenticity_token"
                  value="ktl1h9taHSmGcpH/a9Rqm04vJW9rIJLQxlyOI0Xue/UgfAX2jGCm1js6Ddpg2LL9WmSfNpNiAdMNsXe+WMQxNg=="
                  autocomplete="off"
                />
                <input
                  type="hidden"
                  name="of_these_users_and_weeks"
                  id="of_these_users_and_weeks"
                  value="4636614@2023-05-29"
                  autocomplete="off"
                />
                <input
                  type="hidden"
                  name="page"
                  id="page"
                  value="1"
                  autocomplete="off"
                />
                <h2 id="approve-all-dialog-title">
                  Approve all timesheets on the current page?
                </h2>
                <div className="pds-mt-md">
                  <button
                    type="submit"
                    className="pds-button pds-button-primary"
                    data-loading="Approving"
                    data-analytics-element-id="approval-pending-approve-confirm"
                  >
                    Approve timesheets
                  </button>
                  <button
                    type="button"
                    className="pds-button"
                    aria-label="Cancel and close dialog"
                    data-close-dialog=""
                    data-analytics-element-id="approval-pending-approve-cancel"
                  >
                    Cancel
                  </button>
                </div>
              </form>{" "}
            </div>
          </div>

          <div
            hidden=""
            id="approval-disabled-tooltip"
            className="pds-tooltip-sm"
          >
            Sorry, timesheet approval has been temporarily disabled. Please try
            again in a few minutes.
          </div>
        </main>
      </div>
    </div>
  );
}

export default PENDING_APPROVAL;
