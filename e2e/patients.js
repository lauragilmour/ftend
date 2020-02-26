// var helpers = require('./navBar');

describe('Patients', function () {
    var navLoginButton = element(by.id('login'));
    var navLogoutButton = element(by.id('logout'));
    var navPatientList = element(by.id('patientList'));
    var navTitle = element(by.id('title'));
    var patient = element(by.id('patient'));
    var navHome = element(by.id('home'));

    var addAge = element(by.id('addAge'));
    var addFluidCalculator = element(by.id('addFluidCalculator'));
    var addFluidChoice = element(by.id('addFluidChoice'));
    var addFluidInput = element(by.id('addFluidInput'));
    var addFluidOutput = element(by.id('addFluidOutput'));
    var addOtherAssessments = element(by.id('addOtherAssessments'));
    var addRecordBloodSugar = element(by.id('addRecordBloodSugar'));

    beforeEach(function () {
        browser.get('http://localhost:4200/patients');
    });

    function getTitle(title) {
        expect(navTitle.getText()).toEqual(title);
    };

    function clickPatient() {
        patient.click();
        var currentUrl = browser.driver.getCurrentUrl();
        expect(currentUrl).toContain('http://localhost:4200/patient/');
        getTitle("Patient Details")
    };

    // Reviews

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

    function getReview(button, title, titleText) {
        clickPatient();
        button.click();
        expect(title.getText()).toEqual(titleText);
    };

    // it('should have a Title', function () {
    //     getTitle("Patient List");
    // });

    // it('click on first patient', function(){
    //     clickPatient();
    // });

    // it('review age', function(){
    //     getReview(reviewAge, ageTitle, "Age");
    // });

    // it('review fluidCalculator', function(){
    //     getReview(reviewFluidCalculator, weightTitle, "Weight");
    // });

    // it('review fluidChoice', function(){
    //     getReview(reviewFluidChoice, treatmentTitle, "Treatment");
    // });

    // it('review fluidInput', function(){
    //     getReview(reviewFluidInput, inputTitle, "Fluid Input Type");
    // });

    // it('review fluidOutput', function(){
    //     getReview(reviewFluidOutput, outputTitle, "Fluid Output Type");
    // });

    // it('review fluidBalance', function(){
    //     getReview(reviewFluidBalance, overallTitle, "Overall Input");
    // });

    // it('review otherAssessments', function(){
    //     getReview(reviewOtherAssessments, vipTitle, "VipScore");
    // });

    // it('review RecordBloodSugar', function(){
    //     getReview(reviewRecordBloodSugar, bloodSugarTitle, "BloodSugarLevel");
    // });

    var signature = element(by.id('signature'));
    var submit = element(by.id('submit'));
    var returnButton = element(by.id('return'));

    // Add Age
    var age = element(by.id('age'));
    var child = element(by.id('child'));
    var neonate = element(by.id('neonate'));


    // function addAges(button) {
    //     clickPatient();
    //     addAge.click();
    //     getTitle("Age");
    //     age.click();
    //     button.click();
    //     signature.sendKeys("'Laura Gilmour'");
    //     submit.click();
    //     returnButton.click();
    //     getTitle("Patient Details");
    // };

    // it('add age child', function () {
    //     addAges(child);
    // });

    // it('add age neonate', function () {
    //     addAges(neonate);
    // });

    // FluidCalculator
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
    var comment = element(by.id('commentAmount'));
    var measurement = element(by.id('measurement'));
    var ueButton = element(by.id('ueAvailable'));
    var reasonIV = element(by.id('reasonIvFluids'));
    var amount = element(by.id('amount'));
    var percentage = element(by.id('percentageDehydration'));


    function addFluidCalculators(measure, option, ueOption, IvOption, fbOption, pdOption) {
        clickPatient();
        addFluidCalculator.click();
        getTitle("Fluid Calculator");

        weight.sendKeys("40.0");
        
        measure.click();
        option.click();

        ueButton.click();
        ueOption.click();

        reasonIV.click();
        IvOption.click();

        amount.click();
        fbOption.click();

        percentage.click();
        pdOption.click();

        comment.sendKeys("reason");

        signature.sendKeys("'Laura Gilmour'");
        
        submit.click();
        
        console.log('submit');
        browser.sleep('50');
        //  returnButton.click();
        //  console.log('return');
        //  getTitle("Patient Details");
    };

    it('add fluidCalculator', function () {
        addFluidCalculators(measurement, measured, yes, IV0, FB0, PD0)
    });

    // it('add fluidChoice', function(){
    //     getReview(reviewFluidChoice, treatmentTitle, "Treatment");
    // });

    // it('add fluidInput', function(){
    //     getReview(reviewFluidInput, inputTitle, "Fluid Input Type");
    // });

    // it('add fluidOutput', function(){
    //     getReview(reviewFluidOutput, outputTitle, "Fluid Output Type");
    // });

    // it('add otherAssessments', function(){
    //     getReview(reviewOtherAssessments, vipTitle, "VipScore");
    // });

    // it('add RecordBloodSugar', function(){
    //     getReview(reviewRecordBloodSugar, bloodSugarTitle, "BloodSugarLevel");
    // });


})