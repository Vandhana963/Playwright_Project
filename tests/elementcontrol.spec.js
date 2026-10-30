import {test} from "@playwright/test"

test("elements controls",async({page})=>{
  //await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
   //fill()
//    await page.locator("[name='name']").fill("vandhana")

   //input value
//    let txt=await page.locator("[name='name']").textContent()
//    console.log(txt);

// let txt=await page.locator("[name='name']").inputValue()
//    console.log(txt);
   
//    await page.locator("[name='email']").fill("asdh@gmail.com")

//    //inputValue
//    let txt1=await page.locator("[name='email']").inputValue()
//    console.log(txt1);

//    //innerText
//    await page.locator("//section[text()='Radio Button']").innerText()

   //click()
//    await page.locator("//button[text()='Register']").click()

//pause()
//    //await page.pause(3000)

//innerText()
//    let text=await page.locator("//section[text()='Radio Button']").innerText()
//    console.log(text);

//textContent
//    let text1=await page.locator("//section[text()='Radio Button']").textContent()
//    console.log(text1);

 //all textContents 
 await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0") 
await page.locator("//section[@class='poppins text-[14px]']").waitFor()
let txts=await page.locator("//section[@class='poppins text-[14px]']").allTextContents()
console.log(txts);


//element.getAttribute("aatt-name")
//page.locator("selector").getattribute("AN")
//    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
// let txt=await page.locator("//input[@id='male']").getAttribute("class")
// console.log(txt);

//element.all()
// await page.goto("https://www.flipkart.com/")
// let txts=await page.locator("//div[@class='css-g5y9jx']").all()
// console.log(txts);

//all()
// await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
// let txts=await page.locator("//section[text()='poppins text-[14px]']").all()
// console.log(txts);

//isVisible()
//page.locator("selector").isVisible()
//await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
//await page.locator("//input[@id='phone']").fill("12556")
// await page.locator("//input[@id='phon']").waitFor()
// let v=await page.locator("//input[@id='phone']").isVisible()
// console.log(v);
//isEnabled
// await page.locator("//input[@id='phone']").waitFor()
// let e=await page.locator("//input[@id='phone']").isEnabled()
// console.log(e);
//isEditable
// await page.locator("//input[@id='phone']").waitFor()
// let e=await page.locator("//input[@id='phone']").isEditable()
// console.log(e);
// await page.locator("//button[text()='Yes']").waitFor()
// let e=await page.locator("//button[text()='Yes']").isEditable()
// console.log(e);

 //ischecked
//await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
// await page.locator('//input[@id="domain_a"]').waitFor()
// let e=await page.locator('//input[@id="domain_a"]').isChecked()
// console.log(e);

//waitFor()
// await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
// await page.locator('//input[@id="domain_a"]').waitFor({state:'visible',timeout:2000})
// let e=await page.locator('//input[@id="domain_a"]').isChecked()
// console.log(e);



                                                                                                                                                                                                                                                                                                                                                            



})