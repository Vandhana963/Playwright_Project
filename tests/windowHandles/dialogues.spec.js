import {expect, test} from "@playwright/test"


test.only("dialogue handling",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   
    //dialogues are auto dismissed by playwright
    // await page.getByRole("button",{name:"Simple Alert"}).click()
    // await page.waitForTimeout(1000)
    // await page.getByRole("button",{name:"Confirmation Alert"}).click()
    // await page.waitForTimeout(1000)
    // await expect(page.locator('//p[@id="demo"]')).toContainText("Cancel!")
    // await page.getByRole("button",{name:"Prompt Alert"}).click()
    // await expect(page.locator('//p[@id="demo"]')).toContainText("cancelled")

    //await page.waitForTimeout(1000)

    //handling dialogue

page.on("dialog",async(dialog)=>{
    
    if(dialog.type()=='alert')
        {
            console.log(await dialog.message());
          await dialog.accept()
          
        }else if(dialog.type()=='confirm')
        {
            console.log(await dialog.message());
          await dialog.accept()
          
        }
        else if(dialog.type()=='prompt')
        {
            if(dialog.defaultValue()=='vandhu')
                {
            console.log(await dialog.defaultValue());
            }
            else{
                await dialog.accept("vandhu")
            console.log(await dialog.message());
        }
        }

    })
    //page.on("dialog",(dialog)=>{dialog.accept("vbsahb")})
    await page.getByRole("button",{name:"Simple Alert"}).click()
    await page.waitForTimeout(1000)
    await page.getByRole("button",{name:"Confirmation Alert"}).click()
    await page.waitForTimeout(1000)
    await expect(page.locator('//p[@id="demo"]')).toContainText("OK")
    await page.getByRole("button",{name:"Prompt Alert"}).click()
    await expect(await page.locator('//p[@id="demo"]').textContent()).toBe("Hello vandhu! How are you today?")
    await page.waitForTimeout(1000)  
    

    
})

test("dialogue handling using page.once",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole("button",{name:"Simple Alert"}).click()
    await page.waitForTimeout(1000)
    await page.getByRole("button",{name:"Confirmation Alert"}).click()
    await page.waitForTimeout(1000)
    page.once("dialog",async(dialog )=>{dialog.accept("abcdefghijkl")})
     await page.getByRole("button",{name:"Prompt Alert"}).click()
      await page.waitForTimeout(1000)
      await page.reload()
       await page.getByRole("button",{name:"Prompt Alert"}).click()
      await page.waitForTimeout(1000)


})


