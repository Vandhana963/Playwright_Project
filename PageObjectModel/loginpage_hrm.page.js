class loginpagehrm
{

   constructor(page)
   {

       this.usernametxtfld=page.locator('//input[@name="username"]')
       this.passwordtxtfield=page.locator('//input[@name="password"]')
       this.loginbtn=page.locator('//button[@type="submit"]')

   }

   async loginpage(un,pwd)
   {
    await this.usernametxtfld.fill(un)
    await this.passwordtxtfield.fill(pwd)
    await this.loginbtn.click()
    
   }


}
export default loginpagehrm