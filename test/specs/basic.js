const signUpPage = require('../page/signUp.page.js')


describe("Should check the SignUp forms on RocketChat" , async () => {
    
    it('Go to website rocket.chat', async () => {
        await browser.url('https://www.rocket.chat/');
        await browser.maximizeWindow();
        await browser.pause(100);
        })

    it('Should check the contact sales form', 
        async () => {
        
        await signUpPage.contactSalesClick();
        await browser.pause(100);

        await signUpPage.credScroll();
        await browser.pause(100);

        await signUpPage.setEmail();
        await browser.pause(100);

        await signUpPage.setFirstName();
        await browser.pause(100);

        await signUpPage.setLastName();
        await browser.pause(100);

        await signUpPage.setCompanyName();
        await browser.pause(100);

        await signUpPage.industryTypeClick();
        await browser.pause(100);

        await signUpPage.selectIndustryType();
        await browser.pause(100);

        await signUpPage.companySizeClick();
        await browser.pause(100);

        await signUpPage.selectCompanySize();
        await browser.pause(100);

        await signUpPage.phoneNumbClick();
        await browser.pause(100);

        await signUpPage.selectNumbCountry();
        await browser.pause(100);

        await signUpPage.setPhoneNumber();
        await browser.pause(100);

        await signUpPage.countryClick();
        await browser.pause(100);

        await signUpPage.selectCountry();
        await browser.pause(100);

        await signUpPage.scrollToInput();
        await browser.pause(100);

        await signUpPage.setRandomText();
        await browser.pause(100);

        await signUpPage.submitClick();
        await browser.back();
        })

        }   
)
