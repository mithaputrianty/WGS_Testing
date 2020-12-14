module.exports = {
    url : 'http://new2-wgshub.stagingapps.net/users/901/profile',

    elements: {
        submit: by.xpath("//input[@value='submit']")
    },

    performClick: function(){
        var selector = page.btnSubmit.elements.submit;
        return driver.findElement(selector).click();
    }
}

