import React, { useState } from "react";
import "./Timesheet.css";

function Timesheet() {
  const [isResubmit, setResubmit] = useState(false);

  const handleResubmitToggle = () => {
    setResubmit(!isResubmit);
    if (!isResubmit) {
      var button = document.querySelector(".pds-button.js-submit-link");
      button.removeAttribute("hidden");
    }
  };

  return (
    <div>
      <div
        id="toast"
        className="pds-container-sm pds-screen-only"
        role="alert"
      ></div>

      <main id="main" role="main" className="pds-pt-xl">
        <div className="pds-container js-timesheet-view">
          <div className="day-view-wrapper js-view-wrapper">
            <header className="day-view-header">
              <div className="js-flash-wrap"></div>

              <div className="js-timesheet-header">
                <div className="pds-flex-list pds-justify-between pds-gap-sm">
                  <div className="pds-flex-list pds-gap-sm">
                    <nav className="pds-button-toggle pds-screen-only">
                      <a
                        className="pds-button pds-button-icon js-navigate-by-url test-previous"
                        href="/time"
                        aria-label="Previous day"
                        data-analytics-element-id="timesheet-navigate-previous-day"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="19" y1="12" x2="5" y2="12"></line>
                          <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                      </a>
                      <a
                        className="pds-button pds-button-icon js-navigate-by-url test-next"
                        href="/time"
                        aria-label="Next day"
                        data-analytics-element-id="timesheet-navigate-next-day"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </nav>

                    <h1>
                      Today:
                      <span className="pds-weight-normal">Sunday, 04 Jun</span>
                      <span className="pds-weight-normal pds-text-lg pds-print-only">
                        (Timesheet for Suresh VadakkeMadom)
                      </span>
                    </h1>

                    <div className="pds-badge pds-badge-blue timesheet-approval-status">
                      Pending approval
                    </div>

                    <span className="form-loading loading-week pds-screen-only"></span>
                  </div>

                  <div className="pds-flex-list pds-screen-only">
                    <button
                      type="button"
                      id="calendar-button"
                      className="pds-button pds-button-icon"
                      aria-label="Change date"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-analytics-element-id="timesheet-navigate-change-date"
                      data-popover=""
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-label="Calendar icon"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </button>
                    <div
                      className="popover js-calendar-wrap"
                      aria-labelledby="calendar-button"
                      role="menu"
                      aria-hidden="true"
                    >
                      <div className="kalendae">
                        <div
                          className="k-calendar"
                          data-cal-index="0"
                          data-datestart="2023-06-01T12"
                        >
                          <div className="k-title k-disable-year-nav">
                            {/* <a className="k-btn-previous-year"></a>
                            <a className="k-btn-previous-month"></a>
                            <a className="k-btn-next-year"></a>
                            <a className="k-btn-next-month"></a> */}
                            <span className="k-caption">June 2023</span>
                          </div>
                          <div className="k-header ">
                            <span data-day="0" className="">
                              Mo
                            </span>
                            <span data-day="1" className="">
                              Tu
                            </span>
                            <span data-day="2" className="">
                              We
                            </span>
                            <span data-day="3" className="">
                              Th
                            </span>
                            <span data-day="4" className="">
                              Fr
                            </span>
                            <span data-day="5" className="">
                              Sa
                            </span>
                            <span data-day="6" className="">
                              Su
                            </span>
                          </div>
                          <div className="k-days">
                            <span
                              className="k-out-of-month k-active"
                              data-date="2023-05-29T12"
                            >
                              29
                            </span>
                            <span
                              className="k-out-of-month k-active"
                              data-date="2023-05-30T12"
                            >
                              30
                            </span>
                            <span
                              className="k-out-of-month k-active"
                              data-date="2023-05-31T12"
                            >
                              31
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-01T12"
                            >
                              1
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-02T12"
                            >
                              2
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-03T12"
                            >
                              3
                            </span>
                            <span
                              className="k-selected k-in-month k-active k-today"
                              data-date="2023-06-04T12"
                            >
                              4
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-05T12"
                            >
                              5
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-06T12"
                            >
                              6
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-07T12"
                            >
                              7
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-08T12"
                            >
                              8
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-09T12"
                            >
                              9
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-10T12"
                            >
                              10
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-11T12"
                            >
                              11
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-12T12"
                            >
                              12
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-13T12"
                            >
                              13
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-14T12"
                            >
                              14
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-15T12"
                            >
                              15
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-16T12"
                            >
                              16
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-17T12"
                            >
                              17
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-18T12"
                            >
                              18
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-19T12"
                            >
                              19
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-20T12"
                            >
                              20
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-21T12"
                            >
                              21
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-22T12"
                            >
                              22
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-23T12"
                            >
                              23
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-24T12"
                            >
                              24
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-25T12"
                            >
                              25
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-26T12"
                            >
                              26
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-27T12"
                            >
                              27
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-28T12"
                            >
                              28
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-29T12"
                            >
                              29
                            </span>
                            <span
                              className="k-in-month k-active"
                              data-date="2023-06-30T12"
                            >
                              30
                            </span>
                            <span
                              className="k-out-of-month k-active"
                              data-date="2023-07-01T12"
                            >
                              1
                            </span>
                            <span
                              className="k-out-of-month k-active"
                              data-date="2023-07-02T12"
                            >
                              2
                            </span>
                            <span
                              className="k-out-of-month k-active"
                              data-date="2023-07-03T12"
                            >
                              3
                            </span>
                            <span
                              className="k-out-of-month k-active"
                              data-date="2023-07-04T12"
                            >
                              4
                            </span>
                            <span
                              className="k-out-of-month k-active"
                              data-date="2023-07-05T12"
                            >
                              5
                            </span>
                            <span
                              className="k-out-of-month k-active"
                              data-date="2023-07-06T12"
                            >
                              6
                            </span>
                            <span
                              className="k-out-of-month k-active"
                              data-date="2023-07-07T12"
                            >
                              7
                            </span>
                            <span
                              className="k-out-of-month k-active"
                              data-date="2023-07-08T12"
                            >
                              8
                            </span>
                            <span
                              className="k-out-of-month k-active"
                              data-date="2023-07-09T12"
                            >
                              9
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pds-button-toggle">
                      <button
                        type="button"
                        className="pds-button pds-button-selected"
                        tabIndex="-1"
                        title="Day View"
                        aria-label="Day view"
                        aria-disabled="true"
                      >
                        Day
                      </button>
                      <a
                        className="pds-button"
                        href="/time"
                        aria-label="Week view"
                        data-analytics-element-id="timesheet-week-view"
                      >
                        Week
                      </a>
                    </div>
                    <div id="user-switcher" className="pds-inline-block">
                      <div className="pds-chosen pds-chosen-container pds-chosen-menu">
                        <button
                          className="pds-button pds-chosen-button pds-chosen-blank"
                          data-analytics-element-id="timesheet-teammates-switcher-select"
                        >
                          <div className="pds-chosen-selection">Teammates</div>
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
              </div>
            </header>

            <div className="new-time-entry-container js-new-time-entry-container">
              {" "}
              <button
                type="button"
                className="pds-button pds-button-primary button-new-time-entry js-new-time-entry test-new-time-entry"
                aria-label="Track time"
                data-analytics-element-id="timesheet-new-entry"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>Track time</span>
              </button>
            </div>

            <div className="day-view-table">
              <div className="pds-tabs-wrapper pds-screen-only">
                <div className="pds-tabs" role="tablist">
                  <ul className="day-view-week-nav pds-gap-xs pds-screen-only pds-w-full js-week-nav">
                    {" "}
                    <li>
                      <button
                        type="button"
                        role="tab"
                        //     href="/time"
                        aria-selected="false"
                        aria-controls="panel-0"
                        className="pds-tab pds-w-full test-Monday  is-not-today  "
                        data-analytics-element-id="timesheet-navigate-day-Monday"
                      >
                        <div>
                          M<span>on</span>
                        </div>
                        <div className="pds-text-sm">0:00</div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        role="tab"
                        //     href="/time"
                        aria-selected="false"
                        aria-controls="panel-1"
                        className="pds-tab pds-w-full test-Tuesday  is-not-today  "
                        data-analytics-element-id="timesheet-navigate-day-Tuesday"
                      >
                        <div>
                          T<span>ue</span>
                        </div>
                        <div className="pds-text-sm">0:00</div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        role="tab"
                        //     href="/time"
                        aria-selected="false"
                        aria-controls="panel-2"
                        className="pds-tab pds-w-full test-Wednesday  is-not-today  "
                        data-analytics-element-id="timesheet-navigate-day-Wednesday"
                      >
                        <div>
                          W<span>ed</span>
                        </div>
                        <div className="pds-text-sm">0:00</div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        role="tab"
                        //     href="/time"
                        aria-selected="false"
                        aria-controls="panel-3"
                        className="pds-tab pds-w-full test-Thursday  is-not-today  has-completion-signal"
                        data-tooltip=""
                        data-tooltip-delay="500"
                        data-tooltip-hide-on-hover=""
                        aria-describedby="has-completion-signal-tooltip-Thursday"
                        data-analytics-element-id="timesheet-navigate-day-Thursday"
                      >
                        <div>
                          T<span>hu</span>
                        </div>
                        <div className="pds-text-sm">
                          5:00
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-label="You have time tracked on this day"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                        </div>
                      </button>
                      {/* <div
                        id="has-completion-signal-tooltip-Thursday"
                        className="pds-tooltip-sm"
                        data-particles=""
                        hidden=""
                      >
                        <strong>Nice job!</strong> You’ve tracked time on 1 Jun
                        2023.
                      </div> */}
                    </li>
                    <li>
                      <button
                        type="button"
                        role="tab"
                        //     href="/time"
                        aria-selected="false"
                        aria-controls="panel-4"
                        className="pds-tab pds-w-full test-Friday  is-not-today  has-completion-signal"
                        data-tooltip=""
                        data-tooltip-delay="500"
                        data-tooltip-hide-on-hover=""
                        aria-describedby="has-completion-signal-tooltip-Friday"
                        data-analytics-element-id="timesheet-navigate-day-Friday"
                      >
                        <div>
                          F<span>ri</span>
                        </div>
                        <div className="pds-text-sm">
                          5:00
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-label="You have time tracked on this day"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                        </div>
                      </button>
                      {/* <div
                        id="has-completion-signal-tooltip-Friday"
                        className="pds-tooltip-sm"
                        data-particles=""
                        hidden=""
                      >
                        <strong>Nice job!</strong> You’ve tracked time on 2 Jun
                        2023.
                      </div> */}
                    </li>
                    <li>
                      <button
                        type="button"
                        role="tab"
                        //     href="/time"
                        aria-selected="false"
                        aria-controls="panel-5"
                        className="pds-tab pds-w-full test-Saturday  is-not-today  "
                        data-analytics-element-id="timesheet-navigate-day-Saturday"
                      >
                        <div>
                          S<span>at</span>
                        </div>
                        <div className="pds-text-sm">0:00</div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        role="tab"
                        //     href="/time"
                        aria-selected="true"
                        aria-controls="panel-6"
                        className="pds-tab pds-w-full test-Sunday pds-tab-selected is-today  "
                        data-analytics-element-id="timesheet-navigate-day-Sunday"
                      >
                        <div>
                          S<span>un</span>
                        </div>
                        <div className="pds-text-sm">0:00</div>
                      </button>
                    </li>
                    <li
                      id="day-view-week-nav-total"
                      className="pds-text-right pds-px-xs"
                    >
                      Week total
                      <div className="pds-text-sm test-week-total">10:00</div>
                    </li>
                  </ul>
                </div>
              </div>

              <table id="day-view-entries">
                <tbody
                  className="js-day-view-entry-list"
                  data-test-day="2023-06-04"
                  hidden=""
                ></tbody>
                <tfoot>
                  <tr
                    className="day-view-summary js-day-view-summary"
                    hidden=""
                  >
                    <td className="pds-text-right pds-weight-normal">Total:</td>
                    <td className="pds-text-right pds-weight-semi">0:00</td>
                    <td className="pds-screen-only"></td>
                  </tr>
                </tfoot>
              </table>

              <div
                id="timesheets-empty"
                className="pds-empty pds-position-relative js-empty-view"
              >
                <div className="pds-screen-only">
                  <div className="pds-py-xxl">
                    “If you need to, keep time on me.”
                    <br className="pds-show@md" aria-hidden="true" />– Fleet
                    Foxes
                  </div>
                </div>

                <div className="pds-print-only">
                  No time tracked for this week!
                </div>
              </div>

              <div className="pds-flex-list pds-justify-between pds-gap-sm pds-items-start pds-mt-md timesheet-bottom">
                <div className="js-timesheet-footer"></div>
                <div className="js-timesheet-approval">
                  <form
                    method="POST"
                    action="/daily/review"
                    className="button-and-confirmation"
                  >
                    <input
                      type="hidden"
                      name="authenticity_token"
                      value="VsjbYocHB7WaWEY6xp1sRuOzevX5eKzo/QOJAHcUAuXkbasT0D28SicQ2h/NkbQg9/jArAE6P+s27nCdaj5IJg=="
                    />
                    <input type="hidden" name="return_to" value="/time" />
                    <input type="hidden" name="of_user" value="4636614" />
                    <input type="hidden" name="submitted_date" value="155" />
                    <input
                      type="hidden"
                      name="submitted_date_year"
                      value="2023"
                    />
                    <input type="hidden" name="period_begin" value="149" />
                    <input
                      type="hidden"
                      name="period_begin_year"
                      value="2023"
                    />

                    <div className="test-approval-button">
                      <input
                        type="hidden"
                        name="from_timesheet_beta"
                        value="true"
                      />
                      <input type="hidden" name="from_screen" value="daily" />

                      <button
                        className="pds-button js-submit-link js-toggle-approve js-primary-approval-button test-resubmit-button"
                        type="button"
                        data-analytics-element-id="timesheet-submit-for-approval"
                        onClick={handleResubmitToggle}
                      >
                        Resubmit week for approval
                      </button>
                      <div
                        className="pds-card pds-card-warm-white pds-p-sm pds-flex-list pds-text-sm js-approval-confirmation"
                        hidden=""
                      >
                        Resubmit this timesheet for approval?
                        <button
                          className="pds-ml@md-sm pds-button pds-button-sm pds-button-primary js-submit"
                          type="submit"
                          data-analytics-element-id="timesheet-submit-for-approval-confirm"
                        >
                          Yes, resubmit timesheet
                        </button>
                        <button
                          className="pds-button pds-button-sm js-toggle-approve"
                          type="button"
                          data-analytics-element-id="timesheet-submit-for-approval-cancel"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>

                    <div
                      hidden=""
                      id="approval-disabled-tooltip"
                      className="pds-tooltip-sm"
                    >
                      Sorry, timesheet approval has been temporarily disabled.
                      Please try again in a few minutes.
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Timesheet;
