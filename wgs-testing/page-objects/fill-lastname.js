module.exports = {
    url : 'http://new2-wgshub.stagingapps.net/users/901/profile',

    elements: {
        lastname: by.xpath("//input[@id='user_last_name']")
    },

    performFill: function(){
        var selector = page.fillLastname.elements.lastname;
        return driver.findElement(selector).sendKeys(shared.userPass.lastname);
    }
}