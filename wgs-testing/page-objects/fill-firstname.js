module.exports = {
    url : 'http://new2-wgshub.stagingapps.net/users/901/profile',

    elements: {
        firstname: by.id("user_name")
    },

    performFill: function(){
        var selector = page.fillFirstname.elements.firstname;
        return driver.findElement(selector).sendKeys(shared.userPass.firstname);
    }
}