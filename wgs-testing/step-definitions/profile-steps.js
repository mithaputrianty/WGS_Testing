module.exports = function(){
    this.Given(/^User browse profile page$/, function () {
        helpers.loadPage('http://new2-wgshub.stagingapps.net/users/901/profile');
    });

    this.Given(/^User fill first name$/, function () {
        driver.then(function(){
            return page.fillFirstname.performFill();
        })
    });

    this.Given(/^User fill last name$/, function () {
        driver.then(function(){
            return page.fillLastname.performFill();
        })
    });

    this.Given(/^User fill email$/, function () {
        driver.then(function(){
            return page.fillEmail.performFill();
        })
    });

    this.Given(/^User fill phone number$/, function () {
        driver.then(function(){
            return page.fillPhone.performFill();
        })
    });

    this.Given(/^User fill address$/, function () {
        driver.then(function(){
            return page.fillAddress.performFill();
        })
    });

    this.When(/^User click Update Personal Details button$/, function () {
        driver.then(function(){
            return page.btnPersonalDetails.performClick();
        })
    });

    this.Then(/^Data user is saved$/, function () {
        driver.then(function(){
            return driver.findElements(by.xpath("//div[@class='alertify-notifier ajs-bottom ajs-right']"));
        })
        .then (function(elements) {
            expect(elements.length).to.equal(0);
        });
    });
}