import {test} from "@playwright/test"
//globally we can set timeout
test.use({actionTimeout:5000})

test("check",async({page})=>{
    //setDefaultTimeout
//     page.setDefaultTimeout(3000)//it will wait for 3 sec
//   await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
//   await page.locator("//input[@id='attended']").check()
 //it considers default time as 30 sec
//    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
//   await page.locator("//input[@id='attended']").check()
  //can pass setTimout inside individual element
   await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
  await page.locator("//input[@id='attende']").check({timeout:1000})



})