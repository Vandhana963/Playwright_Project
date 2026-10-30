import {test} from "@playwright/test"
import fs from "fs" //filesystem, it comes from nodejs, it provides some API's through which we can 
                     //read,write,delete,modify the files in system r any specific directory
let datafile=fs.readFileSync("C:/Users/Ajith Chowdary/OneDrive/Desktop/playwright_Z/testdata/singlesetdata.json")
let data=JSON.parse(datafile)
test.describe("grouping test",async(params)=>{

     let url=data.url
     let p=data.password
     let u=data.username

     test(" dcbvfg",async({page})=>{
       await page.goto(url)
    await page.locator("input#username").fill(u)
    await page.locator("input#password").fill(p)
    await page.getByRole("button",{name:"Submit"}).click()
    let title=await page.title()

    if(title=="Logged In Successfully | Practice Test Automation")
    {
        console.log("valid credentials");
        
    }
    else{
        console.log("invalid credentials");
        
    }
 })

   test("  uyjgbtf  ",async({page})=>{
       await page.goto(url)
    await page.locator("input#username").fill(u)
    await page.locator("input#password").fill(p)
    await page.getByRole("button",{name:"Submit"})
    let title=await page.title()

    if(title=="Logged In Successfully | Practice Test Automation")
    {
        console.log("valid credentials");
        
    }
    else{
        console.log("invalid credentials");
        
    }
 })

 test("  edwopjkr  ",async({page})=>{
       await page.goto(url)
    await page.locator("input#username").fill(u)
    await page.locator("input#password").fill(p)
    await page.getByRole("button",{name:"Submit"})
    let title=await page.title()

    if(title=="Logged In Successfully | Practice Test Automation")
    {
        console.log("valid credentials");
        
    }
    else{
        console.log("invalid credentials");
        
    }
 })


     



})
