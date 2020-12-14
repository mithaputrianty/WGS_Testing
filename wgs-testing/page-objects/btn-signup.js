module.exports = {
    url : 'http://new2-wgshub.stagingapps.net/',

    elements: {
        signup: by.xpath("//a[normalize-space()='Signup Today']")
    },

    performClick: function(){
        var selector = page.btnSignup.elements.signup;
        return driver.findElement(selector).click();
    }
}

