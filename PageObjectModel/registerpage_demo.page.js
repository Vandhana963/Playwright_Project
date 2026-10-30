class Registerpage_demo
{
    constructor(page)
    {
        this.radiobtn=page.locator("//input[@id='gender-female']")
        this.firstnametxtfield=page.locator("//input[@id='FirstName']")
        this.lastnametxtfield=page.locator("//input[@id='LastName']")
        this.emailtxtfld=page.locator("//input[@id='Email']")
        this.passwordtxtfl=page.locator("//input[@id='Password']")
        this.confirmpasswordtxtfld=page.locator("//input[@id='ConfirmPassword']")
        this.registerbtn=page.locator("//input[@id='register-button']")
    }
      async registerpage(firstname, lastname, email, password, confirmpassword) {
        await this.radiobtn.check();
        await this.firstnametxtfield.fill(firstname);
        await this.lastnametxtfield.fill(lastname);
        await this.emailtxtfld.fill(email);
        await this.passwordtxtfl.fill(password);
        await this.confirmpasswordtxtfld.fill(confirmpassword);
        await this.registerbtn.click();
    }
}
export default Registerpage_demo