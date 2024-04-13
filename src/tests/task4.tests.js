const { pages, iframes } = require("./../po");

describe('web driver io task 3', async () => {
    beforeEach(async () => {
        await pages('home').open();
    });

    it('calculating the estimate', async () => {
        await pages('home').searchBar.click();
        await pages('home').searchBarInput.setValue('Google Cloud Platform Pricing Calculator');
        await browser.keys("\uE007");

        await pages('calculator').open();

        const iframe1 = await iframes('first').element;
        await iframe1.waitForExist();
        await browser.switchToFrame(iframe1);
        const iframe2 = await iframes('second').element;
        await iframe2.waitForExist();
        await browser.switchToFrame(iframe2);

        //Number of instances: 4
        await pages('calculator').computeEngine.click();
        await pages('calculator').numberOfInstancesInput.setValue(4);

        //Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or another User-Provided OS
        await pages('calculator').operatingSystemBar.click();
        const operatingSystemOption = await pages('calculator').operatingSystemOption;
        await operatingSystemOption.waitForClickable();
        await operatingSystemOption.click();

        //Provisioning model: Regular
        await pages('calculator').provisioningModelBar.click();
        const provisioningModelOption = await pages('calculator').provisioningModelOption;
        await provisioningModelOption.waitForClickable();
        await provisioningModelOption.click();

        //Machine Family: General purpose 
        await pages('calculator').machineFamilyBar.click();
        const machineFamilyOption = await pages('calculator').machineFamilyOption;
        await machineFamilyOption.waitForClickable();
        await machineFamilyOption.click();

        //Series: N1
        await pages('calculator').seriesBar.click();
        const seriesOption = await pages('calculator').seriesOption;
        await seriesOption.waitForClickable();
        await seriesOption.click();

        //Machine type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
        await pages('calculator').machineTypeBar.click();
        const machineTypeOption = await pages('calculator').machineTypeOption;
        await machineTypeOption.waitForClickable();
        await machineTypeOption.click();

        //Select “Add GPUs“
        await pages('calculator').addGpuToggle.click();

        //GPU type: NVIDIA Tesla V100
        await pages('calculator').GpuTypeBar.click();
        const GpuTypeOption = await pages('calculator').GpuTypeOption;
        await GpuTypeOption.waitForClickable();
        await GpuTypeOption.click();

        //Number of GPUs: 1
        await pages('calculator').numberOfGpusBar.click();
        const numberOfGpus = await pages('calculator').numberOfGpusOption;
        await numberOfGpus.waitForClickable();
        await numberOfGpus.click();

        //Local SSD: 2x375 Gb
        await pages('calculator').localSsdOBar.click();
        const localSsdOption = await pages('calculator').localSsdOption;
        await localSsdOption.waitForClickable();
        await localSsdOption.click();

        //Datacenter location: Frankfurt (europe-west3)
        //I selected Netherlands as NVIDIA Tesla V100 wasn't available for Frankfurt.
        await pages('calculator').datacenterLocationBar.click();
        const datacenterLocationOption = await pages('calculator').datacenterLocationOption;
        await datacenterLocationOption.waitForClickable();
        await datacenterLocationOption.click();

        //Committed usage: 1 Year
        await pages('calculator').committedUsageBar.click();
        const committedUsageOption = await pages('calculator').committedUsageOption;
        await committedUsageOption.waitForClickable();
        await committedUsageOption.click();

        //Click 'Add to Estimate'.
        const addToEstimateButton = await pages('calculator').addToEstimateButton;
        await addToEstimateButton.waitForClickable();
        await addToEstimateButton.click();

        //Check the price is calculated in the right section of the calculator. There is a line “Total Estimated Cost: USD ${amount} per 1 month” 
        const totalCost = pages('calculator').totalCost;
        await totalCost.isExisting();
        const totalCostAmount = await totalCost.getText();
        console.log(totalCostAmount);

        //Select 'EMAIL ESTIMATE'.
        const emailEstimateButton = await pages('calculator').emailEstimateButton;
        await emailEstimateButton.waitForClickable();
        await emailEstimateButton.click();

        //In a new tab, open https://yopmail.com/ or a similar temporary email–generating service.
        await pages('email').open();
        const adKiller = await $("body");
        await adKiller.doubleClick();

        //Generate a random email.
        const generateOption = await pages('email').generateOption;
        await generateOption.waitForClickable();
        await generateOption.click();

        //Copy the email generated in yopmail.com (or any other service).
        const copyEmail = await pages('email').copyEmail;
        await copyEmail.waitForClickable();
        await copyEmail.click();

        //Return to the calculator and enter the above email into the email field.
        await browser.switchWindow('cloud.google.com/products/calculator-legacy');
        const iframe3 = await browser.findElements('css selector', 'iframe')
        await browser.switchToFrame(iframe3[0]);
        const iframe4 = await browser.findElements('css selector', 'iframe')
        await browser.switchToFrame(iframe4[0]);
        const emailField = await pages('calculator').emailField;
        await emailField.waitForClickable();
        await emailField.click();
        await browser.keys(['Control', 'v', 'NULL']);

        //Select 'EMAIL ESTIMATE'.    
        const sendEmailButton = await pages('calculator').sendEmailButton;
        await sendEmailButton.waitForClickable();
        await sendEmailButton.click();

        //Wait for the cost estimate email and check that the emailed 'Total Estimated Monthly Cost' matches the result in the calculator.
        await browser.switchWindow('yopmail.com/');
        const checkInbox = await pages('email').checkInbox;
        await checkInbox.waitForClickable();
        await browser.pause(10000);
        await checkInbox.click();
        const iframe5 = await $('#ifmail');
        await iframe5.waitForExist();
        await browser.switchToFrame(iframe5);
        const emailAmount = await pages('email').emailAmount;;
        emailAmount.waitForExist();
        const emailCostAmount = await emailAmount.getText();
        console.log(emailCostAmount);
        //await expect(totalCostAmount).toHaveTextContaining(emailCostAmount);
        console.log(await totalCostAmount.includes(emailCostAmount));

        await browser.pause(1000)
    });
});