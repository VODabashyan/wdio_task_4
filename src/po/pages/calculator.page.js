const TopMenuComponent = require("../components/calculator/topmenu.component");
const ComputeEngine = require("../components/calculator/computeengine.component");
const EmailForm = require("../components/calculator/emailform.component");
const Estimate = require("../components/calculator/estimate.component");
const BasePage = require("./base.page");

class CalculatorPage extends BasePage {
    constructor() {
        super('https://cloud.google.com/products/calculator-legacy?hl=es-419');
        this.topMenu = new TopMenuComponent();
        this.computeEngine = new ComputeEngine();
        this.estimate = new Estimate();
        this.emailForm = new EmailForm();
    }

    get iframe2() { return $('#myFrame') }
    get iframe3() { return browser.findElements('css selector', 'iframe') }
}   

module.exports = CalculatorPage;