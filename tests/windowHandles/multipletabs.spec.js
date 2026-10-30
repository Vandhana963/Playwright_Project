import {expect, test} from "@playwright/test"

test("multiple tabs",async({browser})=>{
    //creating multitabs manually
 let context=await browser.newContext()
let page=await context.newPage();
// await page1.goto("https://www.amazon.com/")
// let page2=await context.newPage()

//new tab via user actions


//  await page.goto("https://www.flipkart.com/search?q=iphone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
//  await page.waitForTimeout(2000)
//  await page.click('(//div[@class="RG5Slk"])[1]')
//  await page.waitForTimeout(2000)

 await page.goto("https://www.redbus.in/")
 await page.click("//a[text()='About us']")
 await page.waitForTimeout(2000)

 await page.click('(//div[@class="rb_main_secondary_item  link"])[3]')
 await page.waitForTimeout(2000)

})

test("handling multiple tabs",async({browser})=>{
     let context=await browser.newContext()
         let page= await context.newPage()
    //      await page.goto("https://www.flipkart.com/search?q=iphone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
    //     await page.waitForTimeout(2000)
    //    let [page1] =await Promise.all([page.waitForEvent('popup'),
    //     page.click('(//div[@class="RG5Slk"])[1]')])
    //      await page.waitForTimeout(2000)
    //      console.log(await page1.url());
    //      await expect(page1.url()).not.toBe("https://www.flipkart.com/search?q=iphone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
         await page.goto("https://www.redbus.in/")
      let [page2]=  await Promise.all([page.waitForEvent('popup'),page.click("//a[text()='About us']")])
      await page.waitForTimeout(2000)
                  await page2.click("//span[text()='Account']")
 

})

test("handling multi tabs",async({browser})=>{
     let context=await browser.newContext()
         let page= await context.newPage()
         //flipakart and assertion
    //      await page.goto("https://www.flipkart.com/search?q=iphone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
    //      await page.waitForTimeout(2000)
    //    let [page1] =await Promise.all([page.waitForEvent('popup'),
    //     page.click('(//div[@class="RG5Slk"])[1]')])
    //      await page.waitForTimeout(2000)
    //     console.log(await page1.url());
         
    //      await expect(page1.url()).not.toBe("https://www.flipkart.com/search?q=iphone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")

            //redbus and assertion

           await page.goto("https://www.redbus.in/")
      let [page2]=  await Promise.all([page.waitForEvent('popup'),page.click("//a[text()='About us']")])
      await page.waitForTimeout(2000)
                  await page2.click("//span[text()='Account']")
                  await page.waitForTimeout(2000)
                  console.log(await page2.url());
                  await expect(page2.url()).not.toBe("https://www.redbus.in/")

        })

        test.only("handling multiple windows",async({browser})=>{
     let context=await browser.newContext()
         let page= await context.newPage()
         await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2")
         let [page1]=await Promise.all([page.waitForEvent('popup'),page.click("//button[text()='Shop Now']")])
         await page1.click("//button[text()='Add to Cart']")
         console.log(page1.url());
         await expect(page1.url()).not.toBe("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2")
         await page.waitForTimeout(1000)

         console.log(page1.title());
         let title1=await page.title()
         await expect(page1.title()).not.toBe(title1)
         
        
        })