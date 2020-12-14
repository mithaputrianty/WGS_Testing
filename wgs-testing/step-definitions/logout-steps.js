module.exports = function(){
    this.Given(/^Browse home page$/, function () {
        helpers.loadPage('http://new2-wgshub.stagingapps.net/');
    });

    this.Given(/^User click Sign Out button$/, function () {
        driver.then(function(){
            return page.btnSignout.performClick();
        })
    });

    this.Then(/^User in login page$/, function () {
        driver.then(function(){
            return driver.findElements(by.css("#login_button"));
        })
        .then (function(elements) {
            expect(elements.length).to.equal(0);
        });
    });
}