import {test} from "@playwright/test"

//custom wait for autosuggestion
test("customwaitsautosugg",async({page})=>{
  await page.goto("https://www.amazon.com/")
  await page.locator("//input[@id='twotabsearchtextbox']").fill("hp laptops")
  await page.waitForFunction(()=>{let ele=document.querySelectorAll(".s-suggestion-container")
    return ele.length>2
  })
  let allautosugg=await page.locator("//div[@class='s-suggestion-container']").allTextContents()
    console.log(allautosugg);  
})

//custom wait for pageload
test.only("customwaits",async({page})=>{
  await page.goto("https://www.amazon.com/")
  await page.waitForFunction(()=>{return document.readyState==="complete"})
   await page.locator("//input[@id='twotabsearchtextbox']").fill("hp laptops")
})
