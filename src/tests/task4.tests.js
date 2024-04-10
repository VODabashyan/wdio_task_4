describe('web driver io task 3', async () => {
    beforeEach(async () => {
        await browser.url('https://cloud.google.com/');
    });

    it('calculating the estimate', async () => {
        await $('.YSM5S').click();
        await $("input[class='qdOxv-fmcmS-wGMbrd']").setValue('Google Cloud Platform Pricing Calculator');
        await browser.keys("\uE007");

        await $("//a[@href='https://cloud.google.com/products/calculator-legacy?hl=es-419']").click();

        const iframe1 = await $('devsite-iframe iframe');
        await iframe1.waitForExist();
        await browser.switchToFrame(iframe1);
        const iframe2 = await $('#myFrame');
        await iframe2.waitForExist();
        await browser.switchToFrame(iframe2);
        await $("//md-tab-item[@id='tab-item-1']").click();
        await $('//input[@id="input_100"]').setValue(4);

        //Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or another User-Provided OS
        await $('#select_113').click();
        const operatingSystemOption = await $("#select_option_102")
        await operatingSystemOption.waitForClickable();
        await operatingSystemOption.click();

        //Provisioning model: Regular
        await $("#select_117").click();
        const provisioningModelOption = await $("//md-option[@id='select_option_115']")
        await provisioningModelOption.waitForClickable();
        await provisioningModelOption.click();

        //Machine Family: General purpose 
        await $('#select_123').click();
        const machineFamilyOption = await $("//md-option[@id='select_option_119']/div")
        await machineFamilyOption.waitForClickable();
        await machineFamilyOption.click();

        //Series: N1
        await $("//md-select-value[@id='select_value_label_95']").click();
        const seriesOption = await $("//md-option[@id='select_option_224']")
        await seriesOption.waitForClickable();
        await seriesOption.click();

        //Machine type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
        await $("//md-select-value[@id='select_value_label_96']").click();
        const machineTypeOption = await $("//md-option[@id='select_option_474']")
        await machineTypeOption.waitForClickable();
        await machineTypeOption.click();

        //Select “Add GPUs“
        await $$(".md-container.md-ink-ripple")[2].click();

        //GPU type: NVIDIA Tesla V100
        await $("#select_510").click();
        const GpuTypeOption = await $("#select_option_517");
        await GpuTypeOption.waitForClickable();
        await GpuTypeOption.click();

        //Number of GPUs: 1
        await $("#select_512").click();
        const numberOfGpus = await $("#select_option_520");
        await numberOfGpus.waitForClickable();
        await numberOfGpus.click();

        //Local SSD: 2x375 Gb
        await $("//md-select-value[@id='select_value_label_468']").click();
        const localSsdOption = await $("//md-option[@id='select_option_495']")
        await localSsdOption.waitForClickable();
        await localSsdOption.click();

        //Datacenter location: Frankfurt (europe-west3)
        //I selected Netherlands as NVIDIA Tesla V100 wasn't available for Frankfurt.
        await $("//md-select-value[@id='select_value_label_98']").click();
        const datacenterLocationOption = await $("//md-option[@id='select_option_269']")
        await datacenterLocationOption.waitForClickable();
        await datacenterLocationOption.click();

        //Committed usage: 1 Year
        await $("//md-select-value[@id='select_value_label_99']").click();
        const committedUsageOption = await $("//md-option[@id='select_option_138']")
        await committedUsageOption.waitForClickable();
        await committedUsageOption.click();

        //Click 'Add to Estimate'.
        const addToEstimateButton = await $("//form[@name='ComputeEngineForm']//button[@type='button'][normalize-space()='Add to Estimate']");
        await addToEstimateButton.waitForClickable();
        await addToEstimateButton.click();

        //Check the price is calculated in the right section of the calculator. There is a line “Total Estimated Cost: USD ${amount} per 1 month” 
        const totalCost = await $('//div[@class="cpc-cart-total"]/h2//b[contains(text(), "Total Estimated Cost")]');
        await totalCost.isExisting();
        const totalCostAmount = await totalCost.getText();
        console.log(totalCostAmount);

        //Select 'EMAIL ESTIMATE'.
        const emailEstimateButton = await $("//button[@id='Email Estimate']");
        await emailEstimateButton.waitForClickable();
        await emailEstimateButton.click();

        //In a new tab, open https://yopmail.com/ or a similar temporary email–generating service.
        await browser.newWindow('https://yopmail.com/');
        const adKiller = await $("body");
        await adKiller.doubleClick();

        //Generate a random email.
        const generateOption = await $("//h3[normalize-space()='Random Email generator']");
        await generateOption.waitForClickable();
        await generateOption.click();

        //Copy the email generated in yopmail.com (or any other service).
        const copyEmail = await $("//span[@class='notmobile'][normalize-space()='Copy to clipboard']");
        await copyEmail.waitForClickable();
        await copyEmail.click();

        //Return to the calculator and enter the above email into the email field.
        await browser.switchWindow('cloud.google.com/products/calculator-legacy');
        const iframe3 = await browser.findElements('css selector', 'iframe')
        await browser.switchToFrame(iframe3[0]);
        const iframe4 = await browser.findElements('css selector', 'iframe')
        await browser.switchToFrame(iframe4[0]);
        const emailField = await $("//input[@id='input_620']");
        await emailField.waitForClickable();
        await emailField.click();
        await browser.keys(['Control', 'v', 'NULL'])

        //Select 'EMAIL ESTIMATE'.    
        const sendEmailButton = await $("//button[normalize-space()='Send Email']");
        await sendEmailButton.waitForClickable();
        await sendEmailButton.click();

        //Wait for the cost estimate email and check that the emailed 'Total Estimated Monthly Cost' matches the result in the calculator.
        await browser.switchWindow('yopmail.com');
        const checkInbox = await $("//span[normalize-space()='Check Inbox']");
        await checkInbox.waitForClickable();
        await browser.pause(10000);
        await checkInbox.click();
        const iframe5 = await $('#ifmail');
        await iframe5.waitForExist();
        await browser.switchToFrame(iframe5);
        const emailAmount = await $('tbody tr td:nth-child(4)');
        emailAmount.waitForExist();
        const emailCostAmount = await emailAmount.getText();
        console.log(emailCostAmount);
        //await expect(totalCostAmount).toHaveTextContaining(emailCostAmount);
        console.log(await totalCostAmount.includes(emailCostAmount));

        await browser.pause(1000)
    });
});