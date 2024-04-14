const BasePage = require("./base.page");

class EmailPage extends BasePage {
    constructor() {
        super('https://dropmail.me/en/')
    }

    open() {
        return browser.newWindow(this.url);
    }

    get copyEmail() { return $("//span[@title='Copy to clipboard']") }
    get htmlDesignButton() { return $("//a[normalize-space()='HTML-design']") }
    get emailAmount() { return $("tr[class='odd'] td:nth-child(4)")} 

}

module.exports = EmailPage;