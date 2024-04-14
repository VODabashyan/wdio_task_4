const ComputeEngine = require("../components/computeengine.component");
const BasePage = require("./base.page");

class CalculatorPage extends BasePage {
    constructor() {
        super('https://cloud.google.com/products/calculator-legacy?hl=es-419');
        this.computeEngine = new ComputeEngine();
    }

    get totalCost() { return $('//div[@class="cpc-cart-total"]/h2//b[contains(text(), "Total Estimated Cost")]') }
    get emailEstimateButton() { return $("//button[@id='Email Estimate']") }
    
    //email form component
    get emailField() { return $("//input[@id='input_620']") }
    get sendEmailButton() { return $("//button[normalize-space()='Send Email']") }
}   

module.exports = CalculatorPage;