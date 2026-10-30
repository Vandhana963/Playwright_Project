import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"
test("Write data",async({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/exceldata.xlsx"))
    let sheet =book.getWorksheet("sheet5")
    // if(!sheet)
    // {
    //     sheet=book.addWorksheet("sheet5")
    // }
    // sheet.getRow(1).getCell(1).value="hello"
    // await book.xlsx.writeFile(path.join(__dirname,"../../testdata/exceldata.xlsx"))
    if(!sheet)
    {
        sheet=book.addWorksheet("sheet5")
    }
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill("shoes")
    await page.locator('//div[@class="s-suggestion-container"]').first().waitFor()
    let allopt=await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
    console.log(allopt);
    for(let text of allopt)
    {

        let i=allopt.indexOf(text)
        // sheet.getRow(i).getCell(i+1).value=text
         sheet.getRow(i+1).getCell(i).value=text
         await book.xlsx.writeFile(path.join(__dirname,"../../testdata/exceldata.xlsx"))

    }
    

})