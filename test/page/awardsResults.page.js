class awardsResultsPage {

    get stats() {return $('.flex.gap-x-2 .w-full .hidden.dropdown-toggle') }
    get statsMenu() {return $('#navbarMenu > div > div > div.w-full > ul') }
    get removeAds() {return $('#RemoveAds_menu') }
    get paidRemoveAds() {return $('/html/body/main/div/section[1]/div[2]/div[1]/div/ul[4]/li[7]/button') }
   
        async statsBtn () {
        console.log("Does Stats button clickable? : " + await this.stats.isClickable());  
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

module.exports = new awardsResultsPage()