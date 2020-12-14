module.exports = function(){
    this.Given(/^User browse home page$/, function () {
        helpers.loadPage('http://new2-wgshub.stagingapps.net/');
    });

    this.Given(/^User click Signup Today button$/, function () {
        driver.then(function(){
            return page.btnSignup.performClick();
        })
    });

    this.Then(/^User in register page$/, function () {
        driver.then(function(){
            return driver.findElements(by.xpath("//input[@id='register_name']"));
        })
        .then (function(elements) {
            expect(elements.length).to.equal(1);
        });
    });
}