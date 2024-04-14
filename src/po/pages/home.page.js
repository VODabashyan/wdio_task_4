const TopMenuComponent = require("../components/calculator/topmenu.component");
const BasePage = require("./base.page");

class HomePage extends BasePage {
    constructor() {
        super('https://cloud.google.com/');
        this.topMenu = new TopMenuComponent();
    }

    get searchBar() { return $('.YSM5S') }
    get searchBarInput() { return $("input[class='qdOxv-fmcmS-wGMbrd']") }
}

module.exports = HomePage;