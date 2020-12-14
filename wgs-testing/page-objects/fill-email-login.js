module.exports = {
    url : 'http://new2-wgshub.stagingapps.net/users/login',

    elements: {
        email: by.xpath("//input[@id='email']")
    },

    performFill: function(){
        var selector = page.fillEmailLogin.elements.email;
        return driver.findElement(selector).sendKeys(shared.userPass.email);
    }
}