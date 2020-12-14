module.exports = {
    url : 'http://new2-wgshub.stagingapps.net/users/901/profile',

    elements: {
        bname: by.xpath("//input[@id='bank_account_beneficiary_name']")
    },

    performFill: function(){
        var selector = page.fillBname.elements.bname;
        return driver.findElement(selector).sendKeys(shared.userPass.bname);
    }
}