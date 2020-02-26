exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect: true,
    specs: [ 'patients.js'],
// 'navBar.js', 'patientPage.js', 'helpers.js',
    capabilities: {
        'browserName': 'chrome',

    },
    useAllAngular2AppRoots: true,
    framework: 'jasmine'
};