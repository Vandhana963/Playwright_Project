import {test} from "@playwright/test"

test("notification popup",async({browser})=>{
   
       //let context =await browser.newContext()
       let context =await browser.newContext({permissions:["notifications","microphone","geolocation","camera"]})
      //  let page=await context.newPage()
       await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
       await page.getByRole("button",{name:"Notification"}).click()
       //validating the permission status===============
      let result= await page.evaluate(()=>{return Notification.requestPermission()})
       console.log((`permissions:${result}`));
 
       //revoke all permissions
       await context.clearPermissions()
         let result1= await page.evaluate(()=>{return Notification.requestPermission()})
       console.log(`permissions:${result1}`);
       
       

      



})