class BasePage {
    constructor(page) {
        this.page = page;
    }
    
    // Generic methods/Functions.
    async waitForPageLoad() {
        await this.page.waitForLoadState("load");
    }

}

export {BasePage};