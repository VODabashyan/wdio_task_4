const EmailFormIframe = require("./email.form.iframe");
const EmailGeneratorIframe = require("./email.generator.iframe");
const FirstIframe = require("./first.iframe");
const SecondIframe = require("./second.iframe");

function iframes(name) {
    const items = {
        first: new FirstIframe(),
        second: new SecondIframe(),
        emailForm: new EmailFormIframe(),
        emailGenerator: new EmailGeneratorIframe()
    }

    return items[name.toLowerCase()];
}

module.exports = {FirstIframe, SecondIframe, EmailFormIframe, EmailGeneratorIframe, iframes}