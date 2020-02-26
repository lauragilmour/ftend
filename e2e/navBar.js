// describe('NavBar', function () {


//     var navLoginButton = element(by.id('login'));
//     var navLogoutButton = element(by.id('logout'));
//     var navPatientList = element(by.id('patientList'));
//     var navTitle = element(by.id('title'));
//     var navProfile = element(by.id('profile'));
//     var navHome = element(by.id('home'));

//     beforeEach(function () {
//         browser.get('http://localhost:4200/');
//     });

//     function getTitle(title) {
//         expect(navTitle.getText()).toEqual(title);
//     };

//     function loginButton() {
//         navLoginButton.click();
//         var currentUrl = browser.driver.getCurrentUrl();
//         expect(currentUrl).toContain('https://dev-2af4g5mu.eu.auth0.com/login');
//     };

//     function logoutButton() {
//         navLogoutButton.click();
//         var currentUrl = browser.driver.getCurrentUrl();
//         expect(currentUrl).toContain('http://localhost:4200');
//     };

//     function patientListButton() {
//         navPatientList.click();
//         var currentUrl = browser.driver.getCurrentUrl();
//         expect(currentUrl).toContain('http://localhost:4200/patients');
//     };

//     function profileButton() {
//         navProfile.click();
//         var currentUrl = browser.driver.getCurrentUrl();
//         expect(currentUrl).toContain('http://localhost:4200/profile');
//     };

//     function homeButton() {
//         navHome.click();
//         var currentUrl = browser.driver.getCurrentUrl();
//         expect(currentUrl).toContain('http://localhost:4200');
//     };

//     it('should have a Title', function () {
//         getTitle('Home');
//     });

//     it('login button should bring up login', function () {
//         loginButton();
//     });

//     it('patient list button to patient list', function () {
//         patientListButton();
//     });

//     it('Profile button to Profile page', function () {
//         profileButton();
//     });

//     it('logout button to home', function () {
//         logoutButton();
//     });

//     it('home button to home', function () {
//         profileButton();
//         homeButton();
//     });

    
//     // it('login', function () {
//     //     navLoginButton.click();
//     //     login.click();
//     //     patientList.click();
//     //     var currentUrl = browser.driver.getCurrentUrl();
//     //     expect(currentUrl).toContain('http://localhost:4200/patients');


//     // 	browser.driver.wait(function() {
//     // 		return browser.driver.isElementPresent(navLoginButton); 
//     //     }, 5000);

//     //     browser.waitForAngularEnabled(false);

//     //     navLoginButton.click();
//     //     console.log('Clicked');

//     //     //check if email field exists to see if the pop-up has been succesfully loaded

//     //     browser.driver.findElement(by.id('a0-signin_easy_email')).sendKeys('llg-1998@hotmail.co.uk');
//     //     browser.driver.findElement(by.id('a0-signin_easy_password')).sendKeys('Lalougil97');
//     //     browser.driver.findElement(by.css('.a0-notloggedin .a0-primary')).click();

//     //     //verify that the login was succesfull by checking if the logout button is displayed
//     // 	browser.waitForAngularEnabled(true);
//     // 	browser.driver.wait(function() {
//     // 		return browser.driver.isElementPresent(navLogoutButton); 
//     // 	}, 5000);

//     // });
// });