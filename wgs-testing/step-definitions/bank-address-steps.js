module.exports = function(){
    this.Given(/^Browse profile page$/, function () {
        helpers.loadPage('http://new2-wgshub.stagingapps.net/users/901/profile');
    });

    this.Given(/^User click Bank Account button$/, function () {
        driver.then(function(){
            return page.btnBankacc.performClick();
        })
    });

    this.Given(/^User fill beneficiary name$/, function () {
        driver.then(function(){
            return page.fillBname.performFill();
        })
    });

    this.Given(/^User fill beneficiary bank$/, function () {
        driver.then(function(){
            return page.fillBbank.performFill();
        })
    });

    this.Given(/^User fill beneficiary account$/, function () {
        driver.then(function(){
            return page.fillBacc.performFill();
        })
    });

    this.Given(/^User fill bank address$/, function () {
        driver.then(function(){
            return page.fillBaddress.performFill();
        })
    });

    this.When(/^User click Submit button$/, function () {
        driver.then(function(){
            return page.btnSubmit.performClick();
        })
    });

    this.Then(/^Data is saved$/, function () {
        driver.then(function(){
            return driver.findElements(by.name("commit"));
        })
        .then (function(elements) {
            expect(elements.length).to.equal(0);
        });
    });
}