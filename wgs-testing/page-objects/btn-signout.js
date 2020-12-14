module.exports = {
    url : 'http://new2-wgshub.stagingapps.net/',

    elements: {
        signout: by.xpath("//a[normalize-space()='Sign Out']")
    },

    performClick: function(){
        var selector = page.btnSignout.elements.signout;
        return driver.findElement(selector).click();
    }
}

