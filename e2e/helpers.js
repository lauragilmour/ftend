
// var helpers = function helpers() {

//     var navLoginButton = element(by.id('login'));
//     var navLogoutButton = element(by.id('logout'));
//     var navPatientList = element(by.id('patientList'));
//     var navTitle = element(by.id('title'));
//     var navProfile = element(by.id('profile'));
//     var navHome = element(by.id('home'));

//     this.getTitle = function (title) {
//         console.log("getTitle");
//         expect(navTitle.getText()).toEqual(title);
//     };

    
//     function getTitle(title) {
//         expect(navTitle.getText()).toEqual(title);
//     };

//     this.loginButton = function () {
//         navLoginButton.click();
//         var currentUrl = browser.driver.getCurrentUrl();
//         expect(currentUrl).toContain('https://dev-2af4g5mu.eu.auth0.com/login');
//     };
//     this.logoutButton = function () {
//         navLogoutButton.click();
//         var currentUrl = browser.driver.getCurrentUrl();
//         expect(currentUrl).toContain('http://localhost:4200');
//     };

//     this.patientListButton = function () {
//         navPatientList.click();
//         var currentUrl = browser.driver.getCurrentUrl();
//         expect(currentUrl).toContain('http://localhost:4200/patients');
//     };

//     this.profileButton = function () {
//         navProfile.click();
//         var currentUrl = browser.driver.getCurrentUrl();
//         expect(currentUrl).toContain('http://localhost:4200/profile');
//     };

//     this.homeButton = function () {
//         navHome.click();
//         var currentUrl = browser.driver.getCurrentUrl();
//         expect(currentUrl).toContain('http://localhost:4200');
//     };
// };