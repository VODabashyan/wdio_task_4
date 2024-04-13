class BaseComponent {
    constructor (elementSelector) {
        this.elementSelector = elementSelector;
    }

    get element() {
        return $(this.elementSelector)
    }
}

module.exports = BaseComponent;