import {test} from "@playwright/test"
import loginpage from "../PageObjectModel/loginpage.page.js"
import logindata from "../testdata/logindata.json"
test("",async ({page})=>{
    let linpage=new loginpage(page)
    let url=logindata.url
    let un=logindata.username
    let pwd=logindata.password

      //launch url
      await page.goto(url)
      //pass un
      await linpage.usernametextfield.fill(un)
      //pass pwd
      await linpage.passwordtextfield.fill(pwd)
    //click on submit button
    await linpage.submitbutton.click()
    await page.waitForTimeout(2000)








})