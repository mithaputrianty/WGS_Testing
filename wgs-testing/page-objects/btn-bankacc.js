module.exports = {
    url : 'http://new2-wgshub.stagingapps.net/users/901/profile',

    elements: {
        bankacc: by.xpath("//a[@id='aff-tab']//span[@class='visible-xs']")
    },

    performClick: function(){
        var selector = page.btnBankacc.elements.submit;
        return driver.findElement(selector).click();
    }
}

