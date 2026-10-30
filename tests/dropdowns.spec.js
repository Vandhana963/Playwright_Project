import {expect,test} from "@playwright/test"

test("dropdowns",async({page})=>{
  //await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
  //await page.locator("//select[@id='select3']")
  //selectOption
  //accepts value,label,index,visibletext
  //select with value
//   await page.locator("//select[@id='select3']").selectOption({value:"India"})
//   await page.waitForTimeout(2000)

    //select with label
//     await page.locator("//select[@id='select3']").selectOption({label:"India"})
//   await page.waitForTimeout(2000)

    //select with label
//     await page.locator("//select[@id='select3']").selectOption({index:7})
//   await page.waitForTimeout(2000)

  
    //select with visibletext
//     await page.locator("//select[@id='select3']").selectOption("India")
//   await page.waitForTimeout(2000)
  

  //multiple selection
//    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
//    await page.waitForTimeout(2000)
//    await page.locator("//select[@id='select-multiple-native']").selectOption([{value:"Mens Cotton Jacket"},{value:"Mens Casual Slim Fit"}])
//   await page.waitForTimeout(2000)
//   await page.locator("//button[text()='Add']").click()
//   await page.waitForTimeout(2000)

  //custom dropdown=================
 await page.goto("https://www.amazon.com/s?k=shoes&crid=9TYPBSOI4PC8&sprefix=shoes%2Caps%2C298&ref=nb_sb_noss_1")
   await page.locator("//span[@class='a-button-text a-declarative']").click({force:true})
   await page.waitForTimeout(2000)
await page.locator("//div[@class='a-popover-inner']").first().waitFor()
await page.waitForTimeout(3000)
   let options=await page.locator("/div[@class='a-popover-inner']").all()
   for(let option of options)
   {
        let text=option.textContent()
        if(text.includes('Best '))
        {
            await option.click()
        }
   }
   await page.waitForTimeout(2000)

   //xpath
//    await page.locator("#s-result-sort-select_2").click()
//    await page.waitForTimeout(2000)

   //variable attached to xpath for text
   let text="Price: High to Low"
   await page.locator(`//div[@class='a-nostyle a-list-link' and text()="${text}"]`)
   await page.waitForTimeout(2000)




})