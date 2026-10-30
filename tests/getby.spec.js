import {test} from "@playwright/test"
test("get by methods",async({page})=>{
//   await page.goto("https://practicetestautomation.com/practice-test-login/")
//   //getByLabel() and exact
//   await page.getByLabel("Username",{exact:true}).fill("student")
  //getByPlaceholder()
//    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//   await page.getByPlaceholder("Enter your nam",{exact:false}).fill("gsbdbjm")
//getByText()
//  await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//  await page.getByText('//button[text()="Register"]',{exact:true}).click()
 //getByAltText()
//  await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//  await page.getByAltText('signin',{exact:true}).click()

 //getByTitle()
//  await page.goto("https://demoapps.qspiders.com/ui/image?sublist=0")
//  await page.getByTitle('Image tooltip',{exact:true}).click()

 //getByROle
//  await page.goto("https://demoapps.qspiders.com/ui/link?sublist=0")
//  await page.getByRole('link',{name:'Women'}).first().click()

//getByTestId
await page.goto("https://www.saucedemo.com/")
await page.getByTestId("username").first().fill("dsdef")


 



})