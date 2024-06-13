// LoginPage.js
//Importing the baseUrl from the config module
import baseUrl from '../../utils/loginUtils';

// Class representing a login page
class LoginPage {
    constructor(page) {
        this.page = page;
        this.userName = page.getByPlaceholder('User ID');
        this.passWord = page.getByPlaceholder('Password');
        this.signInButton = page.getByRole('button', { name: 'Login' });
    }

    async navigate() {
        await this.page.goto(baseUrl);
    }

    async enterCredentials(username, password) {
        await this.userName.waitFor();
        await this.userName.fill(username);
        await this.passWord.waitFor();
        await this.passWord.fill(password);
    }

    // Method to click the sign-in button
    async clickSubmit() {
        await this.signInButton.waitFor();
        await this.signInButton.click();
    }
}

export {LoginPage};