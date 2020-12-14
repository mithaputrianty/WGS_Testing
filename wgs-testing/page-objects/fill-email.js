module.exports = {
    url : 'http://new2-wgshub.stagingapps.net/users/901/profile',

    elements: {
        email: by.xpath("//input[@id='user_email']")
    },

    performFill: function(){
        var selector = page.fillEmail.elements.email;
        return driver.findElement(selector).sendKeys(shared.userPass.email);
    }
}