class Estimate {

    get totalCost() { return $('//div[@class="cpc-cart-total"]/h2//b[contains(text(), "Total Estimated Cost")]') }
    get emailEstimateButton() { return $("//button[@id='Email Estimate']") }

}

module.exports = Estimate;