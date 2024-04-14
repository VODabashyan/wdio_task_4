class EmailForm {
    get emailField() { return $("//input[@id='input_620']") }
    get sendEmailButton() { return $("//button[normalize-space()='Send Email']") }

}

module.exports = EmailForm;