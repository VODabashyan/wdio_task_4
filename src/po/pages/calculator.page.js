const BasePage = require("./base.page");

class CalculatorPage extends BasePage {
    constructor() {
        super('https://cloud.google.com/products/calculator-legacy?hl=es-419');
    }

    get numberOfInstancesInput() { return $('//input[@id="input_100"]') }
    get operatingSystemBar() { return $('#select_113') }
    get operatingSystemOption() { return $("#select_option_102") }
    get provisioningModelBar() { return $("#select_117") }
    get provisioningModelOption() { return $("//md-option[@id='select_option_115']") }
    get machineFamilyBar() { return $('#select_123') }
    get machineFamilyOption() { return $("//md-option[@id='select_option_119']/div") }
    get seriesBar() { return $("//md-select-value[@id='select_value_label_95']") }
    get seriesOption() { return $("//md-option[@id='select_option_224']") }
    get machineTypeBar() { return $("//md-select-value[@id='select_value_label_96']") }
    get machineTypeOption() { return $("//md-option[@id='select_option_474']") }
    get addGpuToggle() { return $$(".md-container.md-ink-ripple")[2] }
    get GpuTypeBar() { return $("#select_510") }
    get GpuTypeOption() { return $("#select_option_517") }
    get numberOfGpusBar() { return $("#select_512") }
    get numberOfGpusOption() { return $("#select_option_520") }
    get localSsdOBar() { return $("//md-select-value[@id='select_value_label_468']") }
    get localSsdOption() { return $("//md-option[@id='select_option_495']") }
    get datacenterLocationBar() { return $("//md-select-value[@id='select_value_label_98']") }
    get datacenterLocationOption() { return $("//md-option[@id='select_option_269']") }
    get committedUsageBar() { return $("//md-select-value[@id='select_value_label_99']") }
    get committedUsageOption() { return $("//md-option[@id='select_option_138']") }
    get addToEstimateButton() { return $("//form[@name='ComputeEngineForm']//button[@type='button'][normalize-space()='Add to Estimate']") }
    get totalCost() { return $('//div[@class="cpc-cart-total"]/h2//b[contains(text(), "Total Estimated Cost")]') }
    get emailEstimateButton() { return $("//button[@id='Email Estimate']") }
    
    //email form component
    get emailField() { return $("//input[@id='input_620']") }
    get sendEmailButton() { return $("//button[normalize-space()='Send Email']") }

    //Top menu component 
    get computeEngine() { return $("//md-tab-item[@id='tab-item-1']") }
}   

module.exports = CalculatorPage;