//page


// import {test} from "@playwright/test"
// test("fixtures",async({page})=>{

//     await page.goto("https://www.amazon.com/") //page will create  new tab and goto will launch the url
    
// })


// import {test} from "@playwright/test"
// test("fixtures",async({browser,browserName})=>{
//     console.log(browserName);
    
//    let context=await browser.newContext()
//    let page=await context.newPage()
//    await page.goto("https://www.amazon.com/")
    
// })

import {test} from "@playwright/test"
test("fixtures",async({browser})=>{
    
   let context=await browser.newContext()
   let page=await context.newPage()
   await page.goto("https://www.amazon.com/")
    
})