const BaseComponent = require("../../base.component");

class EmailFormIframe extends BaseComponent {
    constructor() {
        super('iframe');
    }

    get element() {
        return browser.findElements('css selector', 'iframe');
    }
}

module.exports = EmailFormIframe;