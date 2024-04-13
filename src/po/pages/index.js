const HomePage = require("./home.page");
const CalculatorPage = require("./calculator.page");
const EmailPage = require("./email.page");

function pages(name) {
    const items = {
        home: new HomePage(),
        calculator: new CalculatorPage(),
        email: new EmailPage()
    }

    return items[name.toLowerCase()];
}

module.exports = {HomePage, CalculatorPage, EmailPage, pages}