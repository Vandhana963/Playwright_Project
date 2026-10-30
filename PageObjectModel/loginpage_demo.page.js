class loginpage_demo
{
    constructor(page)
    {
        this.emailtxtfld=page.locator("//input[@id='Email']")
        this.passwordtxtfld=page.locator("//input[@id='Password']")
        this.loginbtn=page.locator("//input[@value='Log in']")
    }



    async loginpage(un,pwd)
    {
        await this.emailtxtfld.fill(un)
        await this.passwordtxtfld.fill(pwd)
        await this.loginbtn.click()
    }

}

export default loginpage_demo