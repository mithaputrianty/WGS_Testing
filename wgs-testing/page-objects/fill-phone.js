module.exports = {
    url : 'http://new2-wgshub.stagingapps.net/users/901/profile',

    elements: {
        phone: by.xpath("//input[@id='user_phone']")
    },

    performFill: function(){
        var selector = page.fillPhone.elements.phone;
        return driver.findElement(selector).sendKeys(shared.userPass.phonenumber);
    }
}