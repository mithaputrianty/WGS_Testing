module.exports = {
    url : 'http://new2-wgshub.stagingapps.net/users/901/profile',

    elements: {
        baddress: by.xpath("//textarea[@id='bank_account_bank_address']")
    },

    performFill: function(){
        var selector = page.fillBaddress.elements.baddress;
        return driver.findElement(selector).sendKeys(shared.userPass.baddress);
    }
}