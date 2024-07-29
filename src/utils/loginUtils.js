import {getConfig} from '../../config';
import {LoginPage} from '../pages/loginPage/loginPage';
import {BasePage} from '../pages/loginPage/basePage';
/**
 * Performs a login to the SNEDrive2.0 application.
 *
 * @param {Page} page - The Playwright Page object to perform the login on.
 *
 */
const performLogin = async (page) => {
    // Retrieve configuration data for the base URL and login credentials
    const { baseUrl, username, password } = getConfig();
  
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
  };
  
export { performLogin };