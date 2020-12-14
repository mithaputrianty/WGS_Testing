module.exports = {
    url : 'http://new2-wgshub.stagingapps.net/users/901/profile',

    elements: {
        personal: by.xpath("//input[@value='Update Personal Details']")
    },

    performClick: function(){
        var selector = page.btnPersonalDetails.elements.personal;
        return driver.findElement(selector).click();
    }
}

