module.exports = {
    url : 'http://new2-wgshub.stagingapps.net/users/login',

    elements: {
        password: by.xpath("//input[@id='password']")
    },

    performFill: function(){
        var selector = page.fillPassLogin.elements.password;
        return driver.findElement(selector).sendKeys(shared.userPass.password);
    }
}