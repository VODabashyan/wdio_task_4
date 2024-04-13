const BasePage = require("./base.page");

class EmailPage extends BasePage {
    constructor() {
        super('https://yopmail.com/')
    }

    open() {
        return browser.newWindow(this.url);
    }

    get generateOption() { return $("//h3[normalize-space()='Random Email generator']") }
    get copyEmail() { return $("//span[@class='notmobile'][normalize-space()='Copy to clipboard']") }
    get checkInbox() { return $("//span[normalize-space()='Check Inbox']") }
    get emailAmount() { return $('tbody tr td:nth-child(4)') }

}

module.exports = EmailPage;