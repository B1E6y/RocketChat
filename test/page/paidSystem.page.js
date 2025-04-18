const { faker } = require('@faker-js/faker');

class paidSystemPage {

    get email() {return $('/html/body/div/div/div[1]/div/div/div/div/div/div[1]/div/div[1]/div[1]/input') }
    get statsMenu() {return $('#navbarMenu > div > div > div.w-full > ul') }
    get removeAds() {return $('#RemoveAds_menu') }
    get paidRemoveAds() {return $('/html/body/main/div/section[1]/div[2]/div[1]/div/ul[4]/li[7]/button') }
   
    async setEmail() {
        await this.email.waitUntil(async () => {
        return await this.email.isDisplayed(); 
            }, {
                timeout: 7000,
                timeoutMsg: "Paid form doesn't work"
            });
            console.log("Does email input clickable? "+ await this.email.isClickable());
            await this.email.setValue(faker.internet.email()); 
        }

        async statsClick () {
        await this.stats.click();  
        }

        async RemoveAdsClick () {
        await this.removeAds.click();  
        }

        async paidClick() {
        await this.paidRemoveAds.waitUntil(async () => {
        return await this.paidRemoveAds.isDisplayed(); 
            }, {
                timeout: 5000,
                timeoutMsg: "Button for remove advertising doesn't work"
            });
            await this.paidRemoveAds.click(); 
        }
      
    }

module.exports = new paidSystemPage()