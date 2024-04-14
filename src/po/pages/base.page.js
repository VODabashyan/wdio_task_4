const SearchBar = require("../components/common/searchbar.component");

class BasePage {

    constructor(url) {
        this.url = url;
        this.searchBar = new SearchBar();
    }

    open() {
        return browser.url(this.url);
    }
}
module.exports = BasePage;