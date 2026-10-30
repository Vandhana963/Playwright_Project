import {expect, test} from "@playwright/test"
import homepage_demo from "../../PageObjectModel/homepage_demo.page"
import Registerpage_demo from "../../PageObjectModel/registerpage_demo.page"
import logindata_demo from "../../testdata/logindata_demo.json"
import registerdata_demo from "../../testdata/registerdata_demo.json"
import loginpage_demo from "../../PageObjectModel/loginpage_demo.page"

test.describe("smoke tests",()=>{

     test.beforeEach(async ({ page}) => {
          let url=logindata_demo.url
           await page.goto(url);
    });

    test.afterEach(async ({ page }) => {
        console.log("Smoke test completed");
    });


test("Verification application launch",async({page})=>{

    
     let home=new homepage_demo(page)
    await expect(page).toHaveTitle("Demo Web Shop")
    await expect(home.titleimg).toBeVisible()
    await expect(home.loginlink).toBeVisible()
    await expect(home.registerlink).toBeVisible()
   
})

test("verify user registration",async({page})=>{

    let url=logindata_demo.url
    let fname=registerdata_demo.firstname
    let lname=registerdata_demo.lastname
    let email=registerdata_demo.email
    let pwd=registerdata_demo.password
    let cpwd=registerdata_demo.confirmpassword
    //verify register
     let home=new homepage_demo(page)
     let register=new Registerpage_demo(page)
     await page.goto(url)
     await home.registerlink.click()
     await register.registerpage(fname,lname,email,pwd,cpwd)
       

})

test("verify user login",async({page})=>{
   let url=logindata_demo.url
   let un=logindata_demo.email
    let paswd=logindata_demo.password
    
    
    // verify login
       let login=new loginpage_demo(page)
       let home=new homepage_demo(page)
       await page.goto(url)
       await home.loginlink.click()
       await login.loginpage(un,paswd)
      

})

})