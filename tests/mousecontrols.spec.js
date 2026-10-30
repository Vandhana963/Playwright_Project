import {chromium, test} from "@playwright/test"

test("basic mouse actions",async({page})=>{
    //click..bydefault left click===================
await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
await page.locator("//button[@id='btn']").click() //leftclick 
await page.waitForTimeout(2000)
await page.locator("//a[text()='Right Click']").click()
//using modifiers inside click()===========
await page.locator("//a[text()='Right Click']").click({modifiers:["Shift"]})//shift+click

//right click=========================
await page.locator("//button[@id='btn_a']").click({button:"right"})
await page.waitForTimeout(2000)

//doubleclick========================
await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
// await page.locator("//button[@id='btn_a']").dblclick()
await page.locator("//button[@id='btn_a']").click({clickCount:2})
await page.waitForTimeout(2000)

//down(holding) and up(relasing)================================
await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
await page.locator("//div[@id='circle']").hover()
await page.mouse.down()
await page.waitForTimeout(2000)
await page.mouse.up()
await page.waitForTimeout(2000)

//click on a button which is disabled or hidden

await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
await page.locator("//input[@id='submit']").click({force:true})
await page.waitForTimeout(2000)

//dispatchEvent()...used to forcefully click on disable element

await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
await page.locator("//input[@id='submit']").dispatchEvent('click')
await page.waitForTimeout(2000)

//mouse hover=================================
await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
await page.locator("//img[@class='w-5 h-5 mt-5 ml-3 cursor-pointer ']").hover()
await page.waitForTimeout(2000)
//mouse move method...move()=====================
await page.mouse.move(100,200)
await page.waitForTimeout(3000)
})

test.skip("scrolling",async({page})=>{
 //vertical scroll
//   await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
//   await page.waitForTimeout(2000)
//   await page.mouse.wheel(0,1500)
//   await page.waitForTimeout(2000)
//   await page.mouse.wheel(0,-1500)
//   await page.waitForTimeout(2000)
  //horizontal scroll
   //vertical scroll
//   await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")
//   await page.waitForLoadState('load')
//   await page.waitForTimeout(2000)
//   await page.mouse.wheel(1500,0)
//   await page.waitForTimeout(2000)
//   await page.mouse.wheel(-1500,0)
//   await page.waitForTimeout(2000)

  //scroll to an element
  //scrollIntoViewIfNeeded()
  await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
  await page.waitForLoadState('load')
  await page.locator("//h3[text()='8. Complaints']").scrollIntoViewIfNeeded()
  await page.waitForTimeout(2000)

})

//drag and drop
test.only("drag and drop",async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
    // await page.waitForTimeout(2000)
    // await page.locator("//div[text()='Drag Me']").hover()
    // await page.waitForTimeout(2000)
    // await page.mouse.down()
    // await page.waitForTimeout(2000)
    // await page.mouse.move(200,300)
    // await page.waitForTimeout(2000)
    // await page.mouse.up()
//drag and drop to a target
// await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
//   await page.locator("//div[text()='Laptop Charger']").hover()
//   await page.waitForTimeout(2000)
//   await page.mouse.down()
//   await page.waitForTimeout(2000)
//   await page.locator("//div[@class='drop-column  min-h-[200px] bg-slate-100']").hover()
//   await page.mouse.up()
//   await page.waitForTimeout(2000)
  //drag and drop taking ele loc

//   await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
//   await page.locator("//div[text()='Laptop Charger']").hover()
//   await page.waitForTimeout(2000)
//   await page.mouse.down()
//   await page.waitForTimeout(2000)
//  let box= await page.locator("//div[@class='drop-column  min-h-[200px] bg-slate-100']").boundingBox()
//  await page.mouse.move(box.x,box.y)
//  await page.mouse.up()
//  await page.waitForTimeout(2000)
// console.log(box);

//dragto
await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
let source=page.locator("//div[text()='Laptop Charger']")
let target=page.locator("//div[@class='drop-column  min-h-[200px] bg-slate-100']")
await page.waitForTimeout(2000)
await source.dragTo(target)
await page.waitForTimeout(2000)




})