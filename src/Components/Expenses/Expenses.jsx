import React from "react";
import "../../Components/Expenses/expenses.css";
function Expenses() {
  return (
    <>
      <main id="main" role="main" class="pds-pt-xl">
        <div class="pds-container js-expense-view-wrapper">
          <header class="pds-mb-lg">
            <h1 class="pds-mb-md">
              Expenses
              <span class="pds-print-only"> for black panther</span>
            </h1>
            <div class="pds-flex pds-justify-between pds-screen-only">
              <button
                type="button"
                class="pds-button pds-button-primary js-show-add-form"
                data-analytics-element-id="expenses-new"
                aria-disabled="false"
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
                  aria='{:hidden=>"true"}'
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Track expenses
              </button>
              <div
                hidden=""
                id="expense-invoiced-tooltip"
                class="pds-tooltip-sm"
              >
                This expense was invoiced and cannot be marked as non-billable.
              </div>
              <div id="user-switcher">
                <input type="hidden" name="users" value="" />
                <div class="pds-chosen pds-chosen-container pds-chosen-menu">
                  <button class="pds-button pds-chosen-button pds-chosen-blank">
                    <div class="pds-chosen-selection">Teammates</div>
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
                      class="pds-flex-no-shrink"
                      aria-hidden="true"
                    >
                      <polyline points="5 9 12 17 19 9"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="expenses-add-form pds-mt-lg pds-screen-only js-add-expense-form"></div>
          </header>

          <div class="js-expense-weeks-container">
            <div class="pds-empty pds-position-relative">
              <img
                src="https://cache.harvestapp.com/static/illustrations/expense_onboard-AAC9C67E.png"
                srcset="https://cache.harvestapp.com/static/illustrations/expense_onboard@2x-3E90EEDB.png 2x"
                width="249"
                height="200"
                alt=""
                class="pds-mb-lg"
                aria-hidden="true"
              />
              <div>
                Record those airline tickets, meals, miles, and other expenses
                in Harvest
                <br class="pds-show@md" aria-hidden="true" />
                so you can more accurately budget projects and invoice clients.
              </div>
            </div>
          </div>

          <div
            class="expenses-show-more-container more-to-show js-expense-show-more-container"
            hidden=""
          >
            <button
              type="button"
              class="pds-button js-show-more"
              data-analytics-element-id="expenses-show-more"
            >
              Show more expenses
            </button>
            <span class="hui-spinner js-show-more-spinner" hidden="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="hui-spin"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <circle cx="8" cy="2" r="2"></circle>
                <circle cx="4" cy="4" r="2" opacity=".75"></circle>
                <circle cx="2" cy="8" r="2" opacity=".5"></circle>
                <circle cx="4" cy="12" r="2" opacity=".25"></circle>
              </svg>
              Loading…
            </span>
          </div>
        </div>
      </main>
    </>
  );
}

export default Expenses;
