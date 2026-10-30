import {test} from "@playwright/test"

test("autosuggetion",async({page})=>{

await page.goto("https://www.amazon.com/")
await page.locator("//input[@id='twotabsearchtextbox']").fill("shoes")
await page.waitForTimeout(2000)
await page.waitForSelector("(//div[@class='s-suggestion-container'])[1]")
// await page.keyboard.press("ArrowDown")
// await page.keyboard.press("Enter")
// await page.waitForTimeout(2000)




// let allsugg=await page.locator("(//div[@class='s-suggestion-container'])[1]").all()
// for(let option of allsugg)
// {
//     let text=await option.textContent()
//     if(text.includes(" for men"))
//         await option.click()
//          break;
// }

// await page.waitForTimeout(2000)

})