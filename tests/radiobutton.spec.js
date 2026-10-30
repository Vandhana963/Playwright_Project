import {test, expect} from "@playwright/test"

test("radio button", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator("//input[@id='attended']").click()
    await page.waitForTimeout(2000)
    //asserting
    //its not for assertion juz to check true r false
    //await page.locator("//input[@id='attended']").isChecked()
   // console.log(await page.locator("//input[@id='attended']").isChecked());
   // await expect(page.locator("//input[@id='attended']")).toBeChecked()

    //negative assertions
    await expect(await page.locator("//input[@id='attended']").isChecked()).toBeFalsy()
    await expect(await page.locator("//input[@id='attended']").isChecked()).toBeTruthy()

})

test.only("check box", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox")
    await page.locator("//input[@id='domain_b']").check()
    await page.waitForTimeout(2000)
    
    //asserting
    //its not for assertion juz to check true r false
    //await page.locator("//input[@id='domain_b']").isChecked()
   // console.log(await page.locator("//input[@id='domain_b']").isChecked());
   
   //verify checked
   await expect(page.locator("//input[@id='domain_b']")).toBeChecked()
    await page.locator("//input[@id='domain_b']").uncheck()

    //negative assertions verify unchecked
    await expect(await page.locator("//input[@id='domain_b']").isChecked()).toBeFalsy()
    await page.waitForTimeout(2000)

})
