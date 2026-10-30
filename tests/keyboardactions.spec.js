import {test} from "@playwright/test"

test("keyboard actions",async({page})=>{
 
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    // await page.locator("#name").fill("vandhana")
    // await page.waitForTimeout(2000)

    //type
     //await page.locator("#name").type("vandhana")
    // await page.type("#name","vandhana")
    // await page.waitForTimeout(2000)

    // //insertText()
    await page.locator("#name").click()
    await page.keyboard.insertText("vandhana")
    await page.waitForTimeout(2000)

    //down and up()
    await page.keyboard.down("Space")
    await page.keyboard.up("Space")
    await page.waitForTimeout(2000)
    await page.keyboard.down("R")
    await page.keyboard.up("R")
    await page.waitForTimeout(2000)

    //press
    await page.keyboard.press('Tab')
    await page.waitForTimeout(2000)
    await page.keyboard.type("vasb@gmail.com")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Tab")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Control+V")
    await page.waitForTimeout(2000)
})

//scrolling action using keyboard actions
test.only("scroll using keyboard actions",async({page})=>{
await page.goto("https://www.amazon.com/")
await page.waitForTimeout(2000)
for(let i=1;i<14;i++)
{

await page.keyboard.press("ArrowDown")
}

await page.waitForTimeout(2000)

for(let i=1;i<=7;i++)
{

await page.keyboard.press("ArrowUp")
}
await page.waitForTimeout(2000)

//type("String")
//insertText("")
//press("a+b+c") press(<key>)
//down(<key>) and up(<key>)

})