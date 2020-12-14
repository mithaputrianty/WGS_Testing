module.exports = {
    url : 'http://new2-wgshub.stagingapps.net/users/login',

    elements: {
        login: by.xpath("//input[@id='login_button']")
    },

    performClick: function(){
        var selector = page.btnLogin.elements.login;
        return driver.findElement(selector).click();
    }
}

