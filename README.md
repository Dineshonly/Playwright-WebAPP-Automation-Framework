# SNEDrive 2.0 Web App e2e Automation

[![Playwright](https://img.shields.io/badge/Powered%20by-Playwright-blueviolet)](https://playwright.dev/)

This project utilizes the Playwright framework for browser automation and testing using JavaScript and Node.js.

## Features

- **Automated Testing:** Playwright enables automated testing of the SNEDrive 2.0 Web App across multiple browsers to ensure functionality and reliability.
- **End-to-End Testing:** Write end-to-end tests that simulate real user interactions to validate the entire workflow of the SNEDrive 2.0 Web App.
- **Browser Compatibility:** Test the SNEDrive 2.0 Web App on different browsers such as Chrome, Firefox, and Safari to ensure consistent performance and user experience.

## Page Object Model

The SNEDrive 2.0 Web App e2e Automation project adopts the Page Object Model
(POM) for organizing and managing test automation code.
This pattern abstracts the web pages into reusable classes called "page objects"
that encapsulate the interaction with elements on specific pages.
Each page is represented by its own class, and tests interact with the page through its corresponding page object.

To create pages following the POM, refer to the [Playwright documentation](https://playwright.dev/docs/pom) for best practices.

## Getting Started

To get started with the SNEDrive 2.0s Web App e2e Automation and Playwright, follow these steps:

1. Write your Playwright test scripts for the SNEDrive 2.0 Web App in the `tests/` directory. You can use the example tests provided as a starting point.

   Example test: `src/tests/common/login/userLoginTemplate.js`

2. Set the environment value to `qa`, `uat`, or `prod` in the `.env` file.

   Example: `NODE_ENV=qa`

3. Run the Playwright tests using the following command:

   ```bash
   npx playwright test
   ```

    - **To run tests in the QA environment:** `npm run test:e2e:qa`
    - **To run tests in the QA environment with specific tags (e.g., @navigation):** `npm run test:tags:qa`
    - **To run tests in the UAT environment:** `npm run test:e2e:uat`
    - **To run tests in the production environment:** `npm run test:e2e:prod`

   To run a specific test, use the following command:

   ```
   npx playwright test path/to/your-test-file.spec.js
   ```
4. Run reports 
   ```bash 
   npx playwright show-report test-results\html