const ComputeEngine = require("../components/calculator/computeengine.component");
const Estimate = require("../components/calculator/estimate.component");
const BasePage = require("./base.page");

class CalculatorPage extends BasePage {
    constructor() {
        super('https://cloud.google.com/products/calculator-legacy?hl=es-419');
        this.computeEngine = new ComputeEngine();
        this.estimate = new Estimate();
    }
    
    //email form component
    get emailField() { return $("//input[@id='input_620']") }
    get sendEmailButton() { return $("//button[normalize-space()='Send Email']") }
}   

module.exports = CalculatorPage;