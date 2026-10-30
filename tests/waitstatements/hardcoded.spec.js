import {test} from "@playwright/test"

test("hard ccoded wait",async({page})=>{
await page.goto("https://practicetestautomation.com/practice-test-login/")
await page.waitForTimeout(2000)
await page.getByText('Username',{exact:true}).fill("student")
await page.waitForTimeout(2000)
await page.getByLabel('Password',{excat:true}).fill("Password123")
await page.waitForTimeout(2000)
await page.locator("//button[@id='submit']").click()
})

test.only("autosugg",async({page})=>{
 
    await page.goto("https://www.amazon.com/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("shoes")
    await page.waitForTimeout(2000)
    let text=await page.locator("//div[@role='button']").allTextContents()
    console.log(text);
})