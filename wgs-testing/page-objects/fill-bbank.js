module.exports = {
    url : 'http://new2-wgshub.stagingapps.net/users/901/profile',

    elements: {
        bbank: by.xpath("//input[@id='bank_account_beneficiary_bank']")
    },

    performFill: function(){
        var selector = page.fillBbank.elements.bbank;
        return driver.findElement(selector).sendKeys(shared.userPass.bbank);
    }
}