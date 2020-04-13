
describe('Patients', function () {
    var navLoginButton = element(by.id('login'));
    var navLogoutButton = element(by.id('logout'));
    var navPatientList = element(by.id('patientList'));
    var navTitle = element(by.id('title'));
    var navProfile = element(by.id('profile'));
    var patient = element(by.id('patient'));
    var navHome = element(by.id('home'));

    //patientPage
    var addAge = element(by.id('addAge'));
    var addFluidCalculator = element(by.id('addFluidCalculator'));
    var addFluidChoice = element(by.id('addFluidChoice'));
    var addFluidInput = element(by.id('addFluidInput'));
    var addFluidOutput = element(by.id('addFluidOutput'));
    var addOtherAssessments = element(by.id('addOtherAssessments'));
    var addRecordBloodSugar = element(by.id('addRecordBloodSugar'));

    var reviewAge = element(by.id('mat-expansion-panel-header-0'));
    var reviewFluidCalculator = element(by.id('mat-expansion-panel-header-1'));
    var reviewFluidChoice = element(by.id('mat-expansion-panel-header-2'));
    var reviewFluidInput = element(by.id('mat-expansion-panel-header-3'));
    var reviewFluidOutput = element(by.id('mat-expansion-panel-header-4'));
    var reviewFluidBalance = element(by.id('mat-expansion-panel-header-5'));
    var reviewOtherAssessments = element(by.id('mat-expansion-panel-header-6'));
    var reviewRecordBloodSugar = element(by.id('mat-expansion-panel-header-7'));

    var ageTitle = element(by.id('ageTitle'));
    var weightTitle = element(by.id('weightTitle'));
    var treatmentTitle = element(by.id('treatmentTitle'));
    var inputTitle = element(by.id('inputTitle'));
    var outputTitle = element(by.id('outputTitle'));
    var overallTitle = element(by.id('overallTitle'));
    var vipTitle = element(by.id('vipTitle'));
    var bloodSugarTitle = element(by.id('bloodSugarTitle'));

    var abal = element(by.id('abal'));
    var dbal = element(by.id('dbal'));
    var bal = element(by.id('bal'));
    var startofShift = element(by.id('startofShift'));

    var signature = element(by.id('signature'));
    var submit = element(by.id('submit'));
    var returnButton = element(by.id('return'));
    var noSubmit = element(by.id('noSubmit'));

    //agePage
    var age = element(by.id('age'));
    var child = element(by.id('child'));
    var neonate = element(by.id('neonate'));

    //fluidCalculatorPage
    var weight = element(by.id('weight'));
    var measured = element(by.id('m0'));
    var recent = element(by.id('r1'));
    var estimate = element(by.id('e2'));
    var yes = element(by.id('yes'));
    var no = element(by.id('no'));
    var IV0 = element(by.id('IV0'));
    var IV1 = element(by.id('IV1'));
    var IV2 = element(by.id('IV2'));
    var IV3 = element(by.id('IV3'));
    var IV4 = element(by.id('IV4'));
    var FB0 = element(by.id('FB0'));
    var FB1 = element(by.id('FB1'));
    var FB2 = element(by.id('FB2'));
    var FB3 = element(by.id('FB3'));
    var FB4 = element(by.id('FB4'));
    var PD0 = element(by.id('PD0'));
    var PD1 = element(by.id('PD1'));
    var PD2 = element(by.id('PD2'));
    var PD3 = element(by.id('PD3'));
    var commentAmount = element(by.id('commentAmount'));
    var measurement = element(by.id('measurement'));
    var ueButton = element(by.id('ueAvailable'));
    var reasonIV = element(by.id('reasonIvFluids'));
    var amount = element(by.id('amount'));
    var percentage = element(by.id('percentageDehydration'));

    //fluidChoicePage
    var electrolyes = element(by.id('electrolytesAvailable'));
    var e0 = element(by.id('e0'));
    var e1 = element(by.id('e1'));
    var serumSodium = element(by.id('serumSodiumRange'));
    var ss0 = element(by.id('ss0'));
    var ss1 = element(by.id('ss1'));
    var ss2 = element(by.id('ss2'));
    var serumPotasium = element(by.id('serumPotasiumRange'));
    var sp0 = element(by.id('sp0'));
    var sp1 = element(by.id('sp1'));
    var sp2 = element(by.id('sp2'));
    var ivFluid = element(by.id('ivFluidType'));
    var iv0 = element(by.id('iv0'));
    var iv1 = element(by.id('iv1'));
    var iv2 = element(by.id('iv2'));
    var iv3 = element(by.id('iv3'));
    var iv4 = element(by.id('iv4'));
    var iv5 = element(by.id('iv5'));
    var iv6 = element(by.id('iv6'));
    var iv7 = element(by.id('iv7'));
    var iv8 = element(by.id('iv8'));
    var iv9 = element(by.id('iv9'));
    var iv10 = element(by.id('iv10'));
    var iv11 = element(by.id('iv11'));
    var iv12 = element(by.id('iv12'));
    var iv13 = element(by.id('iv13'));
    var iv14 = element(by.id('iv14'));
    var iv15 = element(by.id('iv15'));
    var iv16 = element(by.id('iv16'));
    var iv17 = element(by.id('iv17'));
    var ivFluidVol = element(by.id('ivFluidVolume'));
    var ivv0 = element(by.id('ivv0'));
    var ivv1 = element(by.id('ivv1'));
    var ivv2 = element(by.id('ivv2'));
    var ivv3 = element(by.id('ivv3'));
    var sampleObtained = element(by.id('sampleObtained'));
    var so0 = element(by.id('so0'));
    var so1 = element(by.id('so1'));
    var ivvComment = element(by.id('ivFluidVolumeComment'));

    //fluidInputPage
    var fluidInput = element(by.id('fluidInput'));
    var fi0 = element(by.id('fi0'));
    var fi1 = element(by.id('fi1'));
    var fi2 = element(by.id('fi2'));
    var fi3 = element(by.id('fi3'));
    var fi4 = element(by.id('fi4'));
    var volInput = element(by.id('volInput'));

    //fluidOutputPage
    var fluidOutput = element(by.id('fluidOutput'));
    var fo0 = element(by.id('fo0'));
    var fo1 = element(by.id('fo1'));
    var fo2 = element(by.id('fo2'));
    var fo3 = element(by.id('fo3'));
    var volOutput = element(by.id('volOutput'));

    //otherAssessmentsPage
    var vipScore = element(by.id('vipScore'));
    var vip0 = element(by.id('vip0'));
    var vip1 = element(by.id('vip1'));
    var vip2 = element(by.id('vip2'));
    var vip3 = element(by.id('vip3'));
    var vip4 = element(by.id('vip4'));
    var vip5 = element(by.id('vip5'));

    //recordBloodSugarPage
    var bloodSugarLev = element(by.id('bloodSugarLevel'));
    var clinicalComment = element(by.id('clinicalComment'));
    var cc0 = element(by.id('cc0'));
    var cc1 = element(by.id('cc1'));
    var cc2 = element(by.id('cc2'));
    var cc3 = element(by.id('cc3'));
    var cc4 = element(by.id('cc4'));
    var cc5 = element(by.id('cc5'));
    var cc6 = element(by.id('cc6'));
    var cc7 = element(by.id('cc7'));
    var cc8 = element(by.id('cc8'));
    var comment = element(by.id('comment'));

    //discontinue
    var stopDisabled = element(by.id('stopDisabled'));
    var stop = element(by.id('stop'));
    var form1 = element(by.id('form1'));
    var form2 = element(by.id('form2'));


    beforeEach(function () {
        browser.get('http://localhost:4200/');
    });

    function getTitle(title) {
        expect(navTitle.getText()).toEqual(title);
    };

    function loginButton() {
        navLoginButton.click();
        var currentUrl = browser.driver.getCurrentUrl();
        expect(currentUrl).toContain('https://dev-2af4g5mu.eu.auth0.com/login');
    };

    function logoutButton() {
        navLogoutButton.click();
        var currentUrl = browser.driver.getCurrentUrl();
        expect(currentUrl).toContain('http://localhost:4200');
    };

    function patientListButton() {
        navPatientList.click();
        var currentUrl = browser.driver.getCurrentUrl();
        expect(currentUrl).toContain('http://localhost:4200/patients');
    };

    function profileButton() {
        navProfile.click();
        var currentUrl = browser.driver.getCurrentUrl();
        expect(currentUrl).toContain('http://localhost:4200/profile');
    };

    function homeButton() {
        navHome.click();
        var currentUrl = browser.driver.getCurrentUrl();
        expect(currentUrl).toContain('http://localhost:4200');
    };

    function clickPatient() {
        navPatientList.click();
        patient.click();
        var currentUrl = browser.driver.getCurrentUrl();
        expect(currentUrl).toContain('http://localhost:4200/patient/');
        getTitle("Patient Details")
    };

    function getReview(button, title, titleText) {
        clickPatient();
        button.click();
        expect(title.getText()).toEqual(titleText);
    };

    function addAges(button) {
        clickPatient();
        addAge.click();
        getTitle("Age");
        age.click();
        button.click();
        signature.sendKeys(".test.");
        browser.executeScript("arguments[0].scrollIntoView();", submit);
        submit.click();
        getTitle("Patient Details");
    };

    function addAgesErr() {
        clickPatient();
        addAge.click();
        getTitle("Age");
        signature.sendKeys(".test.");
        browser.executeScript("arguments[0].scrollIntoView();", noSubmit);
        expect(noSubmit.isPresent()).toBe(true);
    };

    function addFluidCalculators(kg, option, ueOption, IvOption, fbOption, pdOption) {
        clickPatient();
        addFluidCalculator.click();
        getTitle("Fluid Calculator");
        weight.sendKeys(kg);
        measurement.click();
        option.click();
        ueButton.click();
        ueOption.click();
        reasonIV.click();
        IvOption.click();
        amount.click();
        fbOption.click();
        percentage.click();
        pdOption.click();
        commentAmount.sendKeys("test");
        signature.sendKeys(".test.");
        browser.executeScript("arguments[0].scrollIntoView();", submit);
        submit.click();
        getTitle("Patient Details");
    };

    function addFluidCalculatorsErr(kg, option, ueOption, IvOption, fbOption, pdOption) {
        clickPatient();
        addFluidCalculator.click();
        getTitle("Fluid Calculator");
        weight.sendKeys(kg);
        measurement.click();
        option.click();
        ueButton.click();
        ueOption.click();
        reasonIV.click();
        IvOption.click();
        amount.click();
        fbOption.click();
        percentage.click();
        pdOption.click();
        commentAmount.sendKeys("test");
        signature.sendKeys(".test.");
        browser.executeScript("arguments[0].scrollIntoView();", noSubmit);
        expect(noSubmit.isPresent()).toBe(true);
    };

    function FluidChoice(title, eoption, ssoption, spoption, ivoption, ivvoption, sooption, ivvcomment, signaturestring) {
        clickPatient();
        addFluidChoice.click();
        getTitle(title);
        electrolyes.click();
        eoption.click();
        serumSodium.click();
        ssoption.click();
        serumPotasium.click();
        spoption.click();
        ivFluid.click();
        ivoption.click();
        ivFluidVol.click();
        ivvoption.click();
        sampleObtained.click();
        sooption.click();
        ivvComment.sendKeys(ivvcomment);
        signature.sendKeys(signaturestring);
        browser.executeScript("arguments[0].scrollIntoView();", submit);
        submit.click();
        getTitle("Patient Details");
    }

    function FluidChoiceErr(title, eoption, ssoption, ivoption, ivvoption, sooption, ivvcomment, signaturestring) {
        clickPatient();
        addFluidChoice.click();
        getTitle(title);
        electrolyes.click();
        eoption.click();
        serumSodium.click();
        ssoption.click();
        ivFluid.click();
        ivoption.click();
        ivFluidVol.click();
        ivvoption.click();
        sampleObtained.click();
        sooption.click();
        ivvComment.sendKeys(ivvcomment);
        signature.sendKeys(signaturestring);
        browser.executeScript("arguments[0].scrollIntoView();", noSubmit);
        expect(noSubmit.isPresent()).toBe(true);
    }

    function FluidInput(title, fioption, vol, signatureString) {
        clickPatient();
        addFluidInput.click();
        getTitle(title);
        fluidInput.click();
        fioption.click();
        volInput.sendKeys(vol);
        signature.sendKeys(signatureString);
        browser.executeScript("arguments[0].scrollIntoView();", submit);
        submit.click();
        getTitle("Patient Details");
    }

    function FluidInputErr(title, fioption, vol, signatureString) {
        clickPatient();
        addFluidInput.click();
        getTitle(title);
        fluidInput.click();
        fioption.click();
        volInput.sendKeys(vol);
        signature.sendKeys(signatureString);
        browser.executeScript("arguments[0].scrollIntoView();", noSubmit);
        expect(noSubmit.isPresent()).toBe(true);
    }

    function FluidOutput(title, fooption, vol, signatureString) {
        clickPatient();
        addFluidOutput.click();
        getTitle(title);
        fluidOutput.click();
        fooption.click();
        volOutput.sendKeys(vol);
        signature.sendKeys(signatureString);
        browser.executeScript("arguments[0].scrollIntoView();", submit);
        submit.click();
        getTitle("Patient Details");
    }

    function FluidOutputErr(title, fooption, vol, signatureString) {
        clickPatient();
        addFluidOutput.click();
        getTitle(title);
        fluidOutput.click();
        fooption.click();
        volOutput.sendKeys(vol);
        signature.sendKeys(signatureString);
        browser.executeScript("arguments[0].scrollIntoView();", noSubmit);
        expect(noSubmit.isPresent()).toBe(true);
    }

    function OtherAssessment(title, vipoption, signatureString) {
        clickPatient();
        addOtherAssessments.click();
        getTitle(title);
        vipScore.click();
        vipoption.click();
        signature.sendKeys(signatureString);
        browser.executeScript("arguments[0].scrollIntoView();", submit);
        submit.click();
        getTitle("Patient Details");
    }

    function RecordBloodSugar(title, level, coption, com, signatureString) {
        clickPatient();
        addRecordBloodSugar.click();
        getTitle(title);
        bloodSugarLev.sendKeys(level);
        clinicalComment.click();
        coption.click();
        comment.sendKeys(com);
        signature.sendKeys(signatureString);
        browser.executeScript("arguments[0].scrollIntoView();", submit);
        submit.click();
        getTitle("Patient Details");
    }

    function RecordBloodSugarErr(title, level, coption, com, signatureString) {
        clickPatient();
        addRecordBloodSugar.click();
        getTitle(title);
        bloodSugarLev.sendKeys(level);
        clinicalComment.click();
        coption.click();
        comment.sendKeys(com);
        signature.sendKeys(signatureString);
        browser.executeScript("arguments[0].scrollIntoView();", noSubmit);
        expect(noSubmit.isPresent()).toBe(true);
    }

    function discontinue(signatureString) {
        getReview(reviewFluidChoice, treatmentTitle, "Treatment");
        expect(stop.isPresent()).toBe(true);
        stop.click();
        signature.sendKeys(signatureString);
        browser.executeScript("arguments[0].scrollIntoView();", submit);
        submit.click();
        getTitle("Patient Details");
    }

    it('should have a Title', function () {
        getTitle('Home');
    });

    it('login button should bring up login', function () {
        loginButton();
    });

    it('patient list button to patient list', function () {
        patientListButton();
    });

    it('Profile button to Profile page', function () {
        profileButton();
    });

    it('logout button to home', function () {
        logoutButton();
    });

    it('home button to home', function () {
        profileButton();
        homeButton();
    });

    // it('login', function () {
    //     navLoginButton.click();
    //     login.click();
    //     patientList.click();
    //     var currentUrl = browser.driver.getCurrentUrl();
    //     expect(currentUrl).toContain('http://localhost:4200/patients');


    // 	browser.driver.wait(function() {
    // 		return browser.driver.isElementPresent(navLoginButton); 
    //     }, 5000);

    //     browser.waitForAngularEnabled(false);

    //     navLoginButton.click();
    //     console.log('Clicked');

    //     //check if email field exists to see if the pop-up has been succesfully loaded

    //     browser.driver.findElement(by.id('a0-signin_easy_email')).sendKeys('llg-1998@hotmail.co.uk');
    //     browser.driver.findElement(by.id('a0-signin_easy_password')).sendKeys('Lalougil97');
    //     browser.driver.findElement(by.css('.a0-notloggedin .a0-primary')).click();

    //     //verify that the login was succesfull by checking if the logout button is displayed
    // 	browser.waitForAngularEnabled(true);
    // 	browser.driver.wait(function() {
    // 		return browser.driver.isElementPresent(navLogoutButton); 
    // 	}, 5000);

    // });


    it('add fluidCalculator', function () {
        addFluidCalculators("40.0", measured, yes, IV0, FB0, PD0)
    });

    it('add fluidCalculator no decimal', function () {
        addFluidCalculators("40", recent, no, IV1, FB1, PD1)
    });
    it('add fluidChoice', function () {
        FluidChoice("Fluid Choice", e0, ss0, sp0, iv0, ivv0, so0, "test", ".test.");
    });
    it('add fluidInput', function () {
        FluidInput("Fluid Input", fi0, "200", ".test.");
    });
    it('add fluidOutput', function () {
        FluidOutput("Fluid Output", fo0, "300", ".test.");
    });

    // Reviews

    it('click on first patient', function () {
        clickPatient();
    });

    it('review age', function () {
        getReview(reviewAge, ageTitle, "Age");
    });

    it('review fluidCalculator', function () {
        getReview(reviewFluidCalculator, weightTitle, "Weight");
    });

    it('review fluidChoice', function () {
        getReview(reviewFluidChoice, treatmentTitle, "Treatment");
    });

    it('review fluidInput', function () {
        getReview(reviewFluidInput, inputTitle, "Fluid Input Type");
    });

    it('review fluidOutput', function () {
        getReview(reviewFluidOutput, outputTitle, "Fluid Output Type");
    });

    it('review fluidBalance', function () {
        getReview(reviewFluidBalance, overallTitle, "Overall Input");
    });

    it('review otherAssessments', function () {
        getReview(reviewOtherAssessments, vipTitle, "VipScore");
    });

    it('review RecordBloodSugar', function () {
        getReview(reviewRecordBloodSugar, bloodSugarTitle, "BloodSugarLevel");
    });

    //NewShift

    it('new Shift', function () {
        navPatientList.click();
        startofShift.click();
        clickPatient();
        reviewFluidBalance.click();
        expect(abal.getText()).toEqual("0");
        expect(dbal.getText()).toEqual("0");
        expect(bal.getText()).toEqual("0");
    });

    //Add Age

    it('add age child', function () {
        addAges(child);
    });

    it('add age neonate', function () {
        addAges(neonate);
    });

    it('add age no input', function () {
        addAgesErr();
    });


    // fluidCalculator


    it('add fluidCalculator numbers and letters', function () {
        addFluidCalculatorsErr("40.0a", estimate, yes, IV2, FB2, PD2)
    });

    it('add fluidCalculator letters only', function () {
        addFluidCalculatorsErr("abc", measured, yes, IV0, FB0, PD0)
    });

    //fluidChoice


    it('add fluidChoice leave one out', function () {
        FluidChoiceErr("Fluid Choice", e1, ss1, iv1, ivv1, so1, "test", ".test.");
    });

    // fluidInput


    it('add fluidInput decimal', function () {
        FluidInputErr("Fluid Input", fi1, "200.00", ".test.");
    });

    it('add fluidInput letters and numbers', function () {
        FluidInputErr("Fluid Input", fi2, "200a", ".test.");
    });

    it('add fluidInput letters', function () {
        FluidInputErr("Fluid Input", fi3, "abc", ".test.");
    });

    it('add fluidInput symbol', function () {
        FluidInputErr("Fluid Input", fi4, "%200", ".test.");
    });

    // fluidOutput


    it('add fluidOutput decimal', function () {
        FluidOutputErr("Fluid Output", fo1, "300.00", ".test.");
    });

    it('add fluidOutput letter and number', function () {
        FluidOutputErr("Fluid Output", fo2, "300a", ".test.");
    });

    it('add fluidOutput letters only', function () {
        FluidOutputErr("Fluid Output", fo3, "asd", ".test.");
    });

    it('add fluidOutput symbol', function () {
        FluidOutputErr("Fluid Output", fo0, "30%0", ".test.");
    });

    // otherAssessments

    it('add otherAssessments', function () {
        OtherAssessment("Other Assessments", vip0, ".test.");
    });
    it('add otherAssessments different value', function () {
        OtherAssessment("Other Assessments", vip1, ".1test.");
    });

    // recordBloodSugar

    it('add RecordBloodSugar 12.3', function () {
        RecordBloodSugar("Record Blood Sugar", "34.5", cc0, ".test.", ".test.");
    });

    it('add RecordBloodSugar 12.00', function () {
        RecordBloodSugar("Record Blood Sugar", "34.05", cc1, ".test.", ".test.");
    });

    it('add RecordBloodSugar 12.345', function () {
        RecordBloodSugar("Record Blood Sugar", "34.521", cc2, ".test.", ".test.");
    });

    it('add RecordBloodSugar 123', function () {
        RecordBloodSugar("Record Blood Sugar", "345", cc3, ".test.", ".test.");
    });

    it('add RecordBloodSugar 12.3a', function () {
        RecordBloodSugarErr("Record Blood Sugar", "34.5a", cc4, ".test.", ".test.");
    });

    it('add RecordBloodSugar abc', function () {
        RecordBloodSugarErr("Record Blood Sugar", "abc", cc5, ".test.", ".test.");
    });

    it('add RecordBloodSugar 34.5&', function () {
        RecordBloodSugarErr("Record Blood Sugar", "34.5&", cc6, ".1test.", ".test.");
    });

    it('discontinue treatment', function () {
        discontinue(".test.");
    });

    it('unable to discontinue treatment', function () {
        getReview(reviewFluidChoice, treatmentTitle, "Treatment");
        getTitle("Patient Details");
        // expect(stopDisabled.isPresent()).toBe(true);
    });
})