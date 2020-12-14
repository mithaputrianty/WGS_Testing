module.exports = {
    url : 'http://new2-wgshub.stagingapps.net/users/901/profile',

    elements: {
        bacc: by.xpath("//input[@id='bank_account_beneficiary_account']")
    },

    performFill: function(){
        var selector = page.fillBacc.elements.bacc;
        return driver.findElement(selector).sendKeys(shared.userPass.bacc);
    }
}