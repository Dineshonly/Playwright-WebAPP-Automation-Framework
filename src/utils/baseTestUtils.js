// Import the Playwright Test package, configuration, and LoginPage
import {getConfig} from './loginUtils';
import {LoginPage} from '../pages/loginPage/loginPage';
import {BasePage} from '../pages/loginPage/basePage';

// Login function for SNEDrive2.0
const performLogin = async (page) => {

    // Retrieve configuration data for the base URL and login credentials
    const {baseUrl, username, password } = getConfig();
    
    // Initialize the Page object
    const loginPage = new LoginPage(page);
    const basePage = new BasePage(page);

    // Navigate to the base URL
    await page.goto(baseUrl);

    // Wait for the page to load
    await basePage.waitForPageLoad();

    // Use the LoginPage object to enter login credentials and submit the form
    await loginPage.enterCredentials(username, password);
    await loginPage.clickSubmit();    
}

// Exporting performLogin
export {
    performLogin
};