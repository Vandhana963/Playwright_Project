import {test} from "@playwright/test"

test("element waits",async({page})=>{
 
    await page.goto("https://www.amazon.com/")
    //waitfortimeout
    //await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes").waitFor({state:'visible',timeout:3000})
     //waitforselector
     await page.waitForSelector('//input[@id="twotabsearchtextbox"]',{state:'visible'})
     await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
     //waitfortext
    // await page.locator('//div[@role="row"]',{hasText:" for girls"}).waitFor()
    await page.locator('//div[@role="row"]',{hasText:" for girls"}).waitFor({timeout:2000})
    let text=await page.locator('//div[@role="row"]').allTextContents()
    console.log(text);
})

test("waitfornavigation",async({page})=>{

  await page.goto("https://www.amazon.com/")
  //waitForNavigation..it pause the execution till the start and complete navigation is done
  //await Promise.all([page.waitForNavigation(),page.click("//div[@id='nav-cart-count-container']")])
  await page.click("//div[@id='nav-cart-count-container']")
  //waitforloadstate
  await page.waitForLoadState('networkidle',{timeout:2000}) //load 

})

test.only("waitforevent",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.fill("//textarea[@id='writeArea']","iam downloading")
   let [downloadfile]=await Promise.all([page.waitForEvent('download'),page.click("//button[@id='downloadButton']")])
    console.log(await downloadfile.path());
    


})