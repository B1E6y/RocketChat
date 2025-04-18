const { faker } = require('@faker-js/faker');

class loginPage {

        get loginBtn() {return $('.hidden.dropdown-toggle.btn-on-hover.font-bold') }
        get signUpBtn() {return $('a[href="/signup/"]') }
        get name() {return $('#name') }  
        get email() {return $('#email')}
        get password() {return $('#password')}
        get btnPrimary() {return $('#register-form .btn.btn-primary.w-full')}
        get closeButton() {return $('#modalShowWelcome > div > div > button')} 
        // get faceBookButton() {return $('#btnFb')} 
        
       
            async loginExists () {
            console.log("Does login button exists? " + await this.loginBtn.isExisting());  
            }

            async loginIsClickable () {
               console.log("Does login button clickable? " + await this.loginBtn.isClickable());   
            }

            async loginClick () {
                this.loginBtn.click();  
            }

            async signUpExists () {
                console.log("Does signUp button exists? " + await this.signUpBtn.isExisting());  
            }
    
            async signUpClickable () {
                console.log("Does signUp button clickable? " + await this.signUpBtn.isClickable());   
            }
    
            async signUpClick () {
                this.signUpBtn.click();  
            }

            async nameExists () {
                console.log("Does name input exists? " + await this.name.isExisting());  
            }

            async nameClickable () {
                console.log("Does name input clickable? " + await this.name.isClickable());  
            }    
            
            async setName () {
                await this.name.setValue(faker.person.fullName());   
            }

            async emailExists() {
                console.log("Does email input exist? " + await this.email.isExisting());
            }

            async emailClickable () {
                console.log("Does email input clickable? " + await this.email.isClickable());  
            }

            async setEmail () {
                await this.email.setValue(faker.internet.email());   
            }

            async passExists() {
                console.log("Does password input exist? " + await this.password.isExisting());
            }

            async passClickable () {
                console.log("Does password input clickable? " + await this.password.isClickable());  
            }

            async setPass () {
                await this.password.setValue(faker.internet.password({ length: 20, memorable: true }));   
            }

            async primaryExists() {
                console.log("Does signUp primary button exist? " + await this.btnPrimary.isExisting());
            }

            async primaryClickable () {
                console.log("Does signUp primary button clickable? " + await this.btnPrimary.isClickable());  
            }

            async primaryClick () {
                await this.btnPrimary.click();   
            }

            async closeBtn() {
                await this.closeButton.waitUntil(async () => {
                    return await this.closeButton.isDisplayed(); 
                }, {
                    timeout: 7000,
                    timeoutMsg: "Close button isn't working"
                });
                await this.closeButton.click(); 
            }
                  
    
}            

module.exports = new loginPage()