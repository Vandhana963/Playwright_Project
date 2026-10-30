import {test} from "@playwright/test"
import path from "node:path";
import fs from "fs"

test("upload file",async({page})=>{
     
    await page.goto("https://testautomationpractice.blogspot.com/")
    //to uplaod single file
    // await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../../uploadfiles/resume.txt"))
    // //await page.locator("#singleFileInput").setInputFiles("C:/Users/Ajith Chowdary/OneDrive/Desktop/playwright_Z/uploadfiles/resume.txt")
    // await page.getByRole("button",{name:"Upload Single File"}).click()
    // await page.waitForTimeout(4000)

    // //to uplod multile files
    // console.log(__dirname);
    // await page.locator("#multipleFilesInput").setInputFiles(path.join(__dirname,"../../uploadfiles/resume.txt","../../uploadfiles/aa.xlxs"))
    // //await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/Ajith Chowdary/OneDrive/Desktop/playwright_Z/uploadfiles/aa.xlxs","C:/Users/Ajith Chowdary/OneDrive/Desktop/playwright_Z/uploadfiles/resume.txt"])

    // await page.getByRole("button",{name:"Upload Multiple Files"}).click()
    //  await page.waitForTimeout(4000)
       
    await page.locator("#singleFileInput").setInputFiles("C:/Users/Ajith Chowdary/OneDrive/Desktop/New Text Document.txt")
     await page.locator("#singleFileInput").setInputFiles([])
    await page.getByRole("button",{name:"Upload Single File"}).click()
await page.waitForTimeout(4000)
await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/Ajith Chowdary/OneDrive/Desktop/New Microsoft Excel Worksheet.xlsx","C:/Users/Ajith Chowdary/OneDrive/Desktop/New Text Document.txt"])
await page.locator("#multipleFilesInput").setInputFiles([])
await page.getByRole("button",{name:"Upload Multiple Files"}).click()
await page.waitForTimeout(4000)

})

test.only("download file",async({page})=>{
   await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
   await page.getByPlaceholder("Enter text here").fill("Hello iam downloading")
   await page.locator("#fileName").fill("file.txt")
//    let [downloadfile]=await Promise.all([page.waitForEvent("download"),
//                                           page.getByRole("button",{name:"Download"}).click()])
   //let downloadfodler="C:/Users/Ajith Chowdary/OneDrive/Desktop/playwright_Z/downloadedfile"
   let download=page.waitForEvent("download")
   await page.getByRole("button",{name:"Download"}).click()
   let downloadfile=await download
   //location from my loc system
    let downloadfolder="C:/Users/Ajith Chowdary/OneDrive/Desktop/downloads"

let filename=downloadfile.suggestedFilename()
// await downloadfile.saveAs(path.join(__dirname,"../../downloadedfile",filename))
await downloadfile.saveAs(path.join(downloadfolder,filename))
let fullpath=path.join(downloadfolder,filename)
    //await downloadfile.saveAs(path.join(downloadfodler,filename))
//    console.log(await downloadfile.path());
        await page.waitForTimeout(1000)
//verify if saved 
if(fs.existsSync(fullpath)){

    console.log(`file eists: ${fullpath}`);
    
}
else{
    console.log(`no such file exists`);
    
}



})