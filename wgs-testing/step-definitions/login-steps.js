module.exports = function(){
    this.Given(/^Browse login page$/, function () {
        helpers.loadPage('http://new2-wgshub.stagingapps.net/users/login');
    });

    this.Given(/^User fill email login$/, function () {
        driver.then(function(){
            return page.fillEmailLogin.performFill();
        })
    });

    this.Given(/^User fill password$/, function () {
        driver.then(function(){
            return page.fillPassLogin.performFill();
        })
    });

    this.When(/^User click Login button$/, function () {
        driver.then(function(){
            return page.btnLogin.performClick();
        })
    });

    this.Then(/^User in user page$/, function () {
        driver.then(function(){
            return driver.findElements(by.xpath("//a[normalize-space()='My Account']"));
        })
        .then (function(elements) {
            expect(elements.length).to.equal(0);
        });
    });
}