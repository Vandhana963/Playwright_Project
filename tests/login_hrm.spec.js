import {test} from "@playwright/test"
import loginpagehrm from "../PageObjectModel/loginpage_hrm.page.js"
import logindata_hrm from "../testdata/logindata_hrm.json"

test("login_hrm",async({page})=>{
    let lgnhrm=new loginpagehrm(page)
    let url=logindata_hrm.url
    let pwd=logindata_hrm.password
    let un=logindata_hrm.username
     //url
     await page.goto(url)
    await lgnhrm.loginpage(un,pwd)

})
