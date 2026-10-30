import {test} from "@playwright/test"

test("locators",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // //username typetextfield
    // await page.locator("input#username").fill("student")
    // //password typetextfield
    // await page.locator("input#password").fill("Password123")
    // //submit button
    // await page.locator("button#submit").click()

     //username typetextfield
    await page.locator("//input[@id='username']").fill("student")
    //password typetextfield
    await page.locator("//input[@id='password']").fill("Password123")
    //submit button
    await page.locator("//button[@id='submit']").click()

})