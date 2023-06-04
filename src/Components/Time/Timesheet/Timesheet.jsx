import React from "react";
import "./Timesheet.css";

function Timesheet() {
  return (
    <div>
      <div
        id="toast"
        class="pds-container-sm pds-screen-only"
        role="alert"
      ></div>

      <main id="main" role="main" class="pds-pt-xl">
        <div class="pds-container js-timesheet-view">
          <div class="day-view-wrapper js-view-wrapper">
            <header class="day-view-header">
              <div class="js-flash-wrap"></div>

              <div class="js-timesheet-header">
                <div class="pds-flex-list pds-justify-between pds-gap-sm">
                  <div class="pds-flex-list pds-gap-sm">
                    <nav class="pds-button-toggle pds-screen-only">
                      <a
                        class="pds-button pds-button-icon js-navigate-by-url test-previous"
                        href="/time/day/2023/6/3/4636614"
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="19" y1="12" x2="5" y2="12"></line>
                          <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                      </a>
                      <a
                        class="pds-button pds-button-icon js-navigate-by-url test-next"
                        href="/time/day/2023/6/5/4636614"
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </nav>

                    <h1>
                      Today:
                      <span class="pds-weight-normal">Sunday, 04 Jun</span>
                      <span class="pds-weight-normal pds-text-lg pds-print-only">
                        (Timesheet for Suresh VadakkeMadom)
                      </span>
                    </h1>

                    <div class="pds-badge pds-badge-blue timesheet-approval-status">
                      Pending approval
                    </div>

                    <span class="form-loading loading-week pds-screen-only"></span>
                  </div>

                  <div class="pds-flex-list pds-screen-only">
                    <button
                      type="button"
                      id="calendar-button"
                      class="pds-button pds-button-icon"
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                      class="popover js-calendar-wrap"
                      aria-labelledby="calendar-button"
                      role="menu"
                      aria-hidden="true"
                    >
                      <div class="kalendae">
                        <div
                          class="k-calendar"
                          data-cal-index="0"
                          data-datestart="2023-06-01T12"
                        >
                          <div class="k-title k-disable-year-nav">
                            <a class="k-btn-previous-year"></a>
                            <a class="k-btn-previous-month"></a>
                            <a class="k-btn-next-year"></a>
                            <a class="k-btn-next-month"></a>
                            <span class="k-caption">June 2023</span>
                          </div>
                          <div class="k-header ">
                            <span data-day="0" class="">
                              Mo
                            </span>
                            <span data-day="1" class="">
                              Tu
                            </span>
                            <span data-day="2" class="">
                              We
                            </span>
                            <span data-day="3" class="">
                              Th
                            </span>
                            <span data-day="4" class="">
                              Fr
                            </span>
                            <span data-day="5" class="">
                              Sa
                            </span>
                            <span data-day="6" class="">
                              Su
                            </span>
                          </div>
                          <div class="k-days">
                            <span
                              class="k-out-of-month k-active"
                              data-date="2023-05-29T12"
                            >
                              29
                            </span>
                            <span
                              class="k-out-of-month k-active"
                              data-date="2023-05-30T12"
                            >
                              30
                            </span>
                            <span
                              class="k-out-of-month k-active"
                              data-date="2023-05-31T12"
                            >
                              31
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-01T12"
                            >
                              1
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-02T12"
                            >
                              2
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-03T12"
                            >
                              3
                            </span>
                            <span
                              class="k-selected k-in-month k-active k-today"
                              data-date="2023-06-04T12"
                            >
                              4
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-05T12"
                            >
                              5
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-06T12"
                            >
                              6
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-07T12"
                            >
                              7
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-08T12"
                            >
                              8
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-09T12"
                            >
                              9
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-10T12"
                            >
                              10
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-11T12"
                            >
                              11
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-12T12"
                            >
                              12
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-13T12"
                            >
                              13
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-14T12"
                            >
                              14
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-15T12"
                            >
                              15
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-16T12"
                            >
                              16
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-17T12"
                            >
                              17
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-18T12"
                            >
                              18
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-19T12"
                            >
                              19
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-20T12"
                            >
                              20
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-21T12"
                            >
                              21
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-22T12"
                            >
                              22
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-23T12"
                            >
                              23
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-24T12"
                            >
                              24
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-25T12"
                            >
                              25
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-26T12"
                            >
                              26
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-27T12"
                            >
                              27
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-28T12"
                            >
                              28
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-29T12"
                            >
                              29
                            </span>
                            <span
                              class="k-in-month k-active"
                              data-date="2023-06-30T12"
                            >
                              30
                            </span>
                            <span
                              class="k-out-of-month k-active"
                              data-date="2023-07-01T12"
                            >
                              1
                            </span>
                            <span
                              class="k-out-of-month k-active"
                              data-date="2023-07-02T12"
                            >
                              2
                            </span>
                            <span
                              class="k-out-of-month k-active"
                              data-date="2023-07-03T12"
                            >
                              3
                            </span>
                            <span
                              class="k-out-of-month k-active"
                              data-date="2023-07-04T12"
                            >
                              4
                            </span>
                            <span
                              class="k-out-of-month k-active"
                              data-date="2023-07-05T12"
                            >
                              5
                            </span>
                            <span
                              class="k-out-of-month k-active"
                              data-date="2023-07-06T12"
                            >
                              6
                            </span>
                            <span
                              class="k-out-of-month k-active"
                              data-date="2023-07-07T12"
                            >
                              7
                            </span>
                            <span
                              class="k-out-of-month k-active"
                              data-date="2023-07-08T12"
                            >
                              8
                            </span>
                            <span
                              class="k-out-of-month k-active"
                              data-date="2023-07-09T12"
                            >
                              9
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="pds-button-toggle">
                      <button
                        type="button"
                        class="pds-button pds-button-selected"
                        tabindex="-1"
                        title="Day View"
                        aria-label="Day view"
                        aria-disabled="true"
                      >
                        Day
                      </button>
                      <a
                        class="pds-button"
                        href="/time/week/2023/5/29/4636614"
                        aria-label="Week view"
                        data-analytics-element-id="timesheet-week-view"
                      >
                        Week
                      </a>
                    </div>
                    <div id="user-switcher" class="pds-inline-block">
                      <div class="pds-chosen pds-chosen-container pds-chosen-menu">
                        <button
                          class="pds-button pds-chosen-button pds-chosen-blank"
                          data-analytics-element-id="timesheet-teammates-switcher-select"
                        >
                          <div class="pds-chosen-selection">Teammates</div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            aria-label="Down chevron icon"
                            class="pds-flex-no-shrink"
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

            <div class="new-time-entry-container js-new-time-entry-container">
              {" "}
              <button
                type="button"
                class="pds-button pds-button-primary button-new-time-entry js-new-time-entry test-new-time-entry"
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>Track time</span>
              </button>
            </div>

            <div class="day-view-table">
              <div class="pds-tabs-wrapper pds-screen-only">
                <div class="pds-tabs" role="tablist">
                  <ul class="day-view-week-nav pds-gap-xs pds-screen-only pds-w-full js-week-nav">
                    {" "}
                    <li>
                      <button
                        type="button"
                        role="tab"
                        href="/time/day/2023/5/29/4636614"
                        aria-selected="false"
                        aria-controls="panel-0"
                        class="pds-tab pds-w-full test-Monday  is-not-today  "
                        data-analytics-element-id="timesheet-navigate-day-Monday"
                      >
                        <div>
                          M<span>on</span>
                        </div>
                        <div class="pds-text-sm">0:00</div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        role="tab"
                        href="/time/day/2023/5/30/4636614"
                        aria-selected="false"
                        aria-controls="panel-1"
                        class="pds-tab pds-w-full test-Tuesday  is-not-today  "
                        data-analytics-element-id="timesheet-navigate-day-Tuesday"
                      >
                        <div>
                          T<span>ue</span>
                        </div>
                        <div class="pds-text-sm">0:00</div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        role="tab"
                        href="/time/day/2023/5/31/4636614"
                        aria-selected="false"
                        aria-controls="panel-2"
                        class="pds-tab pds-w-full test-Wednesday  is-not-today  "
                        data-analytics-element-id="timesheet-navigate-day-Wednesday"
                      >
                        <div>
                          W<span>ed</span>
                        </div>
                        <div class="pds-text-sm">0:00</div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        role="tab"
                        href="/time/day/2023/6/1/4636614"
                        aria-selected="false"
                        aria-controls="panel-3"
                        class="pds-tab pds-w-full test-Thursday  is-not-today  has-completion-signal"
                        data-tooltip=""
                        data-tooltip-delay="500"
                        data-tooltip-hide-on-hover=""
                        aria-describedby="has-completion-signal-tooltip-Thursday"
                        data-analytics-element-id="timesheet-navigate-day-Thursday"
                      >
                        <div>
                          T<span>hu</span>
                        </div>
                        <div class="pds-text-sm">
                          5:00
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-label="You have time tracked on this day"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                        </div>
                      </button>
                      {/* <div
                        id="has-completion-signal-tooltip-Thursday"
                        class="pds-tooltip-sm"
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
                        href="/time/day/2023/6/2/4636614"
                        aria-selected="false"
                        aria-controls="panel-4"
                        class="pds-tab pds-w-full test-Friday  is-not-today  has-completion-signal"
                        data-tooltip=""
                        data-tooltip-delay="500"
                        data-tooltip-hide-on-hover=""
                        aria-describedby="has-completion-signal-tooltip-Friday"
                        data-analytics-element-id="timesheet-navigate-day-Friday"
                      >
                        <div>
                          F<span>ri</span>
                        </div>
                        <div class="pds-text-sm">
                          5:00
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-label="You have time tracked on this day"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                        </div>
                      </button>
                      {/* <div
                        id="has-completion-signal-tooltip-Friday"
                        class="pds-tooltip-sm"
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
                        href="/time/day/2023/6/3/4636614"
                        aria-selected="false"
                        aria-controls="panel-5"
                        class="pds-tab pds-w-full test-Saturday  is-not-today  "
                        data-analytics-element-id="timesheet-navigate-day-Saturday"
                      >
                        <div>
                          S<span>at</span>
                        </div>
                        <div class="pds-text-sm">0:00</div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        role="tab"
                        href="/time/day/2023/6/4/4636614"
                        aria-selected="true"
                        aria-controls="panel-6"
                        class="pds-tab pds-w-full test-Sunday pds-tab-selected is-today  "
                        data-analytics-element-id="timesheet-navigate-day-Sunday"
                      >
                        <div>
                          S<span>un</span>
                        </div>
                        <div class="pds-text-sm">0:00</div>
                      </button>
                    </li>
                    <li
                      id="day-view-week-nav-total"
                      class="pds-text-right pds-px-xs"
                    >
                      Week total
                      <div class="pds-text-sm test-week-total">10:00</div>
                    </li>
                  </ul>
                </div>
              </div>

              <table id="day-view-entries">
                <tbody
                  class="js-day-view-entry-list"
                  data-test-day="2023-06-04"
                  hidden=""
                ></tbody>
                <tfoot>
                  <tr class="day-view-summary js-day-view-summary" hidden="">
                    <td class="pds-text-right pds-weight-normal">Total:</td>
                    <td class="pds-text-right pds-weight-semi">0:00</td>
                    <td class="pds-screen-only"></td>
                  </tr>
                </tfoot>
              </table>

              <div
                id="timesheets-empty"
                class="pds-empty pds-position-relative js-empty-view"
              >
                <div class="pds-screen-only">
                  <div class="pds-py-xxl">
                    “If you need to, keep time on me.”
                    <br class="pds-show@md" aria-hidden="true" />– Fleet Foxes
                  </div>
                </div>

                <div class="pds-print-only">No time tracked for this week!</div>
              </div>

              <div class="pds-flex-list pds-justify-between pds-gap-sm pds-items-start pds-mt-md timesheet-bottom">
                <div class="js-timesheet-footer"></div>
                <div class="js-timesheet-approval">
                  <form
                    method="POST"
                    action="/daily/review"
                    class="button-and-confirmation"
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

                    <div class="test-approval-button">
                      <input
                        type="hidden"
                        name="from_timesheet_beta"
                        value="true"
                      />
                      <input type="hidden" name="from_screen" value="daily" />

                      <button
                        class="pds-button js-submit-link js-toggle-approve js-primary-approval-button test-resubmit-button"
                        type="button"
                        data-analytics-element-id="timesheet-submit-for-approval"
                      >
                        Resubmit week for approval
                      </button>
                      <div
                        class="pds-card pds-card-warm-white pds-p-sm pds-flex-list pds-text-sm js-approval-confirmation"
                        hidden=""
                      >
                        Resubmit this timesheet for approval?
                        <button
                          class="pds-ml@md-sm pds-button pds-button-sm pds-button-primary js-submit"
                          type="submit"
                          data-analytics-element-id="timesheet-submit-for-approval-confirm"
                        >
                          Yes, resubmit timesheet
                        </button>
                        <button
                          class="pds-button pds-button-sm js-toggle-approve"
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
                      class="pds-tooltip-sm"
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
