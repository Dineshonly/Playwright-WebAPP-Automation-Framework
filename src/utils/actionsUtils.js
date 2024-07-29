/**
 * A utility class for performing actions on a web page.
 */
class ActionsUtils {
    
    /**
     * Constructor.
     * @param {Page} page - The Puppeteer Page object.
     */
    constructor(page) {
        this.page = page;
    }

    /**
     * Moves the mouse over an element with the specified selector.
     * @param {string} selector - The CSS selector of the element.
     */
    async mouseOver(selector) {
        const elementHandle = await this.page.$(selector);
        if (!elementHandle) {
            throw new Error(`Element with selector ${selector} not found`);
        }
        await this.page.hover(elementHandle);
    }

    /**
     * Performs a drag-and-drop operation from an element with the source selector to an element with the target selector.
     * @param {string} sourceSelector - The CSS selector of the source element.
     * @param {string} targetSelector - The CSS selector of the target element.
     */
    async dragAndDrop(sourceSelector, targetSelector) {
        const source = await this.page.$(sourceSelector);
        if (!source) {
            throw new Error(`Element with selector ${sourceSelector} not found`);
        }
        const target = await this.page.$(targetSelector);
        if (!target) {
            throw new Error(`Element with selector ${targetSelector} not found`);
        }

        const sourceBox = await source.boundingBox();
        const targetBox = await target.boundingBox();

        await this.page.mouse.move(
            sourceBox.x + sourceBox.width / 2, 
            sourceBox.y + sourceBox.height / 2
        );
        await this.page.mouse.down();
        await this.page.mouse.move(
            targetBox.x + targetBox.width / 2, 
            targetBox.y + targetBox.height / 2
        );
        await this.page.mouse.up();
    }

    /**
     * Performs a right-click on an element with the specified selector.
     * @param {string} selector - The CSS selector of the element.
     */
    async rightClick(selector) {
        const elementHandle = await this.page.$(selector);
        if (!elementHandle) {
            throw new Error(`Element with selector ${selector} not found`);
        }
        await this.page.click(elementHandle, { button: 'right' });
    }

    /**
     * Performs a double-click on an element with the specified selector.
     * @param {string} selector - The CSS selector of the element.
     */
    async doubleClick(selector) {
        const elementHandle = await this.page.$(selector);
        if (!elementHandle) {
            throw new Error(`Element with selector ${selector} not found`);
        }
        await this.page.dblclick(elementHandle);
    }

    /**
     * Attempts to click an element with the specified selector up to a specified number of retries, with a delay between attempts.
     * @param {string} selector - The CSS selector of the element.
     * @param {number} retries - The number of retries (default: 3).
     * @param {number} delay - The delay between attempts in milliseconds (default: 1000).
     */
    async clickWithRetry(selector, retries = 3, delay = 1000) {
        for (let i = 0; i < retries; i++) {
            try {
                await this.page.click(selector);
                return; 
            } catch (error) {
                console.log(`Click failed. Retrying... Attempt ${i + 1}/${retries}`);
                if (i < retries - 1) { 
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
            }
        }
        throw new Error(`Unable to click element ${selector} after ${retries} attempts.`);
    }

    /**
    * Scrolls to an element on the page.
    * @param {string|Object} elementLocator - The element locator, either a CSS selector or a Playwright Locator object.
    */
    async scrollToElement(elementLocator) {
        if (typeof elementLocator === "string") {
            const element = await this.page.locator(elementLocator);
            await element.scrollIntoViewIfNeeded();
        } else if (elementLocator instanceof Object && elementLocator.locator) {
            await elementLocator.scrollIntoViewIfNeeded();
        } else {
            throw new Error("Invalid element locator format");
        }
    }
}

export default ActionsUtils;