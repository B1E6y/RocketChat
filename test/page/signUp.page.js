const { faker } = require('@faker-js/faker');

class signUpPage {

        get contactSalesBtn() {return $('#contact-sales-button') }
        get credentials() {return $('#label-email-bc515ceb-5b63-404e-8b16-f19f48e0bd93') }
        get email() {return $('#email-bc515ceb-5b63-404e-8b16-f19f48e0bd93') }
        get firstName() {return $('#firstname-bc515ceb-5b63-404e-8b16-f19f48e0bd93') }  
        get lastName() {return $('#lastname-bc515ceb-5b63-404e-8b16-f19f48e0bd93')}
        get companyName() {return $('#company-bc515ceb-5b63-404e-8b16-f19f48e0bd93')}
        get industry() {return $('#industry_-bc515ceb-5b63-404e-8b16-f19f48e0bd93')}
        get programDev() {return $('#industry_-bc515ceb-5b63-404e-8b16-f19f48e0bd93 > option:nth-child(115)')} 
        get companySize() {return $('#size-bc515ceb-5b63-404e-8b16-f19f48e0bd93')}
        get selectSize() {return $('#size-bc515ceb-5b63-404e-8b16-f19f48e0bd93 > option:nth-child(2)')}
        get numbCountry() {return $('#phone_ext-bc515ceb-5b63-404e-8b16-f19f48e0bd93')}
        get numbUkraine() {return $('#phone_ext-bc515ceb-5b63-404e-8b16-f19f48e0bd93')}
        get number() {return $('#phone-bc515ceb-5b63-404e-8b16-f19f48e0bd93')}
        get country() {return $('#country_-bc515ceb-5b63-404e-8b16-f19f48e0bd93')}
        get countryUkr() {return $('#country_-bc515ceb-5b63-404e-8b16-f19f48e0bd93 > option:nth-child(228)')}
        get scrollToDesc() {return $('#label-description-bc515ceb-5b63-404e-8b16-f19f48e0bd93')}
        get description() {return $('#description-bc515ceb-5b63-404e-8b16-f19f48e0bd93')}
        get submit() {return $('.hs_submit.hs-submit')}
       
    
            async contactSalesClick () {
                this.contactSalesBtn.click();  
            }

            async credScroll () {
                this.credentials.scrollIntoView();  
            }
            
            async setEmail () {
                await this.email.setValue(faker.internet.email());   
            }

            async setFirstName () {
                await this.firstName.setValue(faker.person.firstName());   
            }

            async setLastName () {
                await this.lastName.setValue(faker.person.lastName());   
            }

            async setCompanyName () {
                await this.companyName.setValue(faker.company.name());   
            }

            async industryTypeClick () {
                await this.industry.click();   
            }

            async selectIndustryType () {
                await this.programDev.click();   
            }

            async companySizeClick () {
                await this.companySize.click();   
            }

            async selectCompanySize () {
                await this.selectSize.click();   
            }

            async phoneNumbClick () {
                await this.numbCountry.click();   
            }

            async selectNumbCountry () {
                await this.numbUkraine.click();   
            }

            async setPhoneNumber () {
               await this.number.setValue(faker.number.int({ min: 100000000, max: 999999999 }));   
            }

            async countryClick () {
                await this.country.click();  
            }

            async selectCountry () {
                await this.countryUkr.click();  
            }

            async scrollToInput () {
                await this.number.scrollIntoView();  
            }

            async setRandomText () {
                await this.description.setValue(faker.lorem.paragraph());  
            }

            async submitClick () {
                await this.submit.click();  
            }
    
}            

module.exports = new signUpPage()