const BasePage = require("./base.page");

class HomePage extends BasePage {
    constructor() {
        super('https://cloud.google.com/');
    }

    get searchBar() { return $('.YSM5S') }
    get searchBarInput() { return $("input[class='qdOxv-fmcmS-wGMbrd']") }
}

module.exports = HomePage;