import {chromium, test} from "@playwright/test"

// test("browser controls",async({page})=>{
    
//     await page.goto("https://www.google.com/")
//     await page.setViewportSize({width:1300,height:800})
//     // await console.log(page.viewportSize());
//     // await console.log(page.title());

//     const size =await page.viewportSize();
//     console.log(size);
//     const title=await page.title();
//     console.log(title);
//     const url=await page.url();
//     console.log(url);
    
// })

// test("browser controls",async({browser})=>{
//     let context=await browser.newContext()
//     let page=await context.newPage()
//     console.log(await context.cookies());
    
//     await page.goto("https://www.google.com/")
//     console.log(await context.cookies());

// })

//new browser instance
test.only("instance",async()=>{
  let browser=await chromium.launch();
  let context=await browser.newContext();
  let page=await context.newPage()
//   await browser.close()
  await page.goto("https://www.google.com/")
  await browser.close()

})
//takescreenshot of a page

test("ss",async({page})=>{
 
    await page.goto("https://www.google.com/")
    await page.screenshot({path:'screenshot/ss.png'})
    let time=new Date().getTime()
    await page.screenshot({path:`screenshot/ss_${time}.png`})
})