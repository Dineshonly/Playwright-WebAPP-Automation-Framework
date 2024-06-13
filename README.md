# Web App e2e Automation

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

# Playwright Local Setup Guide
# 1. Create a folder for source code:
   - Navigate to the any drive & Create a new folder named 'sourcecode'
# 2. Clone the repository using Visual Studio Code (VS Code):
- Open the Azure DevOps [Repo URL](https://github.com/Dineshonly/Playwright-WebAPP-Automation-Framework.git) in your web browser.
- Navigate to the 'Clone' option.
- Click on the 'Clone in VS Code' option using IDE dropdown.
- When prompted, save the repository in the previously created 'sourcecode' folder.
# 3. Playwright Installation:
- Once the repository is opened in VS Code.
- Click on 3 dots(Meatballs) menu option beside Run Menu.
- Click Terminal >> New Terminal.
- Run **npm install @playwright/test@latest**. 
# 4. To change the Test Environment:
- Locate and open the .env file.
- By default, it may have NODE_ENV=qa.
- Depending on the environment you wish to run the tests on, update the NODE_ENV value accordingly.
  - NODE_ENV=qa
  - NODE_ENV=uat
  - NODE_ENV=prod
# 5. To update or use different user credentials:
- For different environments, you'll have different configuration files:
   - config.qa.json for the QA environment.
   - config.uat.json for the UAT environment.
   - config.prod.json for the Production environment.
- Open the appropriate file and edit the username and password fields as needed.

# 6. Create Automation test scripts:
Create your Playwright test scripts for API automation in the /tests directory. You can use the provided example tests as a starting point.

   Create spec.js file to write Automation scripts : `src/tests/createBookingDetails.spec.js`

   ```bash
# Sample Code:

   ```
# 7. To run the Playwright tests, use the following command:
   ```bash
   npx playwright test
   ```
# 8. To run a specific test, use the following command:
   ```bash
   npx playwright test tests/createBookingDetails.spec.js
   ```
# 9. To see the execution reports:
   ```bash
   npx playwright show-report test-results\html
