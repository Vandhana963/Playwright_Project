import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"


test("read single data",async ({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/exceldata.xlsx"))
    let sheet=await book.getWorksheet("sheet1")
    let data=await sheet.getRow(1).getCell(1).toString()
    console.log(data);
})
test("read multiple data",async({page})=>{
    
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/exceldata.xlsx"))
    let sheet=book.getWorksheet("sheet2")
    //row iteration
    for(let row=1;row<=sheet.actualRowCount;row++)
    {
        for(let c=1;c<sheet.actualColumnCount;c++)
        {
            let data=sheet.getRow(row).getCell(c).toString()
            console.log(data);
        }

    }
    //column iteration
    for(let c=1;c<=sheet.actualColumnCount;c++)
    {
        for(let row=1;row<=sheet.actualRowCount;row++)
        {
            let data =sheet.getRow(row).getCell(c).toString()
            console.log((data));
            
        }
    }

})

test("pass testdata to the app",async({page})=>{

    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/exceldata.xlsx"))
    let sheet=isBoxedPrimitive.getWorksheet(sheet1)
    let alldata=[]
    for(let r=1;r<=sheet.actualRowCount;r++)
    {
        let row=sheet.getRow(r)
        let url=row.getCell(1).toString()
        let usn=row.getCell(2).toString()
        let pwd=row.getCell(3).toString()
        alldata.push({url:url,usn:usn,pwd,pwd})
    }
    console.log(alldata);
    for(let d of alldata)
    {
        await page.goto(d.url)
        await page.waitForTimeout(2000)
        await page.getByRole("link",{name:"CRM"}).click()
        let p2=page.waitForEvent("popup")
        await page.getByRole("link",{name:"small CRM"}).click()
        let page2=await p2
        await page2.getByRole("link",{name:"Admin"}).click()
        await page2.locator("#txtusername").fill(d.usn)
        await page2.locator("#txtpassword").fill(d.pwd)
        await page2.getByRole("button",{name:"login"}).click()
        await page2.close()
        await page.waitForTimeout(2000)
    }
    


})

