const BasePage = require("./base.page");

class HomePage extends BasePage {
    constructor() {
        super('https://cloud.google.com/');
    }

    get iframe1() { return $('devsite-iframe iframe') }
}

module.exports = HomePage;