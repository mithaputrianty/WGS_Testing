module.exports = {
    url : 'http://new2-wgshub.stagingapps.net/users/901/profile',

    elements: {
        address: by.xpath("//textarea[@id='user_personal_address']")
    },

    performFill: function(){
        var selector = page.fillAddress.elements.address;
        return driver.findElement(selector).sendKeys(shared.userPass.address);
    }
}